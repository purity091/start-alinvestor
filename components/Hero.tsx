import React from 'react';
import { ArrowLeft, CheckCircle2, Sparkles, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-36 pb-20 lg:pt-52 lg:pb-32 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-white -z-20"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-blue-100/40 rounded-full blur-[120px] opacity-60 animate-pulse-slow"></div>
        <div className="absolute top-[10%] -right-[10%] w-[60%] h-[60%] bg-indigo-100/40 rounded-full blur-[120px] opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 text-center max-w-5xl relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-100 shadow-sm text-blue-700 px-5 py-2 rounded-full text-sm font-bold mb-8 animate-fade-in-up hover:scale-105 transition-transform cursor-default">
          <Sparkles size={16} className="text-amber-500 fill-amber-500" />
          <span className="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">الجيل الجديد من دراسات الجدوى</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-8">
          مشروعك الناجح يبدأ <br className="hidden md:block" />
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              بخطة ذكية ومدروسة
            </span>
            <svg className="absolute w-[110%] h-4 -bottom-1 -right-[5%] text-blue-200 -z-10 opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed px-4 font-light">
          لا تخاطر بمالك ووقتك في المجهول. استخدم <span className="font-semibold text-slate-800">قوة الذكاء الاصطناعي</span> لتحويل فكرتك إلى دراسة جدوى متكاملة، تكشف لك الأرقام والمخاطر في دقائق معدودة.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full sm:w-auto px-4">
          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold px-10 py-4 rounded-2xl shadow-xl shadow-blue-600/25 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 active:scale-95 group ring-4 ring-blue-600/10">
            ابدأ دراسة مشروعك مجانًا
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300 text-lg font-bold px-10 py-4 rounded-2xl shadow-sm transition-all active:scale-95 flex items-center justify-center gap-2">
            <PlayCircle size={20} className="text-slate-400" />
            كيف يعمل الموقع؟
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 text-slate-500 text-sm font-medium border-t border-slate-100 pt-10 max-w-3xl mx-auto">
          <div className="flex items-center gap-2.5 px-3 py-1 bg-white rounded-full shadow-sm border border-slate-100">
            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600"><CheckCircle2 size={12} /></div>
            <span>تحليل فوري للسوق</span>
          </div>
          <div className="flex items-center gap-2.5 px-3 py-1 bg-white rounded-full shadow-sm border border-slate-100">
            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600"><CheckCircle2 size={12} /></div>
            <span>لا يتطلب خبرة مالية</span>
          </div>
          <div className="flex items-center gap-2.5 px-3 py-1 bg-white rounded-full shadow-sm border border-slate-100">
            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600"><CheckCircle2 size={12} /></div>
            <span>تجربة مجانية بالكامل</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;