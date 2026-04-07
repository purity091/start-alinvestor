import React from 'react';
import { Shield, Lock, Eye, Server, Key, FileCheck, AlertTriangle, ArrowLeft, CheckCircle2 } from 'lucide-react';

const Security: React.FC = () => {
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
            <span className="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">حماية متقدمة</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-8">
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                أمن المعلومات
              </span>
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 font-light">
            نأخذ أمن بياناتك على محمل الجد. نستخدم أحدث التقنيات والحماية لضمان خصوصيتك وأمان معلوماتك
          </p>
        </div>
      </section>

      {/* Security Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Lock,
                  title: 'تشفير شامل',
                  description: 'جميع البيانات مشفرة أثناء النقل والتخزين باستخدام معايير عسكرية',
                  stat: 'AES-256',
                  color: 'blue'
                },
                {
                  icon: Shield,
                  title: 'حماية على مدار الساعة',
                  description: 'مراقبة مستمرة وأنظمة كشف تسلل متطورة لحماية المنصة',
                  stat: '24/7',
                  color: 'indigo'
                },
                {
                  icon: FileCheck,
                  title: 'متوافق مع المعايير',
                  description: 'نلتزم بأعلى معايير الأمان العالمية في حماية البيانات',
                  stat: 'ISO 27001',
                  color: 'purple'
                }
              ].map((card, idx) => {
                const colors: { [key: string]: { bg: string, text: string, gradient: string } } = {
                  blue: { bg: 'bg-blue-50', text: 'text-blue-600', gradient: 'from-blue-50 to-white' },
                  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', gradient: 'from-indigo-50 to-white' },
                  purple: { bg: 'bg-purple-50', text: 'text-purple-600', gradient: 'from-purple-50 to-white' },
                };
                const theme = colors[card.color];
                
                return (
                  <div key={idx} className={`bg-gradient-to-br ${theme.gradient} rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center`}>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${theme.bg} ${theme.text} shadow-sm`}>
                      <card.icon size={32} strokeWidth={1.5} />
                    </div>
                    <div className="text-3xl font-extrabold text-slate-900 mb-2">{card.stat}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{card.description}</p>
                  </div>
                );
              })}
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
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Encryption */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-blue-50 text-blue-600">
                  <Lock size={28} strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900">التشفير</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  نستخدم تقنيات تشفير متقدمة لحماية بياناتك في كل مرحلة:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
                    <h3 className="font-bold text-slate-900 mb-3">أثناء النقل</h3>
                    <p className="text-sm">
                      <strong className="text-slate-800">TLS 1.3</strong> - أحدث بروتوكول أمان يحمي جميع الاتصالات بين متصفحك وخوادمنا. يمنع التنصت والتلاعب بالبيانات.
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
                    <h3 className="font-bold text-slate-900 mb-3">أثناء التخزين</h3>
                    <p className="text-sm">
                      <strong className="text-slate-800">AES-256</strong> - معيار تشفير عسكري المستوى يحمي جميع البيانات المخزنة. حتى في حال الوصول غير المصرح به، تبقى البيانات غير قابلة للقراءة.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Infrastructure */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-indigo-50 text-indigo-600">
                  <Server size={28} strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900">البنية التحتية الآمنة</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  نستضيف منصتنا على بنية تحتية سحابية من الدرجة العالمية مع طبقات حماية متعددة:
                </p>
                <ul className="space-y-3 mt-4">
                  {[
                    'جدران حماية متقدمة (WAF) لصد الهجمات الإلكترونية',
                    'أنظمة كشف ومنع التسلل (IDS/IPS) على مدار الساعة',
                    'حماية من هجمات DDoS لضمان استمرارية الخدمة',
                    'نسخ احتياطية تلقائية يومية في مواقع جغرافية متعددة',
                    'مراقبة أمنية مستمرة وتنبيهات فورية للأنشطة المشبوهة',
                    'اختبارات اختراق دوررية من شركات أمنية مستقلة'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5">
                        <CheckCircle2 size={12} />
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Access Control */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-purple-50 text-purple-600">
                  <Key size={28} strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900">التحكم في الوصول</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  نتبع مبدأ "الحد الأدنى من الامتيازات" في الوصول للبيانات:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
                    <h3 className="font-bold text-slate-900 mb-3">المصادقة الثنائية</h3>
                    <p className="text-sm">
                      نوفر دعم المصادقة الثنائية (2FA) لجميع الحسابات، مما يضيف طبقة حماية إضافية تمنع الوصول غير المصرح به حتى في حال تسريب كلمة المرور.
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100">
                    <h3 className="font-bold text-slate-900 mb-3">صلاحيات الموظفين</h3>
                    <p className="text-sm">
                      لا يطلع على بياناتك إلا الموظفون المصرح لهم فقط على أساس الحاجة المطلقة. جميع الموظفين يخضعون لفحوصات أمنية وتدريبات خصوصية منتظمة.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-teal-50 text-teal-600">
                  <Eye size={28} strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900">الخصوصية</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  خصوصيتك أولويتنا. خطط الأعمال التي تنشئها هي ملكك بالكامل:
                </p>
                <ul className="space-y-3 mt-4">
                  {[
                    'لا نشارك بياناتك مع أي طرف ثالث دون موافقتك الصريحة',
                    'لا نبيع أو نؤجر معلوماتك الشخصية لأي جهة',
                    'لا نستخدم محتوى خططك الخاصة لأي غرض آخر غير تقديم الخدمة',
                    'يمكنك حذف بياناتك نهائياً في أي وقت',
                    'نلتزم بأنظمة حماية البيانات العالمية (GDPR)',
                    'نوفر شفافية كاملة حول كيفية استخدام بياناتك'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5">
                        <CheckCircle2 size={12} />
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Incident Response */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-orange-50 text-orange-600">
                  <AlertTriangle size={28} strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900">الاستجابة للحوادث</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  لدينا خطة استجابة للحوادث الأمنية جاهزة ومختبرة:
                </p>
                <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100 mt-4">
                  <p className="text-sm leading-relaxed">
                    في حال اكتشاف أي خرق أمني، سنتخذ الإجراءات التالية فوراً: عزل الأنظمة المتأثرة، تحليل نطاق الخرق، إخطار المستخدمين المتأثرين خلال 72 ساعة، التعاون مع السلطات المختصة، وتقديم تقرير شامل عن الحادث والإجراءات المتخذة.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-10 text-white">
              <h2 className="text-2xl font-extrabold mb-6 text-center">الشهادات والامتثال</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: 'ISO 27001', desc: 'نظام إدارة أمن المعلومات' },
                  { name: 'SOC 2 Type II', desc: 'تقرير الضمان الأمني' },
                  { name: 'GDPR', desc: 'الامتثال لحماية البيانات الأوروبية' }
                ].map((cert, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                    <div className="text-2xl font-extrabold mb-2">{cert.name}</div>
                    <div className="text-blue-100 text-sm">{cert.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 text-center">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">فريق الأمن جاهز لمساعدتك</h2>
              <p className="text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                إذا كان لديك أي استفسارات حول أمن المعلومات أو ترغب في الإبلاغ عن ثغرة أمنية، تواصل معنا
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:security@businessplan.com" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2">
                  تواصل مع فريق الأمن
                  <ArrowLeft size={18} />
                </a>
                <a href="/privacy" className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2">
                  سياسة الخصوصية
                </a>
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

export default Security;
