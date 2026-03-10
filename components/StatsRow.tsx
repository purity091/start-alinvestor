import React from 'react';
import { Clock, Zap, ShieldCheck } from 'lucide-react';

const StatsRow: React.FC = () => {
  return (
    <div className="container mx-auto px-4 relative z-30 -mt-10 md:-mt-14 mb-16">
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white/50 p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        
        <div className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 group border border-transparent hover:border-blue-50">
          <div className="bg-blue-50 text-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
            <Zap size={26} strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">ذكاء اصطناعي دقيق</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              محرك ذكي يحلل بيانات السوق والمنافسين ويعطيك زبدة الكلام دون حشو.
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-purple-900/5 transition-all duration-300 group border border-transparent hover:border-purple-50">
          <div className="bg-purple-50 text-purple-600 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
            <ShieldCheck size={26} strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">خصوصية وأمان تام</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              أفكارك هي ملكية فكرية لك. بياناتك مشفرة ولا يتم مشاركتها أو بيعها.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-orange-900/5 transition-all duration-300 group border border-transparent hover:border-orange-50">
          <div className="bg-orange-50 text-orange-600 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
            <Clock size={26} strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">سرعة إنجاز خيالية</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              اختصر أشهر من البحث والتخطيط. احصل على دراستك الأولية في دقائق.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StatsRow;