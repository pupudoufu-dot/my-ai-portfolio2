import React from 'react';
import { Rabbit, Sparkles, Send } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center">
      <div className="text-center">
        <Rabbit className="text-pink-400 animate-bounce mx-auto mb-4" size={64} />
        <h1 className="text-4xl font-bold mb-4">你好，我是 AI 产品经理</h1>
        <p className="text-slate-400 mb-8">正在构建我的个人作品集...</p>
        <button className="bg-blue-600 px-6 py-2 rounded-full flex items-center gap-2 mx-auto">
          联系我 <Send size={18} />
        </button>
      </div>
    </div>
  );
}

export default App;