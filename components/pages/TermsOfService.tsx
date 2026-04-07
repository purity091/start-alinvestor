import React from 'react';
import { FileText, AlertCircle, CheckCircle, XCircle, UserPlus, DollarSign, Scale, ArrowLeft, ChevronRight } from 'lucide-react';

const TermsOfService: React.FC = () => {
  const sections = [
    {
      icon: FileText,
      title: '1. قبول الشروط',
      content: `مرحباً بك في معالج الأعمال. باستخدامك لمنصتنا، فإنك توافق على هذه الشروط والأحكام بالكامل. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام المنصة.

نحتفظ بالحق في تحديث هذه الشروط في أي وقت. سنقوم بإخطارك بالتغييرات الجوهرية عبر البريد الإلكتروني أو إشعار على المنصة. استمرارك في استخدام المنصة بعد التعديلات يعني قبولك بالشروط الجديدة.`
    },
    {
      icon: UserPlus,
      title: '2. إنشاء الحساب',
      content: `للاستفادة من جميع ميزات المنصة، يجب عليك إنشاء حساب. عند إنشاء حسابك، تتعهد بما يلي:

• تقديم معلومات دقيقة وكاملة وحديثة
• الحفاظ على سرية كلمة المرور الخاصة بك ومسؤوليتك عن جميع الأنشطة التي تتم تحت حسابك
• إخطارنا فوراً بأي استخدام غير مصرح به أو خرق للأمان
• عدم استخدام أسماء مضللة أو انتحال شخصية أخرى

نحتفظ بالحق في تعليق أو إنهاء حسابات تنتهك هذه الشروط أو تسيء استخدام المنصة.`
    },
    {
      icon: CheckCircle,
      title: '3. الاستخدام المسموح',
      content: `يُسمح لك باستخدام المنصة للأغراض التالية:

• إنشاء خطط عمل ودراسات جدوى لاستخدامك الشخصي أو التجاري
• تصدير وتحميل الخطط بصيغ مختلفة (PDF, Word)
• مشاركة الخطط مع أعضاء فريقك أو مستشارك
• استخدام القوالب والأدوات المتاحة لتحليل السوق والتخطيط الاستراتيجي
• الاستفادة من ميزات الذكاء الاصطناعي لتحسين جودة خططك

يجب أن يكون استخدامك متوافقاً مع جميع القوانين واللوائح المعمول بها في بلدك.`
    },
    {
      icon: XCircle,
      title: '4. الاستخدام المحظور',
      content: `يُحظر عليك القيام بأي من الأفعال التالية:

• استخدام المنصة لإنشاء محتوى غير قانوني أو مضلل أو احتيالي
• محاولة الوصول غير المصرح به إلى أنظمة أو بيانات المنصة
• إعادة بيع أو إعادة توزيع أو ترخيص المنصة أو أي جزء منها
• استخدام المنصة لإرسال بريد عشوائي أو محتوى ضار
• نسخ أو تعديل أو إنشاء أعمال مشتقة من المنصة دون إذن كتابي
• استخدام أي وسيلة آلية للوصول إلى المنصة بشكل يتجاوز الاستخدام الطبيعي
• إزالة أو تعديل أي إشعارات حقوق نشر أو علامات تجارية من المنصة

أي انتهاك لهذه القيود قد يؤدي إلى إنهاء حسابك فوراً.`
    },
    {
      icon: DollarSign,
      title: '5. الأسعار والدفع',
      content: `تقدم المنصة خططاً مجانية ومدفوعة. تنطبق الشروط التالية:

• الأسعار معروضة بوضوح في صفحة الأسعار وقد تتغير مع إشعار مسبق
• الاشتراكات المدفوعة يتم تجديدها تلقائياً ما لم تلغِ قبل تاريخ التجديد
• يمكنك إلغاء اشتراكك في أي وقت، وسيستمر الوصول حتى نهاية فترة الفوترة الحالية
• لا نقدم استرداداً جزئياً عن الفترة غير المستخدمة من الاشتراك
• قد نقدم فترات تجريبية مجانية وفقاً لتقديرنا
• الأسعار لا تشمل الضرائب المطبقة التي يتحملها المستخدم

للاستفسارات المالية، تواصل مع فريق الدعم على billing@businessplan.com`
    },
    {
      icon: Scale,
      title: '6. الملكية الفكرية',
      content: `تتوزع حقوق الملكية الفكرية كالتالي:

• المنصة وجميع محتوياتها (بما في ذلك النصوص والرسومات والشعارات والبرمجيات) مملوكة لنا ومرخصة لك للاستخدام الشخصي فقط
• خطط الأعمال ودراسات الجدوى التي تنشئها باستخدام المنصة هي ملكك أنت
• قوالبنا وأدواتنا محمية بحقوق النشر ولا يجوز إعادة توزيعها بشكل مستقل
• العلامات التجارية والشعارات الخاصة بنا لا يجوز استخدامها دون إذن كتابي مسبق
• أي تعليقات أو اقتراحات تقدمها لنا حول المنصة يجوز لنا استخدامها بحرية

نحترم حقوق الملكية الفكرية للآخرين ونتوقع من مستخدمينا فعل الشيء نفسه.`
    },
    {
      icon: AlertCircle,
      title: '7. إخلاء المسؤولية والحد من المسؤولية',
      content: `تقدم المنصة "كما هي" و"كما هو متاح". بينما نسعى لتقديم خدمة عالية الجودة:

• لا نضمن أن المنصة ستكون خالية من الأخطاء أو متاحة دون انقطاع
• الخطط والدراسات التي تنشئها هي أدوات مساعدة في اتخاذ القرار ولا تشكل نصيحة مالية أو قانونية أو استثمارية
• يجب عليك استشارة متخصصين مؤهلين قبل اتخاذ قرارات تجارية مهمة
• لا نتحمل مسؤولية خسائر أو أضرار ناتجة عن استخدامك أو عدم قدرتك على استخدام المنصة
• لا نتحقق من دقة المعلومات التي تدخلها، وأنت المسؤول الوحيد عن صحة البيانات المقدمة
• الحد الأقصى لمسؤوليتنا عن أي ضرر هو المبلغ الذي دفعته مقابل استخدام المنصة خلال الـ 12 شهراً السابقة للحدث

لا شيء في هذه الشروط يحد من مسؤوليتنا عن الوفاة أو الإصابة الشخصية الناتجة عن إهمالنا.`
    }
  ];

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
            <FileText size={16} />
            <span className="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">الشروط والأحكام</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-8">
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                شروط الاستخدام
              </span>
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 font-light">
            يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام منصتنا. استخدامك للخدمة يعني موافقتك على هذه الشروط
          </p>

          <div className="mt-8 text-sm text-slate-500">
            آخر تحديث: <span className="font-semibold">7 أبريل 2026</span>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-indigo-100">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6 text-center">نظرة سريعة</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: '✓', text: 'المنصة متاحة للاستخدام الشخصي والتجاري', type: 'good' },
                  { icon: '✓', text: 'خطط الأعمال التي تنشئها هي ملكك بالكامل', type: 'good' },
                  { icon: '✗', text: 'لا يجوز إعادة بيع أو توزيع المنصة', type: 'bad' },
                  { icon: '✗', text: 'الخطط ليست بديلاً عن الاستشارة المهنية', type: 'bad' },
                  { icon: '✓', text: 'يمكنك إلغاء اشتراكك في أي وقت', type: 'good' },
                  { icon: 'ℹ', text: 'الأسعار قد تتغير مع إشعار مسبق', type: 'info' }
                ].map((item, idx) => {
                  const colors = {
                    good: 'bg-green-600',
                    bad: 'bg-red-500',
                    info: 'bg-blue-500'
                  };
                  return (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`w-6 h-6 ${colors[item.type as keyof typeof colors]} rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5`}>
                        {item.icon}
                      </div>
                      <span className="text-slate-700 font-medium">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[100px] mix-blend-multiply"></div>
          <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[40%] bg-purple-100/40 rounded-full blur-[100px] mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Sidebar Navigation */}
              <div className="lg:col-span-1">
                <div className="sticky top-28 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-slate-900 mb-4">فهرس المحتوى</h3>
                  <nav className="space-y-2">
                    {sections.map((section, idx) => (
                      <a 
                        key={idx}
                        href={`#section-${idx}`}
                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 py-2 px-3 rounded-lg transition-all"
                      >
                        <ChevronRight size={14} />
                        <span>{section.title}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3 space-y-12">
                {sections.map((section, idx) => (
                  <div key={idx} id={`section-${idx}`} className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 scroll-mt-28">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-blue-50 text-blue-600">
                        <section.icon size={28} strokeWidth={1.5} />
                      </div>
                      <h2 className="text-2xl font-extrabold text-slate-900">{section.title}</h2>
                    </div>
                    <div className="whitespace-pre-line text-slate-600 leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                ))}

                {/* Additional Sections */}
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-6">8. إنهاء الخدمة</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    يجوز لنا تعليق أو إنهاء وصولك إلى المنصة في الحالات التالية:
                  </p>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold mt-1">•</span>
                      <span>انتهاك هذه الشروط والأحكام بشكل جوهري</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold mt-1">•</span>
                      <span>طلبك إنهاء حسابك</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold mt-1">•</span>
                      <span>عدم النشاط لمدة 12 شهراً متتالياً</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold mt-1">•</span>
                      <span>أسباب أمنية أو قانونية</span>
                    </li>
                  </ul>
                  <p className="text-slate-600 leading-relaxed mt-4">
                    عند الإنهاء، يتوقف حقك في استخدام المنصة فوراً، ولكن تظل الأحكام المتعلقة بالملكية الفكرية وإخلاء المسؤولية سارية.
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-6">9. القانون الواجب التطبيق</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    تخضع هذه الشروط وتُفسر وفقاً للقوانين المعمول بها. أي نزاع ينشأ عن هذه الشروط سيتم حله من خلال المحاكم المختصة.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    نسعى دائماً لحل أي خلافات بشكل ودي أولاً. إذا لم نتمكن من ذلك، سيتم اللجوء إلى التحكيم أو القضاء وفقاً لما يقتضيه القانون.
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-6">10. أحكام عامة</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    <strong className="text-slate-800">القوة القاهرة:</strong> لا نتحمل مسؤولية التأخير أو الفشل في الأداء الناتج عن أسباب خارجة عن إرادتنا المعقولة (كوارث طبيعية، حروب، أوبئة، إلخ).
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    <strong className="text-slate-800">التنازل:</strong> عدم إنفاذنا لأي حكم من هذه الشروط لا يعني تنازلنا عن حقنا في إنفاذه لاحقاً.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    <strong className="text-slate-800">القابلية للفصل:</strong> إذا تم اعتبار أي حكم من هذه الشروط غير قابل للتنفيذ، فسيتم فصله بينما تظل الأحكام الأخرى سارية.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    <strong className="text-slate-800">الاتفاق الكامل:</strong> تمثل هذه الشروط والأحكام الاتفاق الكامل بينك وبيننا فيما يتعلق باستخدام المنصة، وتحل محل أي اتفاقات سابقة.
                  </p>
                </div>

                {/* Contact Section */}
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-10 text-white text-center">
                  <h2 className="text-2xl font-extrabold mb-4">أسئلة حول الشروط؟</h2>
                  <p className="text-blue-100 mb-8 leading-relaxed">
                    إذا كان لديك أي استفسارات حول هذه الشروط والأحكام، لا تتردد في التواصل معنا
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="mailto:legal@businessplan.com" className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-3 rounded-xl transition-all inline-flex items-center gap-2">
                      تواصل معنا
                      <ArrowLeft size={18} />
                    </a>
                  </div>
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
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default TermsOfService;
