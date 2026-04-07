import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck, Bell, ArrowLeft, ChevronRight } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      icon: Eye,
      title: '1. المعلومات التي نجمعها',
      content: [
        'نقوم بجمع المعلومات التالية عند تسجيلك في المنصة:',
        '• المعلومات الشخصية: الاسم، البريد الإلكتروني، ورقم الهاتف',
        '• معلومات الحساب: كلمة المرور (مشفرة)، وتاريخ الإنشاء',
        '• بيانات الاستخدام: الصفحات التي تزورها، والميزات التي تستخدمها',
        '• معلومات الجهاز: نوع المتصفح، نظام التشغيل، وعنوان IP',
        '• محتوى خطط الأعمال: البيانات التي تدخلها عند إنشاء دراسات الجدوى'
      ]
    },
    {
      icon: Database,
      title: '2. كيف نستخدم معلوماتك',
      content: [
        'نستخدم المعلومات المجمعة للأغراض التالية:',
        '• تقديم وتحسين خدماتنا ومنصاتنا',
        '• معالجة طلباتك وإنشاء خطط الأعمال المطلوبة',
        '• التواصل معك بخصوص تحديثات الخدمة أو الدعم الفني',
        '• تحليل أنماط الاستخدام لتحسين تجربة المستخدم',
        '• حماية المنصة من الأنشطة الاحتيالية أو غير المصرح بها',
        '• إرسال رسائل تسويقية (بعد الحصول على موافقتك)'
      ]
    },
    {
      icon: Lock,
      title: '3. حماية البيانات',
      content: [
        'نتخذ إجراءات أمنية صارمة لحماية معلوماتك:',
        '• تشفير SSL/TLS لجميع الاتصالات بين متصفحك وخوادمنا',
        '• تشفير كلمات المرور باستخدام خوارزميات تجزئة متقدمة',
        '• جدران حماية وأنظمة كشف التسلل على مدار الساعة',
        '• وصول محدود للموظفين المصرح لهم فقط على أساس الحاجة',
        '• نسخ احتياطية مشفرة ومخزنة في مواقع آمنة متعددة',
        '• مراجعات أمنية دورية واختبارات اختراق مستقلة'
      ]
    },
    {
      icon: Shield,
      title: '4. مشاركة المعلومات مع أطراف ثالثة',
      content: [
        'لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة إلا في الحالات التالية:',
        '• مزودو الخدمات: شركات استضافة الدفع ومعالجة المدفوعات التي تساعدنا في تشغيل المنصة',
        '• الامتثال القانوني: عندما يقتضي القانون أو استجابة لطلبات حكومية مشروعة',
        '• حماية الحقوق: لحماية حقوقنا أو خصوصيتنا أو سلامة مستخدمينا',
        '• بموافقتك الصريحة: عندما تعطينا إذناً واضحاً بالمشاركة',
        'جميع الأطراف الثالثة ملتزمة بمعايير صارمة لحماية البيانات'
      ]
    },
    {
      icon: UserCheck,
      title: '5. حقوقك في بياناتك',
      content: [
        'يحق لك القيام بما يلي فيما يتعلق ببياناتك الشخصية:',
        '• الوصول: طلب نسخة من البيانات الشخصية التي نحتفظ بها عنك',
        '• التصحيح: طلب تصحيح أي معلومات غير دقيقة أو غير مكتملة',
        '• الحذف: طلب حذف بياناتك الشخصية (مع مراعاة الالتزامات القانونية)',
        '• الاعتراض: الاعتراض على معالجة بياناتك لأغراض تسويقية',
        '• النقل: طلب نقل بياناتك إلى طرف آخر بصيغة قابلة للقراءة',
        '• سحب الموافقة: سحب موافقتك على معالجة بياناتك في أي وقت',
        'لممارسة أي من هذه الحقوق، يرجى التواصل معنا عبر البريد الإلكتروني: privacy@businessplan.com'
      ]
    },
    {
      icon: Bell,
      title: '6. ملفات تعريف الارتباط (Cookies)',
      content: [
        'نستخدم ملفات تعريف الارتباط والتقنيات المشابهة لتحسين تجربتك:',
        '• ملفات ضرورية: أساسية لعمل المنصة ولا يمكن تعطيلها',
        '• ملفات تحليلية: تساعدنا في فهم كيفية تفاعلك مع المنصة',
        '• ملفات تفضيلات: تتذكر إعداداتك وتفضيلاتك الشخصية',
        '• ملفات تسويقية: تستخدم لتقديم محتوى إعلاني ذي صلة',
        'يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات متصفحك. تعطيل بعض الملفات قد يؤثر على وظائف المنصة.'
      ]
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
            <Shield size={16} />
            <span className="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">خصوصيتك تهمنا</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-8">
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                سياسة الخصوصية
              </span>
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 font-light">
            نلتزم بحماية خصوصيتك وبياناتك الشخصية. توضح هذه السياسة كيف نجمع ونستخدم ونحمي معلوماتك
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
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-100">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6 text-center">ملخص سريع</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: '✓', text: 'نجمع فقط المعلومات الضرورية لتقديم خدماتنا' },
                  { icon: '✓', text: 'بياناتك مشفرة ومحمية بأحدث التقنيات' },
                  { icon: '✓', text: 'لا نبيع معلوماتك لأي طرف ثالث' },
                  { icon: '✓', text: 'لديك الحق في الوصول والحذف والتصحيح' },
                  { icon: '✓', text: 'نحترم خصوصية خطط الأعمال الخاصة بك' },
                  { icon: '✓', text: 'يمكنك سحب موافقتك في أي وقت' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <span className="text-slate-700 font-medium">{item.text}</span>
                  </div>
                ))}
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
                    <div className="space-y-3">
                      {section.content.map((item, itemIdx) => (
                        <p key={itemIdx} className="text-slate-600 leading-relaxed">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Additional Info */}
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-6">7. الاحتفاظ بالبيانات</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    نحتفظ ببياناتك الشخصية طالما كان حسابك نشطاً أو حسب الحاجة لتقديم خدماتنا. بعد حذف حسابك، سنحتفظ ببعض المعلومات فقط للالتزام بالتزاماتنا القانونية وتسوية النزاعات وحماية المنصة.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    خطط الأعمال المحذوفة يتم إزالتها نهائياً من خوادمنا خلال 30 يوماً من الحذف، ما لم يكن هناك التزام قانوني يقتضي الاحتفاظ بها.
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-6">8. خصوصية الأطفال</h2>
                  <p className="text-slate-600 leading-relaxed">
                    خدماتنا موجهة للأفراد الذين تبلغ أعمارهم 18 عاماً أو أكثر. لا نجمع عن علم معلومات شخصية من أطفال دون سن 18 عاماً. إذا اكتشفنا أننا جمعنا عن غير قصد معلومات من طفل دون السن القانونية، سنتخذ خطوات فورية لحذف هذه البيانات.
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-6">9. التغييرات على سياسة الخصوصية</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر لتعكس التغييرات في ممارساتنا أو لأسباب تشغيلية أو قانونية أو تنظيمية أخرى. سنخطرك بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار بارز على المنصة.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    نشجعك على مراجعة هذه السياسة دوررياً للبقاء على اطلاع بكيفية حماية معلوماتك.
                  </p>
                </div>

                {/* Contact Section */}
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-10 text-white text-center">
                  <h2 className="text-2xl font-extrabold mb-4">لديك أسئلة حول خصوصيتك؟</h2>
                  <p className="text-blue-100 mb-8 leading-relaxed">
                    فريقنا جاهز للإجابة على أي استفسارات تتعلق بخصوصيتك وحماية بياناتك
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="mailto:privacy@businessplan.com" className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-3 rounded-xl transition-all inline-flex items-center gap-2">
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

export default PrivacyPolicy;
