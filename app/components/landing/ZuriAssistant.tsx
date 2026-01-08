'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, MessageCircle, Mic, MicOff, Send, ShieldCheck } from 'lucide-react';

type ChatMessage = {
  id: string;
  role: 'assistant' | 'user';
  text: string;
};

const quickReplies = [
  { id: 'dataset', label: 'Find MRI brain tumors in Nigeria' },
  { id: 'fl', label: 'Explain federated learning' },
  { id: 'access', label: 'Request dataset access' },
  { id: 'privacy', label: 'How do you protect privacy?' },
];

const responseMap: Record<string, string> = {
  dataset:
    'Got it. Filters applied: modality = MRI, anatomy = brain, pathology = tumor, country = Nigeria. I found 4 datasets (2,340 scans). Want me to narrow by age range or institution?',
  fl:
    'Federated learning trains models across hospitals without moving patient data. Only model updates are shared, keeping data local and private. Want a step-by-step flow?',
  access:
    'I can guide you through the access request. You will need ethics approval, a brief project description, and a data usage agreement. Ready to start?',
  privacy:
    'We use de-identification, encryption, access controls, and audit logs. You approve access and can revoke it anytime. Want the full privacy checklist?',
};

const knowledgeBase = [
  {
    id: 'impl-guide-1',
    title: 'AfriBiobank Technical Implementation Guide (Part 1)',
    summary:
      'Defines the mission, system architecture, tech stack, and high-level platform design, including presentation, API gateway, microservices, data, storage, and security layers.',
    keywords: ['implementation guide', 'architecture', 'tech stack', 'system design', 'microservices', 'api gateway'],
  },
  {
    id: 'impl-guide-2',
    title: 'Implementation Guide (Part 2)',
    summary:
      'Details the database dashboard, image analysis module, AI/ML functionality, federated learning, cloud node toolkit, and related deployment configurations.',
    keywords: ['dashboard', 'image analysis', 'ai', 'ml', 'federated learning', 'cloud node toolkit'],
  },
  {
    id: 'impl-guide-3',
    title: 'Implementation Guide (Part 3)',
    summary:
      'Covers semantic web layer (RDF/OMIABIS), agentic API, governance & compliance, API specs, database schemas, security, testing, and monitoring.',
    keywords: ['semantic web', 'omiabis', 'rdf', 'agentic api', 'governance', 'api specs', 'security', 'testing', 'monitoring'],
  },
  {
    id: 'flowcharts',
    title: 'Process Flowcharts & Diagrams',
    summary:
      'Visual workflows for data upload, authentication, federated learning rounds, access requests, DICOM-to-RDF conversion, quality checks, and deployment.',
    keywords: ['flowchart', 'workflow', 'upload', 'access request', 'dicom', 'rdf', 'quality'],
  },
  {
    id: 'website-content',
    title: 'Website Content & Copywriting Guide',
    summary:
      'Complete copy for landing page sections, platform pages, legal policies, UI messages, and marketing materials.',
    keywords: ['website content', 'copy', 'landing page', 'faq', 'terms', 'privacy', 'marketing'],
  },
  {
    id: 'afribiobank-paper',
    title: 'AfriBiobank Paper (2025)',
    summary:
      'Outlines challenges in African medical imaging data sharing and proposes AfriBiobank with governance, federated learning, semantic web standards, and distributed infrastructure.',
    keywords: ['paper', 'afribiobank', 'data sharing', 'governance', 'federated learning', 'semantic', 'fhir', 'dicom'],
  },
  {
    id: 'afribiobank-supplement',
    title: 'AfriBiobank Paper Supplementary',
    summary:
      'Describes multi-stakeholder governance, including hospitals, researchers, governments, and advocates, plus a federated learning protocol for decentralized training.',
    keywords: ['supplementary', 'stakeholders', 'governance', 'federated learning', 'protocol'],
  },
  {
    id: 'medical-imaging-handbook',
    title: 'Handbook of Medical Imaging (Academic Press)',
    summary:
      'Text extraction pending. Provide a text summary or OCR version to include detailed coverage.',
    keywords: ['handbook', 'medical imaging', 'academic press'],
    pending: true,
  },
];

const specHighlights = [
  {
    title: 'Mission',
    detail:
      'Zuri guides researchers, institutions, and developers with 24/7 support to reduce time-to-data access and improve success.',
  },
  {
    title: 'Core Capabilities',
    detail:
      'Onboarding, dataset discovery, analytics interpretation, technical support, and collaboration matching.',
  },
  {
    title: 'Multilingual Support',
    detail:
      'Phase 1: English, French, Arabic, Swahili, Portuguese. Phase 2: Amharic, Hausa, Yoruba, Zulu, Somali.',
  },
  {
    title: 'Privacy & Security',
    detail:
      'TLS 1.3 in transit, AES-256 at rest, redaction of sensitive data, and configurable retention.',
  },
];

const emojiPool = {
  brain: '🧠',
};

export function ZuriAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSpec, setShowSpec] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [listening, setListening] = useState(false);
  const [voiceError, setVoiceError] = useState('');
  const recognitionRef = useMemo<{ current: any }>(() => ({ current: null }), []);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      text:
        "Hi! I'm Zuri 👋 – your AfriBiobank AI buddy! I'll help you explore our medical imaging database and answer your questions. Don't know something? I'll tell you straight – no wild guesses, under my watch! 😄",
    },
  ]);

  const initials = useMemo(() => messages.length + 1, [messages.length]);

  const matchKnowledge = (text: string) => {
    const normalized = text.toLowerCase();
    const matches = knowledgeBase.filter((entry) =>
      entry.keywords.some((keyword) => normalized.includes(keyword))
    );

    if (!matches.length) return null;

    const summaries = matches
      .map((entry) => `• ${entry.title}: ${entry.summary}`)
      .join('\n');

    const pending = matches.filter((entry) => entry.pending);
    const pendingNote = pending.length
      ? '\nNote: Some sources are pending readable text for deeper summaries.'
      : '';

    const intros = [
      "Hmm from my understanding:",
      "Here’s what I can share:",
      "Here’s a quick summary:",
      "From what I see:",
    ];
    const intro = intros[Math.floor(Math.random() * intros.length)];
    return `${intro}\n${summaries}${pendingNote}`;
  };

  const findResponse = (text: string) => {
    const knowledge = matchKnowledge(text);
    if (knowledge) return knowledge;

    const normalized = text.toLowerCase();

    if (normalized.includes('brain') && (normalized.includes('child') || normalized.includes('pediatric'))) {
      return 'Searching pediatric brain imaging datasets. I can filter by modality (MRI/CT), country, age range, or pathology. Which do you prefer?';
    }
    if (normalized.includes('brain') || normalized.includes('neuro')) {
      return 'Looking for brain imaging data. Tell me the modality (MRI/CT), age group, and country so I can refine results.';
    }
    if (normalized.includes('mri') || normalized.includes('ct') || normalized.includes('x-ray') || normalized.includes('ultrasound') || normalized.includes('pet')) {
      return 'Got it. Tell me the anatomy, pathology, and country so I can narrow down the dataset list.';
    }
    if (normalized.includes('dataset') || normalized.includes('data') || normalized.includes('images') || normalized.includes('scans')) {
      return 'I can help you find datasets by modality, anatomy, disease group, country, and age range. What are you studying?';
    }
    if (normalized.includes('federated') || normalized.includes('fl')) {
      return responseMap.fl;
    }
    if (normalized.includes('privacy') || normalized.includes('security')) {
      return responseMap.privacy;
    }
    if (normalized.includes('access') || normalized.includes('request') || normalized.includes('approval')) {
      return responseMap.access;
    }
    if (normalized.includes('governance') || normalized.includes('policy') || normalized.includes('compliance')) {
      return 'AfriBiobank uses governance frameworks covering ethics, consent, access control, and auditability. Want a summary of the compliance stack?';
    }
    if (normalized.includes('api') || normalized.includes('sdk') || normalized.includes('integration')) {
      return 'I can guide you through API usage, authentication, and dataset search. What are you trying to build?';
    }
    return "I can help with datasets, onboarding, governance, and API guidance. Tell me your goal or ask a specific question so I can narrow it down.";
  };

  const sendMessage = (text: string, replyKey?: string) => {
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: `user-${initials}`,
      role: 'user',
      text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const responseText = replyKey ? responseMap[replyKey] : findResponse(text);

    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${initials}`,
          role: 'assistant',
          text: responseText,
        },
      ]);
      setIsTyping(false);
    }, 700);
  };

  const getExpression = () => {
    return emojiPool.brain;
  };

  useEffect(() => {
    if (!('speechSynthesis' in window)) return;
    const loadVoices = () => {
      setVoices(window.speechSynthesis.getVoices());
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  useEffect(() => {
    if (!voiceEnabled) return;
    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || lastMessage.role !== 'assistant') return;

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const spokenText = lastMessage.text.replace(/[\p{Extended_Pictographic}\u200D\uFE0F]/gu, '').replace(/\s{2,}/g, ' ').trim();
      const utterance = new SpeechSynthesisUtterance(spokenText);
      utterance.rate = 0.95;
      utterance.pitch = 1.05;
      utterance.volume = 1;
      if (voices.length) {
        const preferredVoice =
          voices.find((voice) => /natural|neural|premium|enhanced/i.test(voice.name)) ||
          voices.find((voice) => /female|woman|zira|susan|samantha|victoria|ava|allison|jenny|aria|emma/i.test(voice.name)) ||
          voices.find((voice) => voice.lang.startsWith('en')) ||
          voices[0];
        if (preferredVoice) utterance.voice = preferredVoice;
      }
      window.speechSynthesis.speak(utterance);
    }
  }, [messages, voiceEnabled, voices]);

  const toggleListening = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setVoiceError('Voice input is not supported in this browser.');
      return;
    }

    if (!recognitionRef.current) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        sendMessage(transcript);
      };

      recognition.onerror = () => {
        setVoiceError('Voice input failed. Please try again.');
        setListening(false);
      };

      recognition.onend = () => setListening(false);
      recognitionRef.current = recognition;
    }

    if (listening) {
      recognitionRef.current?.stop();
      setListening(false);
      return;
    }

    setVoiceError('');
    setListening(true);
    recognitionRef.current?.start();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="chat-open"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-[340px] sm:w-[380px] rounded-3xl border border-slate-200 bg-white shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-500 text-white">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/15 flex items-center justify-center">
                  <span className="zuri-emoji">🧠</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">Zuri AI Assistant</p>
                  <p className="text-xs text-white/80">Your AI Guide to African Medical Research</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-full bg-white/15 hover:bg-white/25 transition flex items-center justify-center"
                aria-label="Minimize chat"
              >
                <ChevronDown size={18} />
              </button>
            </div>

            <div className="px-4 pt-4 pb-2">
              <button
                type="button"
                onClick={() => setShowSpec((prev) => !prev)}
                className="w-full flex items-center justify-between rounded-2xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-50 transition"
              >
                Zuri overview & capabilities
                {showSpec ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              <AnimatePresence>
                {showSpec ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-3 space-y-3 text-xs text-slate-700"
                  >
                    {specHighlights.map((item) => (
                      <div key={item.title} className="rounded-2xl bg-slate-50 p-3">
                        <p className="text-slate-900 font-semibold">{item.title}</p>
                        <p className="mt-1">{item.detail}</p>
                      </div>
                    ))}
                    <div className="flex items-start gap-2 text-[11px] text-slate-700">
                      <ShieldCheck size={14} className="mt-0.5 text-emerald-500" />
                      Designed for 24/7 support, <span className="font-semibold">Zuri</span> targets 90%+ CSAT and 60% ticket reduction.
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            <div className="px-4 pb-3 space-y-3">
              <div className="h-64 overflow-y-auto pr-1 space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                        message.role === 'assistant'
                          ? 'zuri-bubble bg-gradient-to-br from-indigo-50 via-white to-emerald-50 text-slate-700 border border-slate-200'
                          : 'bg-slate-900 text-white'
                      }`}
                    >
                      {message.role === 'assistant' ? (
                        <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/80 text-base">
                          {getExpression()}
                        </span>
                      ) : null}
                      {message.text}
                    </div>
                  </div>
                ))}

                {isTyping ? (
                  <div className="flex justify-start">
                    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 flex items-center gap-2">
                      <span className="inline-flex gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" />
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </span>
                      Zuri is typing
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply.id}
                    type="button"
                    onClick={() => sendMessage(reply.label, reply.id)}
                    className="rounded-full border border-slate-200 px-3 py-1 text-[11px] font-semibold text-slate-800 hover:bg-slate-100 transition"
                  >
                    {reply.label}
                  </button>
                ))}
              </div>

              <div className="zuri-audio-bar flex items-center justify-between rounded-2xl border border-slate-200 px-3 py-2 text-[11px] text-slate-700">
                <span>Audio conversation</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setVoiceEnabled((prev) => !prev)}
                    className={`zuri-audio-toggle rounded-full px-3 py-1 font-semibold transition ${
                      voiceEnabled ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {voiceEnabled ? 'Voice on' : 'Voice off'}
                  </button>
                  <button
                    type="button"
                    onClick={toggleListening}
                    className={`zuri-audio-icon h-8 w-8 rounded-full flex items-center justify-center transition ${
                      listening ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                    aria-label="Toggle voice input"
                  >
                    {listening ? <Mic size={16} /> : <MicOff size={16} />}
                  </button>
                </div>
              </div>
              {voiceError ? (
                <p className="text-[11px] text-rose-500">{voiceError}</p>
              ) : null}

              <form
                className="flex items-center gap-2 rounded-2xl border border-slate-200 px-3 py-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  sendMessage(input);
                }}
              >
                <MessageCircle size={16} className="text-slate-600" />
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask Zuri anything..."
                  className="flex-1 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="h-8 w-8 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition"
                  aria-label="Send message"
                >
                  <Send size={14} />
                </button>
              </form>
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="chat-closed"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-emerald-500 px-4 py-3 text-white shadow-xl"
          >
            <span className="zuri-emoji">🧠</span>
            <span className="text-sm font-semibold">Chat with Zuri</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
