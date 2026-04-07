import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, HelpCircle, ArrowLeft, CheckCircle2 } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            <MessageSquare size={16} />
            <span className="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">نحن هنا لمساعدتك</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-8">
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                اتصل بنا
              </span>
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 font-light">
            لديك سؤال أو اقتراح؟ فريقنا جاهز للاستماع إليك والرد على جميع استفساراتك
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  icon: Mail,
                  title: 'البريد الإلكتروني',
                  info: 'support@businessplan.com',
                  subInfo: 'نرد خلال 24 ساعة عمل',
                  color: 'blue'
                },
                {
                  icon: Phone,
                  title: 'الهاتف',
                  info: '+966 50 123 4567',
                  subInfo: 'الأحد - الخميس، 9ص - 6م',
                  color: 'indigo'
                },
                {
                  icon: MapPin,
                  title: 'الموقع',
                  info: 'الرياض، المملكة العربية السعودية',
                  subInfo: 'زيارات بعد موعد مسبق',
                  color: 'purple'
                },
                {
                  icon: Clock,
                  title: 'ساعات العمل',
                  info: 'الأحد - الخميس',
                  subInfo: '9:00 صباحاً - 6:00 مساءً',
                  color: 'teal'
                }
              ].map((card, idx) => {
                const colors: { [key: string]: { bg: string, text: string, border: string } } = {
                  blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100' },
                  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-100' },
                  purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100' },
                  teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-100' },
                };
                const theme = colors[card.color];
                
                return (
                  <div key={idx} className={`bg-gradient-to-br ${theme.bg} to-white rounded-2xl p-6 border ${theme.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${theme.bg} ${theme.text} shadow-sm`}>
                      <card.icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
                    <p className="text-slate-800 font-semibold mb-1">{card.info}</p>
                    <p className="text-sm text-slate-500">{card.subInfo}</p>
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
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-2">أرسل لنا رسالة</h2>
                  <p className="text-slate-600 mb-8">املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن</p>

                  {isSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                        <CheckCircle2 size={32} />
                      </div>
                      <h3 className="text-xl font-bold text-green-800 mb-2">تم الإرسال بنجاح!</h3>
                      <p className="text-green-700">شكراً لتواصلك معنا. سنرد عليك خلال 24 ساعة عمل.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-slate-700 font-semibold mb-2">الاسم الكامل</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                            placeholder="أحمد محمد"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-700 font-semibold mb-2">البريد الإلكتروني</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                            placeholder="example@email.com"
                            dir="ltr"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-700 font-semibold mb-2">الموضوع</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        >
                          <option value="">اختر الموضوع</option>
                          <option value="general">استفسار عام</option>
                          <option value="support">دعم فني</option>
                          <option value="billing">الفواتير والمدفوعات</option>
                          <option value="partnership">شراكات وتعاون</option>
                          <option value="feedback">ملاحظات واقتراحات</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-slate-700 font-semibold mb-2">الرسالة</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                          placeholder="اكتب رسالتك هنا..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
                      >
                        إرسال الرسالة
                        <Send size={18} />
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* FAQ */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-50 text-blue-600">
                      <HelpCircle size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">الأسئلة الشائعة</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      {
                        q: 'هل هناك فترة تجريبية مجانية؟',
                        a: 'نعم، نقدم فترة تجريبية مجانية لمدة 7 أيام.'
                      },
                      {
                        q: 'كيف يمكنني إلغاء اشتراكي؟',
                        a: 'يمكنك الإلغاء من إعدادات الحساب في أي وقت.'
                      },
                      {
                        q: 'هل بياناتي آمنة؟',
                        a: 'نعم، نستخدم تشفير SSL وحماية متقدمة لبياناتك.'
                      }
                    ].map((faq, idx) => (
                      <div key={idx} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <p className="font-semibold text-slate-800 mb-2 text-sm">{faq.q}</p>
                        <p className="text-sm text-slate-600">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                  <a href="/faq" className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center gap-1 mt-4">
                    عرض جميع الأسئلة
                    <ArrowLeft size={14} />
                  </a>
                </div>

                {/* Live Chat CTA */}
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MessageSquare size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">الدردشة المباشرة</h3>
                  <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                    تحدث مع فريق الدعم مباشرة للحصول على مساعدة فورية
                  </p>
                  <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-6 py-3 rounded-xl transition-all w-full">
                    بدء المحادثة
                  </button>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">تابعنا</h3>
                  <p className="text-slate-600 text-sm mb-6">ابق على اطلاع بآخر الأخبار والتحديثات</p>
                  <div className="space-y-3">
                    {[
                      { name: 'تويتر', handle: '@BusinessPlanAR', color: 'hover:bg-sky-50 hover:text-sky-500' },
                      { name: 'لينكد إن', handle: 'معالج الأعمال', color: 'hover:bg-blue-50 hover:text-blue-600' },
                      { name: 'انستغرام', handle: '@BusinessPlanAR', color: 'hover:bg-pink-50 hover:text-pink-600' }
                    ].map((social, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className={`flex items-center justify-between p-3 rounded-xl border border-gray-100 transition-all ${social.color}`}
                      >
                        <span className="font-semibold text-slate-800 text-sm">{social.name}</span>
                        <span className="text-slate-500 text-sm">{social.handle}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl h-80 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
              <div className="text-center relative z-10">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <MapPin size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">موقعنا على الخريطة</h3>
                <p className="text-slate-600">الرياض، المملكة العربية السعودية</p>
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

export default ContactUs;
