import React, { useState, useEffect, useRef } from 'react';
import { 
  Brain, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft,
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  Layers, 
  Terminal,
  Send,
  X,
  Bot,
  Zap,
  ArrowDown,
  Briefcase,
  GraduationCap,
  TrendingUp,
  Award,
  BookOpen,
  Calendar,
  FileText,
  UploadCloud,
  Play,
  Settings,
  MoreVertical,
  File,
  Code,
  Smartphone,
  Store,
  Rocket,
  Loader2,
  MessageSquare,
  Rabbit
} from 'lucide-react';

// --- 1. Resume Data ---
const resumeData = {
  profile: {
    name: "刘冰妍",
    title: "A Bit About Me",
    tagline: "Bridging Human Intent & AI Capability",
    location: "上海",
    email: "1455407272@qq.com",
    phone: "138-1651-6788",
    summary: "拥有交互设计背景的 AI 产品经理。精通 Prompt Engineering 与 Agent 开发，擅长利用 LLM 与多模态技术构建自动化工作流。拥有从 0 到 1 搭建 AI 提效工具链及百万级流量 C 端产品的实战经验。",
    avatar: "https://i.postimg.cc/DzjSKNd9/Gemini-Generated-Image-uxw9aauxw9aauxw9.png", 
    social: {
      github: "https://github.com/alex-liu",
      linkedin: "https://linkedin.com/in/alex-liu"
    }
  },
  skills: [
    { category: "AI Engineering", icon: <Brain size={24} />, items: ["Prompt Engineering (MJ/GPT)", "Coze Agent (ReAct)", "RAG Architecture", "Gemini/Heygen API"] },
    { category: "Product & Design", icon: <Layers size={24} />, items: ["Figma & Axure", "HCI Research", "User Growth", "3D Modeling", "MediaPipe CV"] },
    { category: "Data & Growth", icon: <Terminal size={24} />, items: ["A/B Testing", "CRO Optimization", "私域流量运营", "小红书热点分析"] }
  ],
  featuredProjects: [
    {
      id: "fp1",
      title: "多模态垂类 Agent：“暴躁厨师”",
      role: "Indie Developer",
      period: "2026.01",
      icon: <Bot size={24} />,
      description: "基于 LLM 的垂直领域智能体，探索人设构建与多模态交互闭环。",
      tags: ["LLM", "Coze", "ReAct"],
      link: "https://www.coze.cn/store/agent/7598032972289638400?bot_id=true",
      achievements: [
        "Prompt 架构设计：采用 ReAct 框架编写结构化提示词，打造“毒舌但专业”的厨师人设，兼具娱乐性与实用性。",
        "闭环体验构建：在 Coze 平台集成食物数据库 API，实现从“拍照识别食材”到“生成吐槽式食谱”的端到端体验。",
        "模型调优：对比 Claude/GPT 在复杂约束下的指令遵循能力，通过 A/B 测试迭代 Prompt 逻辑。"
      ]
    },
    {
      id: "fp2",
      title: "沉浸式手势交互系统",
      role: "HCI Experiment",
      period: "2026.01",
      icon: <Smartphone size={24} />,
      description: "基于 MediaPipe 的前端交互探索，拓展 Web 端非接触式交互边界。",
      tags: ["MediaPipe", "Computer Vision", "Canvas"],
      link: "https://gemini.google.com/share/279c638cf776",
      achievements: [
        "技术落地：利用 Computer Vision (CV) 技术实现实时手势识别，并将其参数化映射至 Canvas 粒子系统。"
      ]
    }
  ],
  experience: [
    {
      id: 1,
      role: "负责人 (Project Lead)",
      company: "英语内容 AI 自动化生产流水线",
      period: "2025.12 - 至今",
      description: "基于大模型的提效工具链搭建，实现内容生产的工业化转型。点击查看工具演示。",
      link: "https://ehamwr3j69uju5kidmgcwb.streamlit.app/",
      achievements: [
        "流程搭建：基于 Gemini 与飞书文档，搭建“文本-语音-视频”自动化生成链路，单条视频制作时间由 30h 缩短至分钟级。"
      ]
    },
    {
      id: 2,
      role: "美术策划 | 交互定义",
      company: "科大讯飞输入法“噗叽的冬日”皮肤",
      period: "2025.02 - 至今",
      description: "负责冬及冬季主题皮肤交互方案设计。",
      achievements: [
        "方案定义：设计按键动态反馈效果，通过灰度测试平衡视觉美感与输入误触率。",
        "结果：方案已通过验收并成功上市，下载量 2000+。"
      ]
    },
    {
      id: 3,
      role: "增长运营 (Growth Hacker)",
      company: "流量增长与社群实战",
      period: "2023.09 - 2024.09",
      description: "基于数据驱动的流量获取与私域用户运营实验。",
      achievements: [
        "流量引流：经营小红书账号，通过热点词云分析与封面 A/B 测试优化点击率，实现周均稳定浏览量 1.7w。",
        "社群转化：从 0 到 1 建立并管理 600 人深度核心社群，探索高粘性用户留存策略（无变现模式）。"
      ]
    },
    {
      id: 4,
      role: "联合创始人",
      company: "垂类电商实践 (Lolita 鞋店)",
      period: "2023.09 - 2024.09",
      description: "负责电商品牌的从 0 到 1 搭建与日常经营。",
      achievements: [
        "店铺经营：与好友共同经营 Lolita 鞋店，负责淘宝店铺的基础搭建、选品策略及协同运营社交媒体账号，完成商业闭环初探。"
      ]
    }
  ],
  education: [
    {
      school: "西南交通大学",
      degree: "产品与交互设计 (本科)",
      period: "2023 - 2027",
      courses: ["交互逻辑定义", "产品开发基础", "HCI 实验", "用户增长策略"],
      honor: "四川农科村改造方案核心成员 (团队效率提升 20%)",
      details: "具备从“流量获取”到“商业变现”的完整感知，擅长捕捉垂类用户痛点并转化为产品需求。"
    }
  ]
};

// --- 2. Gemini API Helper ---
const callGemini = async (prompt) => {
  const apiKey = ""; // Injected by environment
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
  
  const payload = {
    contents: [{ parts: [{ text: prompt }] }]
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't process that.";
  } catch (err) {
    console.error("Gemini API Error:", err);
    return "系统繁忙，请稍后再试。";
  }
};

// --- 3. Utility Components ---

const NeuralBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    const particleCount = window.innerWidth < 768 ? 40 : 80;
    const connectionDistance = 180;
    const mouseDistance = 250;

    let mouse = { x: null, y: null };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    resize();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        if (mouse.x != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouseDistance) {
            const force = (mouseDistance - distance) / mouseDistance;
            const directionX = (dx / distance) * force * 1.5;
            const directionY = (dy / distance) * force * 1.5;
            this.x -= directionX;
            this.y -= directionY;
          }
        }
      }

      draw() {
        ctx.fillStyle = 'rgba(45, 212, 191, 0.7)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.strokeStyle = `rgba(45, 212, 191, ${0.25 * (1 - distance / connectionDistance)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', () => {});
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-slate-950" />;
};

const SpotlightCard = ({ children, className = "", noPadding = false, onClick, interactive = false }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`
        relative rounded-2xl overflow-hidden transition-all duration-300 group
        bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl
        hover:bg-white/10 hover:border-white/20 hover:shadow-teal-900/20
        ${interactive ? 'cursor-pointer hover:scale-[1.01]' : ''}
        ${className}
      `}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-10 rounded-2xl"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(45, 212, 191, 0.1), transparent 40%)`,
        }}
      />
      <div 
         className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 z-10 rounded-2xl"
         style={{
            opacity,
            boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.1)', 
         }}
      />
      <div className={`relative z-20 h-full ${noPadding ? '' : 'p-8'}`}>{children}</div>
    </div>
  );
};

const ScrollReveal = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

// AI Chat Widget
const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: '✨ 你好！我是刘冰妍的 AI 助手（基于 Gemini）。\n关于她的项目、技能或经历，你可以问我任何问题！' }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = { type: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    const systemContext = `
      You are an AI assistant for Liu Bingyan's portfolio website. 
      Here is her resume data in JSON format: ${JSON.stringify(resumeData)}.
      
      Your goal is to answer visitor's questions about Liu Bingyan based strictly on this data.
      If the user asks about something not in the resume, politely say you don't have that information.
      Keep answers concise, professional, and friendly. 
      Answer in Chinese unless the user asks in English.
      
      User Question: ${input}
    `;

    try {
      const replyText = await callGemini(systemContext);
      setMessages(prev => [...prev, { type: 'bot', text: replyText }]);
    } catch (error) {
      setMessages(prev => [...prev, { type: 'bot', text: "抱歉，AI 服务暂时不可用，请稍后再试。" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-slate-900/90 border border-teal-500/30 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-5">
          <div className="bg-slate-800/80 p-4 flex justify-between items-center border-b border-teal-500/20">
            <span className="text-sm font-bold text-teal-100 flex items-center gap-2">
              <Sparkles size={16} className="text-teal-400" /> AI Assistant (Gemini Powered)
            </span>
            <button onClick={() => setIsOpen(false)}><X size={16} className="text-slate-400 hover:text-white"/></button>
          </div>
          
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-xs md:text-sm leading-relaxed whitespace-pre-wrap ${
                  m.type === 'user' 
                    ? 'bg-teal-600 text-white rounded-tr-none' 
                    : 'bg-white/10 text-slate-200 border border-white/5 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none flex items-center gap-2">
                  <Loader2 size={14} className="animate-spin text-teal-400"/>
                  <span className="text-xs text-slate-400">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-3 border-t border-teal-500/20 bg-slate-800/50 flex gap-2">
            <input 
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              className="flex-1 text-xs bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 focus:outline-none focus:border-teal-500 text-white placeholder-slate-500 transition-all"
              placeholder="Ask about my experience..."
              disabled={isLoading}
            />
            <button 
              onClick={handleSend} 
              disabled={isLoading || !input.trim()}
              className="p-2 bg-teal-600 text-white rounded-lg hover:bg-teal-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={14}/>
            </button>
          </div>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 bg-teal-600 hover:bg-teal-500 text-white rounded-full shadow-[0_0_20px_rgba(20,184,166,0.4)] flex items-center justify-center hover:scale-105 transition-transform duration-300 border border-teal-400/30 group"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} className="group-hover:animate-pulse" />}
      </button>
    </div>
  );
};

// AI Analysis Button
const AIAnalyzeButton = () => {
  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState(null);
  
  const handleClick = async () => {
    if (status === 'complete') {
      // Toggle result visibility if already analyzed
      setResult(prev => prev ? null : prev);
      return;
    }
    
    if (status !== 'idle') return;
    
    setStatus('analyzing');
    
    const prompt = `
      Analyze the following resume profile and generate 3 short, punchy "Superpower" bullet points (max 5 words each) and a 1-sentence summary of the candidate's unique value proposition.
      Resume Data: ${JSON.stringify(resumeData.profile)} and ${JSON.stringify(resumeData.skills)}.
      Output format:
      {"superpowers": ["Point 1", "Point 2", "Point 3"], "summary": "One sentence summary"}
      Return ONLY valid JSON.
    `;

    try {
      const responseText = await callGemini(prompt);
      // Basic cleaning to ensure JSON parsing works
      const jsonStr = responseText.replace(/```json|```/g, '').trim();
      const data = JSON.parse(jsonStr);
      setResult(data);
      setStatus('complete');
    } catch (e) {
      console.error("Analysis failed", e);
      setStatus('idle'); // Reset on failure
    }
  };

  return (
    <div className="relative">
      <button 
        onClick={handleClick}
        disabled={status === 'analyzing'}
        className={`
          relative px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-3 backdrop-blur-md overflow-hidden group z-20
          ${status === 'idle' ? 'bg-white/5 text-white hover:bg-white/10 border border-white/20' : ''}
          ${status === 'analyzing' ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30 cursor-wait' : ''}
          ${status === 'complete' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : ''}
        `}
      >
        {status === 'idle' && <Zap size={16} className="group-hover:text-yellow-300 transition-colors" />}
        {status === 'analyzing' && <Loader2 size={16} className="animate-spin" />}
        {status === 'complete' && <Sparkles size={16} />}
        
        <span className="relative z-10">
          {status === 'idle' ? "AI Analyze Resume" : 
           status === 'analyzing' ? "Gemini is thinking..." : 
           "Analysis Ready"}
        </span>
      </button>

      {/* Analysis Result Popup */}
      {status === 'complete' && result && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-slate-900/90 border border-emerald-500/30 backdrop-blur-xl rounded-xl p-4 shadow-2xl animate-in fade-in zoom-in-95 duration-300 z-30 text-left">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10">
            <Bot size={16} className="text-emerald-400" />
            <span className="text-xs font-bold text-emerald-100">GEMINI INSIGHTS</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            {result.superpowers?.map((tag, i) => (
              <span key={i} className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-[10px] text-emerald-300 font-mono">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-xs text-slate-300 leading-relaxed italic">
            "{result.summary}"
          </p>
        </div>
      )}
    </div>
  );
};

// --- Project Detail Component ---
const ProjectDemo = ({ onBack }) => {
  // This component is kept for potential future use or if other items need internal detail view
  return null; 
};

// --- 3. Main Application ---

const App = () => {
  // Logic for internal routing kept for extensibility, though current links are external
  const [currentView, setCurrentView] = useState('home'); 

  return (
    <div className="min-h-screen font-sans text-slate-200 selection:bg-teal-500/30 selection:text-teal-200 relative">
      
      <NeuralBackground />
      <AIChatWidget />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] w-full flex flex-col justify-center items-center pb-20 z-10 pointer-events-none">
        
        {/* Navigation */}
        <nav className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-20 pointer-events-auto">
          <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-500/20 to-blue-500/20 border border-teal-500/30 rounded-lg flex items-center justify-center text-teal-400 backdrop-blur-sm">
              <Brain size={18} />
            </div>
            <span>LIU<span className="text-teal-400">.AI</span></span>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl pt-10 pointer-events-auto">
           <ScrollReveal>
            {/* Avatar Section */}
            <div className="mb-8 relative inline-block group cursor-pointer">
              <div className="w-32 h-32 rounded-full border-2 border-teal-500/30 overflow-hidden shadow-[0_0_30px_rgba(20,184,166,0.2)] mx-auto relative z-10 group-hover:scale-105 transition-transform duration-500">
                <img 
                  src={resumeData.profile.avatar} 
                  alt="Profile" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -inset-3 rounded-full border border-teal-500/20 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-3 rounded-full border border-dashed border-teal-500/10 animate-[spin_10s_linear_infinite_reverse]"></div>
            </div>

            {/* Adjusted Font Style: Font-Sans + Bold (Microsoft Sans-Serif style requested) */}
            <h1 className="text-6xl md:text-8xl font-sans font-bold tracking-tight mb-8 leading-[1.1]" style={{ fontFamily: '"Microsoft YaHei", sans-serif' }}>
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-200 via-white to-teal-200">
                 {resumeData.profile.name}
               </span>
               <span className="flex justify-center items-center gap-2 text-sm md:text-lg mt-4 font-normal text-slate-400 tracking-normal font-sans">
                 <Rabbit size={18} className="text-teal-400 animate-bounce" />
                 {resumeData.profile.title}
               </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              {resumeData.profile.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a href={`mailto:${resumeData.profile.email}`} className="bg-white text-slate-950 px-8 py-3 rounded-full text-sm font-bold transition-all hover:scale-105 hover:bg-teal-50 shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center gap-2">
                 <Mail size={18}/> Contact Me
              </a>
              <AIAnalyzeButton />
            </div>
           </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
           <ArrowDown size={24} strokeWidth={1.5} />
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <main className="container mx-auto px-6 py-20 max-w-5xl relative z-10">
        
        {/* EDUCATION SECTION */}
        <section className="mb-40">
          <ScrollReveal delay={100}>
            <div className="flex items-center justify-between mb-12 px-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Education</h2>
              <span className="hidden md:block w-32 h-px bg-slate-800"></span>
            </div>

            <SpotlightCard noPadding>
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -right-20 -top-20 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]"></div>
                <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
              </div>

              <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row gap-10 md:gap-16">
                
                {/* LEFT COLUMN: Identity (School info) */}
                <div className="md:w-1/3 flex flex-col">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-teal-300 mb-8 border border-white/10 shadow-inner backdrop-blur-sm">
                    <GraduationCap size={32} />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                    {resumeData.education[0].school}
                  </h3>
                  
                  <div className="text-lg text-teal-400 font-medium mb-6">
                    {resumeData.education[0].degree}
                  </div>

                  <div className="mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-xs font-mono text-white w-fit shadow-sm">
                    <Calendar size={14} />
                    {resumeData.education[0].period}
                  </div>
                </div>

                {/* RIGHT COLUMN: Content Grid */}
                <div className="md:w-2/3 flex flex-col gap-6">
                  
                  {/* Block 1: Core Cognition */}
                  <div className="bg-black/20 rounded-xl p-6 border border-white/10 relative overflow-hidden shadow-inner">
                    <div className="absolute top-0 left-0 w-1 h-full bg-teal-500"></div>
                    <div className="flex items-center gap-2 text-teal-300 text-xs font-bold uppercase tracking-widest mb-3">
                       <Zap size={14} /> Core Cognition
                    </div>
                    <p className="text-white text-sm leading-relaxed italic opacity-95">
                       “{resumeData.education[0].details}”
                    </p>
                  </div>

                  {/* Block 2 & 3: Split Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Honor */}
                    <div className="bg-black/20 rounded-xl p-5 border border-white/10 hover:bg-black/30 transition-colors shadow-inner">
                       <div className="flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-3">
                          <Award size={14} /> Top Honor
                       </div>
                       <p className="text-slate-200 text-xs leading-relaxed font-medium">
                          {resumeData.education[0].honor}
                       </p>
                    </div>

                    {/* Courses */}
                    <div className="flex flex-col justify-center">
                       <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">
                          <BookOpen size={14} /> Core Courses
                       </div>
                       <div className="flex flex-wrap gap-2">
                          {resumeData.education[0].courses.map((course, idx) => (
                            <span key={idx} className="px-3 py-1.5 rounded-md bg-teal-500/10 border border-teal-500/20 text-teal-100 text-xs hover:border-teal-500/40 hover:text-white transition-colors cursor-default">
                              {course}
                            </span>
                          ))}
                       </div>
                    </div>

                  </div>
                </div>

              </div>
            </SpotlightCard>
          </ScrollReveal>
        </section>

        {/* SKILLS SECTION */}
        <section className="mb-40">
          <ScrollReveal delay={200}>
            <div className="flex items-center justify-between mb-12 px-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Capabilities</h2>
              <span className="hidden md:block w-32 h-px bg-slate-800"></span>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {resumeData.skills.map((skill, idx) => (
                <SpotlightCard key={idx} className="flex flex-col h-full hover:-translate-y-1 transition-transform">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-teal-400 mb-6 group-hover:bg-teal-500/20 group-hover:text-teal-300 border border-white/5 transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="font-bold text-slate-100 text-xl mb-4">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {skill.items.map((item, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs font-semibold text-slate-400 border border-white/5 hover:border-teal-500/30 hover:text-teal-200 transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* FEATURED PROJECTS SECTION (NEW) */}
        <section className="mb-40">
          <ScrollReveal delay={200}>
            <div className="flex items-center justify-between mb-12 px-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Featured Projects</h2>
              <span className="hidden md:block w-32 h-px bg-slate-800"></span>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {resumeData.featuredProjects.map((project) => (
                <SpotlightCard 
                  key={project.id} 
                  className={`group hover:-translate-y-2 ${project.link ? 'cursor-pointer' : ''}`}
                  onClick={project.link ? () => window.open(project.link, '_blank') : undefined}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-400 border border-teal-500/20 group-hover:bg-teal-500/20 transition-colors">
                      {project.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-slate-400 border border-white/10">
                      {project.period}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-sm font-medium text-slate-400 mb-4">{project.role}</div>
                  
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-slate-800 rounded border border-slate-700 text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3 pt-6 border-t border-white/5">
                    {project.achievements.map((achievement, i) => (
                      <div key={i} className="flex gap-3 text-sm text-slate-400">
                        <Rocket size={14} className="mt-1 text-teal-500 shrink-0" />
                        <span dangerouslySetInnerHTML={{
                           __html: achievement.replace(/：/, '：<span class="text-slate-200">').replace(/。$/, '</span>。')
                        }}/>
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="mb-24">
          <ScrollReveal delay={300}>
            <div className="flex items-center justify-between mb-16 px-2">
               <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Experience</h2>
               <span className="hidden md:block w-32 h-px bg-slate-800"></span>
            </div>

            <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12 pb-4">
               {resumeData.experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 md:pl-12 group">
                     {/* Timeline Node */}
                     <div className="absolute -left-[5px] top-8 w-2.5 h-2.5 rounded-full bg-slate-900 border-2 border-slate-600 group-hover:border-teal-500 group-hover:bg-teal-500 transition-colors shadow-[0_0_0_4px_rgba(15,23,42,1)] z-10"></div>
                     
                     <SpotlightCard 
                       // Updated: Supports link property
                       interactive={!!exp.hasDetail || !!exp.link} 
                       onClick={() => {
                         if (exp.link) window.open(exp.link, '_blank');
                         else if (exp.hasDetail) setCurrentView('project-detail');
                       }}
                       className={`transition-transform duration-300 group-hover:-translate-y-1 hover:border-teal-500/30 ${(exp.hasDetail || exp.link) ? 'hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]' : ''}`}
                     >
                        <div className="flex flex-col md:flex-row gap-6 mb-6">
                           {/* Icon Box */}
                           <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 border border-white/10 group-hover:bg-teal-500/10 group-hover:text-teal-400 group-hover:border-teal-500/20 transition-colors shrink-0 ${(exp.hasDetail || exp.link) ? 'animate-pulse' : ''}`}>
                              {/* Dynamic Icons based on Index/Role */}
                              {idx === 0 ? <Briefcase size={20} /> : 
                               idx === 1 ? <Layers size={20} /> : 
                               idx === 2 ? <TrendingUp size={20} /> : <Store size={20} />}
                           </div>
                           
                           <div className="flex-1">
                              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                                 <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                                   {exp.role}
                                   {(exp.hasDetail || exp.link) && (
                                     <span className="px-2 py-0.5 rounded text-[10px] bg-teal-500/20 text-teal-300 border border-teal-500/30">
                                       {exp.link ? "Live App" : "View Demo"}
                                     </span>
                                   )}
                                 </h3>
                                 <span className="px-3 py-1 bg-white/5 text-slate-400 text-xs font-bold rounded-full font-mono whitespace-nowrap w-fit group-hover:text-teal-400 transition-colors border border-white/5">
                                    {exp.period}
                                 </span>
                              </div>
                              <div className="text-base text-slate-400 font-medium mb-4">{exp.company}</div>
                              <p className="text-slate-300 text-sm leading-relaxed mb-6 border-l-2 border-white/10 pl-4 italic">
                                {exp.description}
                              </p>
                           </div>
                        </div>
                        
                        {/* Achievements Container */}
                        <div className="space-y-3 bg-black/20 p-5 rounded-xl border border-white/5">
                           {exp.achievements.map((ach, i) => (
                              <div key={i} className="flex gap-3 text-sm text-slate-300 leading-relaxed items-start">
                                 <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500/60 shrink-0"></div>
                                 <span 
                                   className="flex-1"
                                   dangerouslySetInnerHTML={{
                                    // Highlight numbers and key metrics with badge style
                                    __html: ach.replace(/(\d+(?:h|w|\+|%|00)?)/g, '<span class="font-bold text-teal-400 bg-teal-500/10 border border-teal-500/20 px-1.5 py-0.5 rounded text-xs mx-1 align-baseline inline-block">$1</span>')
                                 }} />
                              </div>
                           ))}
                        </div>
                     </SpotlightCard>
                  </div>
               ))}
            </div>
          </ScrollReveal>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-800/50 py-16 relative z-10">
         <div className="container mx-auto px-6 text-center">
             <div className="flex justify-center gap-8 mb-8">
                <a href="#" className="p-3 bg-white/5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all border border-white/5">
                  <Github size={20}/>
                </a>
                <a href={`mailto:${resumeData.profile.email}`} className="p-3 bg-white/5 rounded-full text-slate-400 hover:text-teal-400 hover:bg-teal-500/10 transition-all border border-white/5">
                  <Mail size={20}/>
                </a>
                <a href="#" className="p-3 bg-white/5 rounded-full text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all border border-white/5">
                  <MapPin size={20}/>
                </a>
             </div>
             <p className="text-slate-500 text-sm font-medium">
                © {new Date().getFullYear()} {resumeData.profile.name}. 
                <span className="block mt-2 text-slate-600 font-normal">Designed with React & Neural Intelligence.</span>
             </p>
         </div>
      </footer>
    </div>
  );
};

export default App;