import React from 'react';
import { ArrowLeft, Star, Check } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="bg-[#0f172a] rounded-[3rem] p-8 md:p-24 text-center text-white shadow-2xl shadow-blue-900/40 relative overflow-hidden group border border-white/10">
          
          {/* Advanced Background Texture */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-[#0f172a] to-[#0f172a] z-0"></div>
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-30 group-hover:opacity-40 transition-opacity duration-1000"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full blur-[120px] opacity-20 group-hover:opacity-30 transition-opacity duration-1000"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in-up">
                <div className="flex text-amber-400 gap-0.5">
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                </div>
                <span className="text-blue-200 text-sm font-medium">أكثر من 10,000 مستخدم</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
              جاهز لتحويل فكرتك <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">إلى واقع ملموس؟</span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              انضم لآلاف الرواد الذين بدأوا مشاريعهم بخطوات واثقة. التجربة مجانية بالكامل، بدون قيود خفية.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold px-12 py-5 rounded-2xl shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 transition-all transform hover:-translate-y-1 active:scale-95 inline-flex items-center justify-center gap-3">
                أنشئ حساب مجاني الآن
                <ArrowLeft size={20} />
                </button>
                <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 text-lg font-bold px-12 py-5 rounded-2xl backdrop-blur-sm transition-all inline-flex items-center justify-center">
                  شاهد العرض التوضيحي
                </button>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mt-12 text-sm text-slate-400 font-medium">
              <span className="flex items-center gap-2"><Check size={16} className="text-blue-400"/> تسجيل في 30 ثانية</span>
              <span className="flex items-center gap-2"><Check size={16} className="text-blue-400"/> لا يتطلب بطاقة ائتمان</span>
              <span className="flex items-center gap-2"><Check size={16} className="text-blue-400"/> ضمان استرجاع الأموال</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;