-- AfriBiobank Database Initialization Script

-- Create Kong database
CREATE DATABASE IF NOT EXISTS kong;

-- Create MLflow database
CREATE DATABASE IF NOT EXISTS mlflow;

-- Connect to main database
\c afribiobank;

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm"; -- For text search
CREATE EXTENSION IF NOT EXISTS "postgis"; -- For geospatial data

-- =========================================================================
-- USERS & AUTHENTICATION
-- =========================================================================

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    institution_id UUID REFERENCES institutions(id),
    role VARCHAR(50) NOT NULL CHECK (role IN ('admin', 'researcher', 'clinician', 'data_steward', 'developer')),
    is_active BOOLEAN DEFAULT true,
    is_verified BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    last_login TIMESTAMP,
    metadata JSONB
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_institution ON users(institution_id);
CREATE INDEX idx_users_role ON users(role);

-- =========================================================================
-- INSTITUTIONS
-- =========================================================================

CREATE TABLE institutions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) CHECK (type IN ('hospital', 'university', 'research_center', 'government', 'commercial')),
    country VARCHAR(100) NOT NULL,
    city VARCHAR(100),
    location GEOGRAPHY(POINT),
    website VARCHAR(255),
    contact_email VARCHAR(255),
    is_verified BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT NOW(),
    metadata JSONB
);

CREATE INDEX idx_institutions_country ON institutions(country);
CREATE INDEX idx_institutions_type ON institutions(type);

-- =========================================================================
-- DATASETS
-- =========================================================================

CREATE TABLE datasets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    doi VARCHAR(100) UNIQUE,
    owner_id UUID REFERENCES users(id),
    institution_id UUID REFERENCES institutions(id),
    is_public BOOLEAN DEFAULT false,
    is_certified BOOLEAN DEFAULT false,
    quality_score DECIMAL(3,2) CHECK (quality_score >= 0 AND quality_score <= 5),
    modality VARCHAR(50),
    body_part VARCHAR(100),
    pathology VARCHAR(100),
    patient_count INTEGER DEFAULT 0,
    study_count INTEGER DEFAULT 0,
    image_count INTEGER DEFAULT 0,
    total_size_bytes BIGINT DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    published_at TIMESTAMP,
    metadata JSONB
);

CREATE INDEX idx_datasets_owner ON datasets(owner_id);
CREATE INDEX idx_datasets_institution ON datasets(institution_id);
CREATE INDEX idx_datasets_modality ON datasets(modality);
CREATE INDEX idx_datasets_public ON datasets(is_public);
CREATE INDEX idx_datasets_certified ON datasets(is_certified);

-- =========================================================================
-- STUDIES
-- =========================================================================

CREATE TABLE studies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    study_instance_uid VARCHAR(255) UNIQUE NOT NULL,
    dataset_id UUID REFERENCES datasets(id) ON DELETE CASCADE,
    patient_id VARCHAR(100),
    study_date DATE,
    study_time TIME,
    modality VARCHAR(50),
    study_description TEXT,
    accession_number VARCHAR(100),
    referring_physician VARCHAR(255),
    institution_name VARCHAR(255),
    manufacturer VARCHAR(100),
    storage_path TEXT NOT NULL,
    file_size BIGINT,
    series_count INTEGER DEFAULT 0,
    image_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW(),
    metadata JSONB
);

CREATE INDEX idx_studies_dataset ON studies(dataset_id);
CREATE INDEX idx_studies_uid ON studies(study_instance_uid);
CREATE INDEX idx_studies_patient ON studies(patient_id);
CREATE INDEX idx_studies_date ON studies(study_date);
CREATE INDEX idx_studies_modality ON studies(modality);

-- =========================================================================
-- AI/ML MODELS
-- =========================================================================

CREATE TABLE ml_models (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    version VARCHAR(50) NOT NULL,
    description TEXT,
    model_type VARCHAR(50) CHECK (model_type IN ('classification', 'segmentation', 'detection', 'regression')),
    framework VARCHAR(50),
    owner_id UUID REFERENCES users(id),
    storage_path TEXT NOT NULL,
    file_size BIGINT,
    task VARCHAR(100),
    modality VARCHAR(50),
    input_shape JSONB,
    output_shape JSONB,
    metrics JSONB,
    hyperparameters JSONB,
    is_active BOOLEAN DEFAULT true,
    is_public BOOLEAN DEFAULT false,
    downloads INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(name, version)
);

CREATE INDEX idx_models_owner ON ml_models(owner_id);
CREATE INDEX idx_models_type ON ml_models(model_type);
CREATE INDEX idx_models_modality ON ml_models(modality);
CREATE INDEX idx_models_public ON ml_models(is_public);

-- =========================================================================
-- FEDERATED LEARNING
-- =========================================================================

CREATE TABLE fl_campaigns (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    model_id UUID REFERENCES ml_models(id),
    coordinator_id UUID REFERENCES users(id),
    status VARCHAR(50) CHECK (status IN ('pending', 'active', 'paused', 'completed', 'failed')),
    current_round INTEGER DEFAULT 0,
    total_rounds INTEGER NOT NULL,
    min_participants INTEGER DEFAULT 3,
    participants_count INTEGER DEFAULT 0,
    aggregation_strategy VARCHAR(50) DEFAULT 'fedavg',
    privacy_budget DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT NOW(),
    started_at TIMESTAMP,
    completed_at TIMESTAMP,
    config JSONB,
    results JSONB
);

CREATE INDEX idx_fl_campaigns_status ON fl_campaigns(status);
CREATE INDEX idx_fl_campaigns_coordinator ON fl_campaigns(coordinator_id);

-- =========================================================================
-- ACCESS REQUESTS
-- =========================================================================

CREATE TABLE access_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    dataset_id UUID REFERENCES datasets(id),
    requester_id UUID REFERENCES users(id),
    purpose TEXT NOT NULL,
    project_description TEXT,
    ethics_approval_number VARCHAR(100),
    status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'revoked')),
    requested_at TIMESTAMP DEFAULT NOW(),
    reviewed_at TIMESTAMP,
    reviewed_by UUID REFERENCES users(id),
    review_notes TEXT,
    expires_at TIMESTAMP,
    metadata JSONB
);

CREATE INDEX idx_access_requests_dataset ON access_requests(dataset_id);
CREATE INDEX idx_access_requests_requester ON access_requests(requester_id);
CREATE INDEX idx_access_requests_status ON access_requests(status);

-- =========================================================================
-- AUDIT LOGS
-- =========================================================================

CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    action VARCHAR(100) NOT NULL,
    resource_type VARCHAR(50),
    resource_id UUID,
    ip_address INET,
    user_agent TEXT,
    details JSONB,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_audit_user ON audit_logs(user_id);
CREATE INDEX idx_audit_resource ON audit_logs(resource_type, resource_id);
CREATE INDEX idx_audit_created ON audit_logs(created_at);
CREATE INDEX idx_audit_action ON audit_logs(action);

-- =========================================================================
-- CONSENT MANAGEMENT
-- =========================================================================

CREATE TABLE consent_records (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    patient_id VARCHAR(100) NOT NULL,
    dataset_id UUID REFERENCES datasets(id),
    consent_type VARCHAR(50) CHECK (consent_type IN ('research', 'ai_training', 'commercial', 'all')),
    is_granted BOOLEAN DEFAULT true,
    granted_at TIMESTAMP DEFAULT NOW(),
    expires_at TIMESTAMP,
    withdrawn_at TIMESTAMP,
    consent_document_path TEXT,
    metadata JSONB
);

CREATE INDEX idx_consent_patient ON consent_records(patient_id);
CREATE INDEX idx_consent_dataset ON consent_records(dataset_id);

-- =========================================================================
-- TRIGGERS FOR UPDATED_AT
-- =========================================================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_datasets_updated_at BEFORE UPDATE ON datasets
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_ml_models_updated_at BEFORE UPDATE ON ml_models
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =========================================================================
-- SAMPLE DATA (FOR DEVELOPMENT)
-- =========================================================================

-- Insert sample institution
INSERT INTO institutions (name, type, country, city, contact_email)
VALUES ('Lagos University Teaching Hospital', 'hospital', 'Nigeria', 'Lagos', 'info@luth.edu.ng');

-- Insert admin user
INSERT INTO users (email, username, password_hash, first_name, last_name, role, is_verified)
VALUES ('admin@afribiobank.org', 'admin', '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5h0AjKpwCdw.2', 'Admin', 'User', 'admin', true);

COMMIT;
