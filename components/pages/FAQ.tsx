import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, ArrowLeft, MessageSquare } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      category: 'عام',
      icon: '🌟',
      questions: [
        {
          q: 'ما هو معالج الأعمال؟',
          a: 'معالج الأعمال هو منصة عربية مدعومة بالذكاء الاصطناعي تساعد رواد الأعمال على إنشاء خطط عمل ودراسات جدوى احترافية بسهولة وسرعة. نوفر لك أدوات متقدمة لتحليل السوق والتخطيط المالي.'
        },
        {
          q: 'هل المنصة متاحة باللغة العربية فقط؟',
          a: 'حالياً، المنصة متاحة باللغة العربية بشكل أساسي، لكن نخطط لإضافة دعم للغات الأخرى في المستقبل القريب.'
        },
        {
          q: 'هل يمكنني استخدام المنصة من أي دولة؟',
          a: 'نعم، المنصة متاحة عبر الإنترنت من أي مكان في العالم. كل ما تحتاجه هو اتصال بالإنترنت ومتصفح حديث.'
        }
      ]
    },
    {
      category: 'الحساب والاشتراك',
      icon: '👤',
      questions: [
        {
          q: 'كيف أنشئ حساباً؟',
          a: 'يمكنك إنشاء حساب مجاني خلال 30 ثانية فقط. اضغط على "ابدأ مجانًا" وأدخل بريدك الإلكتروني وكلمة مرور، وستكون جاهزاً للبدء.'
        },
        {
          q: 'هل هناك فترة تجريبية مجانية؟',
          a: 'نعم! نقدم فترة تجريبية مجانية لمدة 7 أيام مع جميع المميزات. لا نطلب بطاقة ائتمان للتجربة.'
        },
        {
          q: 'كيف يمكنني إلغاء اشتراكي؟',
          a: 'يمكنك إلغاء اشتراكك في أي وقت من إعدادات الحساب. سيستمر وصولك حتى نهاية فترة الفوترة الحالية، ولن يتم تجديده تلقائياً.'
        },
        {
          q: 'هل يمكنني استرداد أموالي؟',
          a: 'نقدم ضمان استرجاع الأموال خلال 14 يوماً من الاشتراك. إذا لم تكن راضياً، تواصل معنا وسنقوم برد المبلغ كاملاً.'
        }
      ]
    },
    {
      category: 'الخطط والأسعار',
      icon: '💰',
      questions: [
        {
          q: 'ما الفرق بين الخطة المجانية والمدفوعة؟',
          a: 'الخطة المجانية تتيح لك إنشاء خطة عمل واحدة مع مميزات أساسية. الخطط المدفوعة تمنحك خطط غير محدودة، قوالب متقدمة، تصدير بصيغ متعددة، ودعم ذكاء اصطناعي كامل.'
        },
        {
          q: 'هل الأسعار تشمل الضرائب؟',
          a: 'الأسعار المعروضة لا تشمل ضريبة القيمة المضافة التي تُضاف عند الدفع وفقاً لقوانين بلدك.'
        },
        {
          q: 'هل يمكنني الترقية أو التخفيض في أي وقت؟',
          a: 'نعم، يمكنك الترقية أو التخفيض من خطة إلى أخرى في أي وقت. سيتم احتساب الفرق بشكل تناسبي لبقية فترة الاشتراك.'
        }
      ]
    },
    {
      category: 'الميزات والاستخدام',
      icon: '⚡',
      questions: [
        {
          q: 'كيف يعمل الذكاء الاصطناعي في إنشاء الخطط؟',
          a: 'يستخدم الذكاء الاصطناعي لدينا خوارزميات متقدمة لتحليل مدخلاتك وإنشاء محتوى احترافي لخطط العمل. يسألك أسئلة مخصصة ويصوغ إجاباتك في نموذج متكامل يشمل التحليل المالي والسوقي.'
        },
        {
          q: 'ما هي صيغ التصدير المتاحة؟',
          a: 'يمكنك تصدير خططك بصيغة PDF احترافية قابلة للطباعة، وملف Word قابل للتعديل، وعرض تقديمي PowerPoint للاجتماعات.'
        },
        {
          q: 'هل يمكنني مشاركة خطتي مع آخرين؟',
          a: 'نعم، يمكنك مشاركة خططك عبر رابط آمن مع مستشاريك أو شركائك أو مستثمريك. يمكنك التحكم في صلاحيات العرض والتعديل.'
        },
        {
          q: 'هل بياناتي وخططي آمنة؟',
          a: 'بالتأكيد! نستخدم تشفير SSL لجميع الاتصالات، وتشفير AES-256 للبيانات المخزنة. خططك خاصة ولا يطلع عليها أحد غيرك.'
        }
      ]
    },
    {
      category: 'الدعم الفني',
      icon: '🛠️',
      questions: [
        {
          q: 'كيف أتواصل مع الدعم الفني؟',
          a: 'يمكنك التواصل معنا عبر البريد الإلكتروني support@businessplan.com، أو الدردشة المباشرة المتاحة على الموقع، أو الهاتف خلال ساعات العمل.'
        },
        {
          q: 'ما هو وقت الاستجابة المتوقع؟',
          a: 'نرد على البريد الإلكتروني خلال 24 ساعة عمل. الدردشة المباشرة متاحة فورياً خلال ساعات العمل (الأحد-الخميس، 9ص-6م).'
        },
        {
          q: 'هل هناك دروس أو موارد تعليمية؟',
          a: 'نعم! نوفر مركز مساعدة شامل، دروس فيديو، مدونة عن ريادة الأعمال، وقوالب جاهزة للاستخدام.'
        }
      ]
    }
  ];

  const allQuestions = faqCategories.flatMap(cat => cat.questions.map(q => ({ ...q, category: cat.category })));
  
  const filteredQuestions = searchQuery
    ? allQuestions.filter(q => 
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

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
            <HelpCircle size={16} />
            <span className="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">مركز المساعدة</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-8">
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                الأسئلة الشائعة
              </span>
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 font-light">
            ابحث عن إجابات سريعة لأسئلتك. إذا لم تجد ما تبحث عنه، تواصل معنا مباشرة
          </p>

          {/* Search Bar */}
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن سؤال..."
                className="w-full pr-12 pl-4 py-4 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-lg bg-white shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {searchQuery && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                نتائج البحث ({filteredQuestions.length})
              </h2>
              {filteredQuestions.length > 0 ? (
                <div className="space-y-4">
                  {filteredQuestions.map((faq, idx) => (
                    <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
                      <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                      <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                      <span className="inline-block mt-3 text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {faq.category}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                    <Search size={32} />
                  </div>
                  <p className="text-slate-600 mb-4">لم نجد نتائج لبحثك</p>
                  <a href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2">
                    تواصل معنا للحصول على مساعدة
                    <ArrowLeft size={16} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Categories */}
      {!searchQuery && (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[100px] mix-blend-multiply"></div>
            <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[40%] bg-purple-100/40 rounded-full blur-[100px] mix-blend-multiply"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto space-y-16">
              {faqCategories.map((category, catIdx) => (
                <div key={catIdx}>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-4xl">{category.icon}</span>
                    <h2 className="text-3xl font-extrabold text-slate-900">{category.category}</h2>
                  </div>
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIdx) => {
                      const globalIdx = `${catIdx}-${faqIdx}`;
                      const isOpen = openIndex === globalIdx;
                      
                      return (
                        <div
                          key={faqIdx}
                          className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
                        >
                          <button
                            onClick={() => setOpenIndex(isOpen ? null : globalIdx)}
                            className="w-full flex items-center justify-between p-6 text-right"
                          >
                            <h3 className="font-bold text-slate-900 text-lg pr-4">{faq.q}</h3>
                            <ChevronDown
                              size={20}
                              className={`text-slate-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                            />
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              isOpen ? 'max-h-96 pb-6' : 'max-h-0'
                            }`}
                          >
                            <div className="px-6 pt-0">
                              <p className="text-slate-600 leading-relaxed border-t border-gray-100 pt-4">
                                {faq.a}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl shadow-blue-900/40 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageSquare size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">لم تجد إجابة لسؤالك؟</h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
                  فريق الدعم جاهز لمساعدتك. تواصل معنا وسنرد عليك في أقرب وقت
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="/contact" className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2">
                    تواصل معنا
                    <ArrowLeft size={18} />
                  </a>
                  <a href="mailto:support@businessplan.com" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2">
                    أرسل بريد إلكتروني
                  </a>
                </div>
              </div>
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

export default FAQ;
