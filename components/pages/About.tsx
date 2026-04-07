import React from 'react';
import { FileText, Target, Users, Award, TrendingUp, Heart, ArrowLeft, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800">
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-white -z-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-blue-100/40 rounded-full blur-[120px] opacity-60"></div>
          <div className="absolute top-[10%] -right-[10%] w-[60%] h-[60%] bg-indigo-100/40 rounded-full blur-[120px] opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-100 shadow-sm text-blue-700 px-5 py-2 rounded-full text-sm font-bold mb-8 animate-fade-in-up">
            <span className="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">تعرف علينا</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-8">
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                من نحن
              </span>
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 font-light">
            نحن فريق شغوف بتمكين رواد الأعمال العرب من تحويل أفكارهم إلى مشاريع ناجحة ومستدامة
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                  <Target size={16} />
                  <span>مهمتنا</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                  نجعل التخطيط الاستراتيجي <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">في متناول الجميع</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  نؤمن بأن كل فكرة تستحق فرصة النجاح. مهمتنا هي تبسيط عملية التخطيط للأعمال من خلال دمج الذكاء الاصطناعي مع أفضل الممارسات العالمية في ريادة الأعمال.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  نسعى لتمكين كل رائد أعمال عربي من اتخاذ قرارات مستنيرة، وتقليل المخاطر، وزيادة فرص نجاح مشروعاتهم من خلال دراسات جدوى احترافية وشاملة.
                </p>
                <div className="space-y-4">
                  {['تبسيط التخطيط المالي والإداري', 'تمكين رواد الأعمال بالمعرفة', 'دعم الاقتصاد العربي الرقمي'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                        <CheckCircle2 size={14} />
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full blur-[60px]"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-200/30 rounded-full blur-[60px]"></div>
                  <div className="relative z-10 grid grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                      <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                        <Users size={28} />
                      </div>
                      <div className="text-3xl font-extrabold text-slate-900 mb-2">+10K</div>
                      <div className="text-sm text-slate-500">مستخدم نشط</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                      <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-indigo-600">
                        <FileText size={28} />
                      </div>
                      <div className="text-3xl font-extrabold text-slate-900 mb-2">+25K</div>
                      <div className="text-sm text-slate-500">خطة عمل</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                      <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-purple-600">
                        <Award size={28} />
                      </div>
                      <div className="text-3xl font-extrabold text-slate-900 mb-2">95%</div>
                      <div className="text-sm text-slate-500">نسبة الرضا</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                      <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-teal-600">
                        <TrendingUp size={28} />
                      </div>
                      <div className="text-3xl font-extrabold text-slate-900 mb-2">+500%</div>
                      <div className="text-sm text-slate-500">نمو سنوي</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[100px] mix-blend-multiply"></div>
          <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[40%] bg-purple-100/40 rounded-full blur-[100px] mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-600 font-bold text-sm tracking-wider uppercase mb-3 block animate-fade-in-up">قيمنا</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight animate-fade-in-up">
              المبادئ التي <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">تقود عملنا</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed animate-fade-in-up">
              نلتزم بمجموعة من القيم الأساسية التي توجه كل قراراتنا وخدماتنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Heart,
                title: 'الشغف بالتمكين',
                description: 'نؤمن بأن كل شخص لديه القدرة على النجاح، ونسعى لتوفير الأدوات التي تجعل هذا النجاح ممكناً.',
                color: 'rose'
              },
              {
                icon: Award,
                title: 'الجودة والاحترافية',
                description: 'نقدم أعلى معايير الجودة في كل دراسة جدوى وخطة عمل، لضمان حصولك على نتائج موثوقة وقابلة للتطبيق.',
                color: 'blue'
              },
              {
                icon: Users,
                title: 'التركيز على المستخدم',
                description: 'كل ميزة نطورها وكل تحسين ندخله يبدأ من احتياجاتك أنت كمستخدم. رأيك وتجربتك هما الأولوية.',
                color: 'indigo'
              },
              {
                icon: Target,
                title: 'الشفافية والمصداقية',
                description: 'نلتزم بالصدق والوضوح في كل تعاملاتنا، من الأسعار إلى قدرات المنصة، لأن الثقة أساس نجاحنا المشترك.',
                color: 'purple'
              },
              {
                icon: TrendingUp,
                title: 'الابتكار المستمر',
                description: 'نبحث دائماً عن أحدث التقنيات والمنهجيات لتحسين تجربتك وتقديم نتائج أكثر دقة وفعالية.',
                color: 'teal'
              },
              {
                icon: FileText,
                title: 'الخصوصية والأمان',
                description: 'بياناتك وأفكارك في أمان تام. نستخدم أحدث تقنيات التشفير لحماية معلوماتك ودراساتك.',
                color: 'orange'
              }
            ].map((value, index) => {
              const colors: { [key: string]: { bg: string, text: string, border: string, hover: string } } = {
                blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'hover:border-blue-200', hover: 'group-hover:bg-blue-600' },
                indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'hover:border-indigo-200', hover: 'group-hover:bg-indigo-600' },
                purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'hover:border-purple-200', hover: 'group-hover:bg-purple-600' },
                teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'hover:border-teal-200', hover: 'group-hover:bg-teal-600' },
                orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'hover:border-orange-200', hover: 'group-hover:bg-orange-600' },
                rose: { bg: 'bg-rose-50', text: 'text-rose-600', border: 'hover:border-rose-200', hover: 'group-hover:bg-rose-600' },
              };
              const theme = colors[value.color];
              
              return (
                <div key={index} className={`bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group ${theme.border} animate-fade-in-up`}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${theme.bg} ${theme.text} ${theme.hover} group-hover:text-white group-hover:scale-110 shadow-sm`}>
                    <value.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-base">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
              قصتنا <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">مع ريادة الأعمال</span>
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                بدأت رحلتنا عندما لاحظنا الفجوة الكبيرة بين الأفكار الرائعة والقدرة على تنفيذها بشكل مدروس. الكثير من رواد الأعمال العرب لديهم أفكار مبتكرة، لكنهم يفتقرون للأدوات والخبرة لإنشاء خطط عمل احترافية تجذب المستثمرين وتقلل المخاطر.
              </p>
              <p>
                قررنا بناء حل يجمع بين قوة الذكاء الاصطناعي وأفضل الممارسات العالمية في التخطيط الاستراتيجي، مع تصميمه خصيصاً للسوق العربي. هدفنا كان واضحاً: جعل إنشاء دراسة الجدوى احترافية أمراً سهلاً ومتاحاً للجميع.
              </p>
              <p>
                اليوم، نفخر بأننا ساعدنا آلاف رواد الأعمال في تحويل أفكارهم إلى خطط عمل ملموسة، ونستمر في التطور والتحسين لنقدم لك دائماً أفضل تجربة ممكنة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-[#0f172a] rounded-[3rem] p-8 md:p-24 text-center text-white shadow-2xl shadow-blue-900/40 relative overflow-hidden group border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-[#0f172a] to-[#0f172a] z-0"></div>
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-30 group-hover:opacity-40 transition-opacity duration-1000"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full blur-[120px] opacity-20 group-hover:opacity-30 transition-opacity duration-1000"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
                انضم <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">لرحلة نجاحنا</span>
              </h2>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                ابدأ الآن بإنشاء خطة عمل احترافية لمشروعك، واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك
              </p>
              <button className="bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold px-12 py-5 rounded-2xl shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 transition-all transform hover:-translate-y-1 active:scale-95 inline-flex items-center justify-center gap-3">
                ابدأ مجانًا الآن
                <ArrowLeft size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default About;
