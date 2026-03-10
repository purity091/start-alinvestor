import React from 'react';
import { AlertTriangle, TrendingDown, Users, Wallet, Target, SearchX } from 'lucide-react';

const WhySection: React.FC = () => {
  const problems = [
    {
      icon: SearchX,
      title: "غياب حاجة السوق",
      desc: "42% من المشاريع تفشل لأنها تبني منتجاً لا يحتاجه أحد فعلياً. نساعدك في التحقق من الفجوة قبل البدء.",
      color: "text-rose-500",
      bg: "bg-rose-50",
      border: "hover:border-rose-200"
    },
    {
      icon: Wallet,
      title: "نفاذ السيولة النقدية",
      desc: "سوء تقدير التكاليف يغرق 29% من الشركات. نظامنا المالي يحسب لك التوقعات بدقة متناهية.",
      color: "text-amber-500",
      bg: "bg-amber-50",
      border: "hover:border-amber-200"
    },
    {
      icon: Users,
      title: "تجاهل المنافسين",
      desc: "دخول سوق مشبع دون ميزة تنافسية هو انتحار تجاري. نساعدك في صياغة قيمتك المقترحة.",
      color: "text-violet-500",
      bg: "bg-violet-50",
      border: "hover:border-violet-200"
    },
    {
      icon: TrendingDown,
      title: "نموذج عمل غير واضح",
      desc: "عدم معرفة مسار الأرباح يجعل المشروع مجرد هواية مكلفة. نساعدك في هيكلة مصادر الدخل.",
      color: "text-cyan-500",
      bg: "bg-cyan-50",
      border: "hover:border-cyan-200"
    }
  ];

  return (
    <section className="py-20 bg-white" id="why">
      <div className="container mx-auto px-4">
        
        {/* Main Hero Card - The Shocking Stat */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-slate-900/20 group mb-20 ring-1 ring-white/10">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 group-hover:opacity-50 transition-opacity duration-1000 mix-blend-screen"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 group-hover:opacity-40 transition-opacity duration-1000 mix-blend-screen"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 text-amber-300 px-4 py-1.5 rounded-full text-sm font-medium mb-8 hover:bg-white/20 transition-colors cursor-default">
              <AlertTriangle size={16} className="fill-amber-300/20" />
              <span>حقيقة سوقية مؤلمة</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
              لماذا تغرق السفن <br className="hidden md:block"/> قبل أن تبحر؟
            </h2>
            
            <div className="max-w-4xl mx-auto mb-10 bg-white/5 rounded-3xl p-6 md:p-10 border border-white/5 backdrop-blur-sm">
              <p className="text-2xl md:text-4xl font-light leading-relaxed">
                "أكثر من <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-orange-400 font-bold text-5xl md:text-7xl inline-block my-2 md:my-0 drop-shadow-sm">70%</span> من المشاريع تفشل بسبب <br className="hidden md:block" /> <span className="font-bold underline decoration-red-500/50 decoration-4 underline-offset-8">ضعف التخطيط</span> وليس ضعف الفكرة"
              </p>
            </div>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              الحماس وحده لا يكفي لبناء إمبراطورية. لغة الأرقام والتحليل هي الفاصل بين النجاح والفشل.
            </p>
          </div>
        </div>

        {/* Detailed Problems Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-6 border-b border-gray-100 pb-6">
            <div className="max-w-xl">
               <h3 className="text-3xl font-bold text-slate-900 mb-3">عقبات تواجه كل رائد أعمال</h3>
               <p className="text-slate-500 text-lg">تجنب هذه الأخطاء القاتلة باستخدام أدوات التخطيط الذكية التي نضعها بين يديك.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, idx) => (
              <div key={idx} className={`bg-white border border-gray-100 rounded-3xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group ${problem.border}`}>
                <div className={`w-14 h-14 rounded-2xl ${problem.bg} ${problem.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <problem.icon size={26} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{problem.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {problem.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Solution Connection */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-1 border border-blue-100/50">
             <div className="bg-white/50 rounded-[22px] p-6 flex flex-col md:flex-row items-center justify-center gap-5 text-center md:text-right backdrop-blur-sm">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg shadow-blue-600/30 flex items-center justify-center flex-shrink-0 animate-bounce-slow">
                    <Target size={24} />
                </div>
                <p className="text-slate-700 font-medium text-lg max-w-2xl">
                   منصتنا صُممت لتكون <span className="text-blue-700 font-bold bg-blue-100/50 px-2 py-0.5 rounded-lg">حزام الأمان لك</span>. نحن نساعدك على اختبار الفكرة "على الورق" وتصحيح المسار قبل أن تغامر بمدخراتك في السوق.
                </p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhySection;