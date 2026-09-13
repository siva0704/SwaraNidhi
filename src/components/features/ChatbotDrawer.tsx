import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Bot, User, ArrowRight, ExternalLink, Minimize2 } from 'lucide-react';
import { AssistantService } from '../../services/aiService';
import { ChatMessage } from '../../types';

interface ChatbotDrawerProps {
  onOpenApply: () => void;
}

export const ChatbotDrawer: React.FC<ChatbotDrawerProps> = ({ onOpenApply }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'assistant',
      text: 'Namaste! I am the SwaraNidhi Navigator. How can I assist you with our six talent arenas, student journey, or application pathways?',
      timestamp: 'Just now',
      chips: [
        'What is SwaraNidhi?',
        'Who can participate?',
        'Six Talent Arenas',
        'How to apply?',
      ],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = async (userText: string) => {
    if (!userText.trim()) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await AssistantService.askAssistant(userText);
      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: response.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        chips: response.suggestedChips,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      const errorMessage: ChatMessage = {
        id: `err-${Date.now()}`,
        sender: 'assistant',
        text: 'I am experiencing a slight delay. Please feel free to consult our FAQ section or submit an application inquiry.',
        timestamp: 'Just now',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating trigger button */}
      {!isOpen && (
        <button
          id="open-chatbot-btn"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-[#1E2022] text-[#FAF9F5] shadow-xl hover:bg-[#B45309] transition-all flex items-center gap-2.5 group cursor-pointer border border-[#D5CEBF]"
          aria-label="Open SwaraNidhi AI Assistant"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 text-[#D97706] group-hover:text-white transition-colors" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <span className="hidden sm:inline text-xs font-semibold tracking-wide">
            Ask SwaraNidhi AI
          </span>
        </button>
      )}

      {/* Floating Chatbot Panel */}
      {isOpen && (
        <div 
          id="swaranidhi-chatbot-window"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[92vw] sm:w-[380px] md:w-[420px] bg-[#FAF9F5] rounded-3xl shadow-2xl border border-[#D5CEBF] overflow-hidden flex flex-col h-[560px] max-h-[85vh] animate-in slide-in-from-bottom-5 duration-200"
        >
          {/* Top header */}
          <div className="p-4 bg-[#1E2022] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#B45309] text-white flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">SwaraNidhi AI Assistant</h4>
                <p className="text-[10px] text-white/70 font-mono">Knowledge Assistant • Event 1.0</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10"
                aria-label="Minimize chat"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              <button
                id="close-chatbot-btn"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-[#F4F1EA] border border-[#E5E0D5] flex items-center justify-center text-[#B45309] shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-[#1E2022] text-white rounded-br-none shadow-xs'
                      : 'bg-white border border-[#E5E0D5] text-[#1E2022] rounded-bl-none shadow-xs'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className={`block text-[9px] mt-1.5 font-mono ${
                    msg.sender === 'user' ? 'text-white/60 text-right' : 'text-[#A1A1AA]'
                  }`}>
                    {msg.timestamp}
                  </span>

                  {/* Suggestion Chips */}
                  {msg.chips && msg.chips.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-2.5 border-t border-[#F4F1EA]">
                      {msg.chips.map((chip, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSend(chip)}
                          className="px-2.5 py-1 bg-[#FAF9F5] border border-[#E5E0D5] rounded-full text-[10px] text-[#44403C] hover:border-[#B45309] hover:text-[#B45309] transition-colors"
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-[#E5E0D5] flex items-center justify-center text-[#1E2022] shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-center text-xs text-[#78716C] italic">
                <div className="w-6 h-6 rounded-full bg-[#F4F1EA] flex items-center justify-center text-[#B45309]">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <span>Consulting SwaraNidhi knowledge base...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick CTA footer */}
          <div className="px-4 py-2 bg-[#F4F1EA]/60 border-t border-[#E5E0D5] flex items-center justify-between text-[11px]">
            <span className="text-[#78716C]">Ready to start?</span>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenApply();
              }}
              className="font-bold text-[#B45309] hover:text-[#78350F] inline-flex items-center gap-1"
            >
              <span>Launch Application</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Input field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="p-3 bg-white border-t border-[#E5E0D5] flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about arenas, eligibility, rubrics..."
              className="flex-1 px-3.5 py-2 bg-[#FAF9F5] border border-[#E5E0D5] rounded-xl text-xs text-[#1E2022] focus:outline-hidden focus:border-[#B45309]"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 rounded-xl bg-[#1E2022] text-white hover:bg-[#B45309] disabled:opacity-40 transition-colors"
              aria-label="Send query"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
