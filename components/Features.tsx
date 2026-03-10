import React from 'react';
import { BrainCircuit, FileSpreadsheet, BarChart3, Lock, Download, LayoutTemplate, ArrowLeft } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  colorClass: string;
  delay: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, colorClass, delay }) => {
  // Map color names to specific tailwind classes for background and text
  const getColors = (color: string) => {
    const colors: { [key: string]: { bg: string, text: string, border: string, hover: string } } = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'hover:border-blue-200', hover: 'group-hover:bg-blue-600' },
      indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'hover:border-indigo-200', hover: 'group-hover:bg-indigo-600' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'hover:border-purple-200', hover: 'group-hover:bg-purple-600' },
      teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'hover:border-teal-200', hover: 'group-hover:bg-teal-600' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'hover:border-orange-200', hover: 'group-hover:bg-orange-600' },
      rose: { bg: 'bg-rose-50', text: 'text-rose-600', border: 'hover:border-rose-200', hover: 'group-hover:bg-rose-600' },
    };
    return colors[color] || colors.blue;
  };

  const theme = getColors(colorClass);

  return (
    <div className={`bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group flex flex-col h-full ${theme.border} ${delay}`}>
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${theme.bg} ${theme.text} ${theme.hover} group-hover:text-white group-hover:scale-110 shadow-sm`}>
        <Icon size={28} strokeWidth={1.5} />
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      
      <p className="text-slate-500 leading-relaxed text-base flex-grow mb-6">
        {description}
      </p>
      
      <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 opacity-80 group-hover:opacity-100 transition-opacity self-start mt-auto">
        <span>اكتشف المزيد</span>
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
      </a>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      title: "معالج ذكي خطوة بخطوة",
      description: "لا تحتاج لخبرة سابقة. النظام يسألك الأسئلة الصحيحة بالترتيب، ويصيغ إجاباتك في نموذج عمل احترافي ومتكامل.",
      icon: BrainCircuit,
      color: "blue",
      delay: "animate-fade-in-up"
    },
    {
      title: "قوالب متخصصة",
      description: "سواء كان مشروعك متجراً إلكترونياً، تطبيقاً، أو كافيهاً، لدينا القالب المناسب الذي يغطي تفاصيل قطاعك بدقة.",
      icon: LayoutTemplate,
      color: "indigo",
      delay: "animate-fade-in-up animation-delay-100"
    },
    {
      title: "لوحة تحكم للإنجاز",
      description: "راقب نسبة اكتمال دراستك. النظام ينبهك للنقاط المفقودة والركائز التي تحتاج إلى مزيد من البحث والتدقيق.",
      icon: BarChart3,
      color: "purple",
      delay: "animate-fade-in-up animation-delay-200"
    },
    {
      title: "خصوصية وأمان تام",
      description: "دراستك مشفرة ولا يتم مشاركتها مع أي طرف. يمكنك العمل عليها وحفظها والعودة إليها في أي وقت بأمان.",
      icon: Lock,
      color: "teal",
      delay: "animate-fade-in-up animation-delay-300"
    },
    {
      title: "تصدير جاهز للطباعة",
      description: "حمّل دراستك بصيغة PDF احترافية أو ملف Word قابل للتعديل لتقديمها للمستثمرين أو الشركاء والجهات الداعمة.",
      icon: Download,
      color: "orange",
      delay: "animate-fade-in-up animation-delay-400"
    },
    {
      title: "تحليل SWOT آلي",
      description: "الذكاء الاصطناعي يستنتج نقاط القوة والضعف والفرص والتهديدات بناءً على مدخلاتك وتحليل السوق.",
      icon: FileSpreadsheet,
      color: "rose",
      delay: "animate-fade-in-up animation-delay-500"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="features">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[100px] mix-blend-multiply"></div>
          <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[40%] bg-purple-100/40 rounded-full blur-[100px] mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-blue-600 font-bold text-sm tracking-wider uppercase mb-3 block animate-fade-in-up">أدوات احترافية</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight animate-fade-in-up">
            كل ما تحتاجه <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">لإطلاق مشروعك بنجاح</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed animate-fade-in-up">
            جمعنا لك أفضل أدوات التخطيط الاستراتيجي مع قوة الذكاء الاصطناعي في منصة واحدة سهلة الاستخدام، لتبدأ رحلتك بثقة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              colorClass={feature.color}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
      
      <style>{`
        .animation-delay-100 { animation-delay: 100ms; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Features;