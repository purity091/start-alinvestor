import React from 'react';
import { MessageSquare, Layout, CheckCircle, Shield, FileText, PieChart, ArrowLeft, Download, RefreshCw, Smartphone, Monitor, AlertTriangle, Sparkles } from 'lucide-react';

const FeatureDeepDive: React.FC = () => {
  return (
    <section className="py-0 overflow-hidden bg-white">
            
      {/* 1. Smart Wizard (The Conversation) */}
      <div className="py-24 lg:py-32 border-b border-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative mx-auto max-w-md">
                 <div className="absolute inset-0 bg-blue-100 transform rotate-6 rounded-[2.5rem] opacity-40"></div>
                 <div className="relative bg-white border border-gray-100 rounded-[2.5rem] shadow-2xl p-6 overflow-hidden">
                    {/* Header of Phone */}
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-1.5 bg-gray-200 rounded-full"></div>
                    </div>
                    {/* Chat Interface */}
                    <div className="space-y-5">
                        <div className="flex items-end gap-3">
                             <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">AI</div>
                             <div className="bg-gray-100 p-4 rounded-2xl rounded-bl-none text-slate-700 text-sm leading-relaxed max-w-[85%]">
                                لنبدأ! ما هو القطاع الرئيسي لمشروعك الجديد؟
                             </div>
                        </div>
                        <div className="flex items-end gap-3 flex-row-reverse">
                             <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white text-xs font-bold">أنا</div>
                             <div className="bg-blue-600 text-white p-4 rounded-2xl rounded-br-none text-sm leading-relaxed shadow-lg shadow-blue-600/20">
                                كافية مختص يقدم القهوة والحلويات الصحية
                             </div>
                        </div>
                         <div className="flex items-end gap-3">
                             <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">AI</div>
                             <div className="bg-gray-100 p-4 rounded-2xl rounded-bl-none text-slate-700 text-sm leading-relaxed max-w-[85%]">
                                <p className="mb-2">ممتاز. بناءً على بيانات السوق، الكافيهات الصحية تنمو بنسبة 15% سنوياً.</p>
                                <p className="text-slate-500 text-xs border-t border-gray-200 pt-2 mt-2">سؤال 2 من 15: هل ستعتمد على العمالة المحلية؟</p>
                             </div>
                        </div>
                        {/* Typing indicator */}
                        <div className="flex items-center gap-1 px-4 py-2 bg-gray-50 rounded-full w-fit">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                <MessageSquare size={16} />
                <span>الخطوة الأولى</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                المعالج الذكي: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">شريك يفهم لغتك</span>
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                وداعاً للشاشات المعقدة. النظام يعمل كشريك مؤسس، يحاورك ويسألك الأسئلة الصحيحة بالترتيب، ثم يقوم بصياغة إجاباتك العفوية وتحويلها إلى نصوص تجارية احترافية ورسمية تناسب البنوك والمستثمرين.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-slate-700">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                    <span className="font-medium">تحويل الأفكار الشفهية إلى نصوص رسمية</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                    <span className="font-medium">اقتراحات ذكية لإكمال المعلومات الناقصة</span>
                </li>
              </ul>
              <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all group">
                جرب المعالج الآن <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Specialized Templates (The Grid) */}
      <div className="py-24 lg:py-32 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-indigo-100 border border-indigo-200 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                <Layout size={16} />
                <span>نماذج مخصصة</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                قوالب مفصلة <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">على مقاس مشروعك</span>
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                دراسة الكافية تختلف جذرياً عن دراسة التطبيق التقني. لذا، وفرنا لك قوالب متخصصة تغطي التفاصيل الدقيقة لكل قطاع. سواء كان مشروعك متجراً إلكترونياً، مطعماً، أو شركة خدمات، لدينا الهيكل المناسب لك.
              </p>
              <button className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all group">
                استعرض القوالب المتاحة <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="lg:w-1/2 w-full">
                <div className="grid grid-cols-2 gap-5 max-w-lg mx-auto">
                    {[
                        { title: "المطاعم والكافيهات", icon: "🍔", color: "bg-orange-100 text-orange-600" },
                        { title: "المتاجر الإلكترونية", icon: "🛒", color: "bg-blue-100 text-blue-600" },
                        { title: "التقنية و SaaS", icon: "💻", color: "bg-purple-100 text-purple-600" },
                        { title: "الخدمات والاستشارات", icon: "briefcase", color: "bg-green-100 text-green-600" }
                    ].map((item, idx) => (
                        <div key={idx} className={`bg-white p-6 rounded-3xl shadow-lg shadow-slate-200/50 border border-gray-100 hover:scale-105 transition-transform duration-300 ${idx % 2 !== 0 ? 'mt-8' : ''}`}>
                             <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-4 text-xl shadow-sm`}>
                                {item.icon === "briefcase" ? <Monitor size={20}/> : item.icon}
                             </div>
                             <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
                             <div className="h-1.5 w-full bg-gray-100 rounded-full mb-2"></div>
                             <div className="h-1.5 w-2/3 bg-gray-100 rounded-full"></div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Progress Dashboard (The Tracker) */}
      <div className="py-24 lg:py-32 bg-white border-b border-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2 order-2 lg:order-1">
                <div className="bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl max-w-lg mx-auto text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600 rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h4 className="font-bold text-lg mb-1">لوحة الإنجاز</h4>
                                <p className="text-slate-400 text-xs">مشروع "مطعم البركة"</p>
                            </div>
                            <div className="w-12 h-12 rounded-full border-4 border-slate-700 border-t-purple-500 flex items-center justify-center text-xs font-bold">
                                75%
                            </div>
                        </div>
                        
                        <div className="space-y-4">
                            {/* Done Item */}
                            <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                                <div className="bg-green-500/20 text-green-500 p-2 rounded-full">
                                    <CheckCircle size={18} />
                                </div>
                                <div className="flex-grow">
                                    <h5 className="font-bold text-sm">وصف المشروع</h5>
                                    <p className="text-slate-500 text-xs">مكتمل</p>
                                </div>
                            </div>
                            
                            {/* Active Item */}
                            <div className="flex items-center gap-4 p-4 bg-purple-600/10 rounded-2xl border border-purple-500/50 relative overflow-hidden">
                                <div className="absolute left-0 top-0 h-full w-1 bg-purple-500"></div>
                                <div className="bg-purple-500/20 text-purple-400 p-2 rounded-full">
                                    <RefreshCw size={18} className="animate-spin-slow" />
                                </div>
                                <div className="flex-grow">
                                    <h5 className="font-bold text-sm text-white">الخطة التسويقية</h5>
                                    <p className="text-purple-300 text-xs">جاري العمل - ينقص تحديد الجمهور</p>
                                </div>
                                <button className="bg-purple-600 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-purple-500 transition">أكمل</button>
                            </div>

                            {/* Locked Item */}
                            <div className="flex items-center gap-4 p-4 bg-slate-800/20 rounded-2xl border border-slate-800 opacity-60">
                                <div className="bg-slate-700 text-slate-500 p-2 rounded-full">
                                    <div className="w-4 h-4 rounded-full border-2 border-slate-500 border-dashed"></div>
                                </div>
                                <div className="flex-grow">
                                    <h5 className="font-bold text-sm text-slate-400">التوقعات المالية</h5>
                                    <p className="text-slate-600 text-xs">معلق</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                <PieChart size={16} />
                <span>المتابعة والإنجاز</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                بوصلة ترشدك <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">للنقاط المفقودة</span>
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                لا تترك مجالاً للصدفة. راقب نسبة اكتمال دراستك عبر لوحة تحكم تفاعلية. النظام ينبهك تلقائياً للأقسام التي تجاوزتها أو التي تحتاج إلى تفاصيل أكثر لضمان قبول دراستك لدى الجهات الممولة.
              </p>
              <button className="text-purple-600 font-bold flex items-center gap-2 hover:gap-3 transition-all group">
                شاهد لوحة التحكم <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Privacy & Security */}
      <div className="py-24 lg:py-32 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-teal-100 border border-teal-200 text-teal-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                <Shield size={16} />
                <span>أمان عالي</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                أسرار مشروعك <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-green-600">في خزانة مشفرة</span>
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                نحن ندرك قيمة فكرتك. لذا، تم بناء المنصة بمعايير أمان بنكية. دراستك مشفرة بالكامل، ولا يتم مشاركتها مع أي طرف ثالث، ولا تُستخدم لتدريب نماذج الذكاء الاصطناعي العامة.
              </p>
              <button className="text-teal-600 font-bold flex items-center gap-2 hover:gap-3 transition-all group">
                اقرأ وثيقة الخصوصية <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
                <div className="relative w-80 h-80 flex items-center justify-center">
                    {/* Ripple Effect */}
                    <div className="absolute inset-0 bg-teal-100 rounded-full animate-ping opacity-20"></div>
                    <div className="absolute inset-8 bg-teal-100 rounded-full animate-ping opacity-40 animation-delay-200"></div>
                    
                    <div className="relative w-64 h-64 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-teal-50 z-10">
                        <Shield size={100} className="text-teal-500 drop-shadow-lg" strokeWidth={1.5} />
                        
                        <div className="absolute -bottom-4 bg-white shadow-lg border border-teal-100 px-6 py-3 rounded-full flex items-center gap-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-sm font-bold text-slate-700">تشفير SSL 256-bit</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

       {/* 5. Export Ready */}
       <div className="py-24 lg:py-32 bg-white border-b border-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2 order-2 lg:order-1">
                <div className="relative group max-w-md mx-auto perspective-1000">
                    <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                    
                    {/* Document Paper */}
                    <div className="relative bg-white p-1 rounded-xl border border-gray-200 shadow-2xl transform transition-transform duration-500 group-hover:rotate-1">
                        <div className="bg-slate-50/50 p-8 rounded-lg min-h-[380px] flex flex-col items-center">
                            {/* Doc Header */}
                            <div className="w-full flex items-center gap-4 mb-8 border-b border-gray-100 pb-6">
                                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center border border-gray-100">
                                    <FileText className="text-orange-500" size={24} />
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2.5 w-32 bg-slate-300 rounded-full"></div>
                                    <div className="h-2 w-20 bg-slate-200 rounded-full"></div>
                                </div>
                                <div className="mr-auto px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-bold">جاهز</div>
                            </div>
                            
                            {/* Doc Body */}
                            <div className="w-full space-y-3 mb-auto opacity-60">
                                <div className="h-2 w-full bg-slate-200 rounded-full"></div>
                                <div className="h-2 w-full bg-slate-200 rounded-full"></div>
                                <div className="h-2 w-5/6 bg-slate-200 rounded-full"></div>
                                <div className="h-20 w-full bg-slate-100 rounded-xl mt-4 border border-slate-200"></div>
                            </div>
                            
                            {/* Export Actions */}
                            <div className="flex gap-4 w-full mt-8">
                                <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition shadow-lg shadow-red-500/20">
                                    <Download size={16} /> PDF
                                </button>
                                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition shadow-lg shadow-blue-600/20">
                                    <Download size={16} /> Word
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                <FileText size={16} />
                <span>تصدير احترافي</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                وثيقة جاهزة <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">لتقديمها للمستثمر</span>
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                لا داعي لإعادة التنسيق أو التصميم. بنقرة واحدة، يمكنك تحميل دراستك بصيغة PDF بتصميم عصري وأنيق، أو بصيغة Word قابلة للتعديل بالكامل إذا أردت إضافة لمساتك الخاصة.
              </p>
              <button className="text-orange-600 font-bold flex items-center gap-2 hover:gap-3 transition-all group">
                شاهد نموذج للدراسة <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

       {/* 6. SWOT Analysis (The Strategy) */}
       <div className="py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-rose-100 border border-rose-200 text-rose-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                <PieChart size={16} />
                <span>تحليل استراتيجي</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                تحليل SWOT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">بقوة الذكاء الاصطناعي</span>
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                أصعب جزء في التخطيط هو رؤية الصورة الكبيرة. نظامنا يقرأ مدخلاتك، يحلل السوق، ثم يستنتج تلقائياً نقاط القوة، الضعف، الفرص، والتهديدات المحتملة لمشروعك.
              </p>
              <button className="text-rose-600 font-bold flex items-center gap-2 hover:gap-3 transition-all group">
                كيف يعمل التحليل؟ <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="lg:w-1/2 w-full">
                <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto relative">
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-rose-100 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

                    <div className="bg-white/80 backdrop-blur-sm border border-green-100 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative z-10">
                        <span className="text-green-600 font-bold block mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-green-500"></div> نقاط القوة
                        </span>
                        <ul className="text-xs text-slate-600 space-y-2.5">
                            <li className="flex items-start gap-2"><CheckCircle size={12} className="text-green-500 mt-0.5"/> موقع استراتيجي وحيوي</li>
                            <li className="flex items-start gap-2"><CheckCircle size={12} className="text-green-500 mt-0.5"/> تكلفة تشغيل منخفضة</li>
                        </ul>
                    </div>
                    
                    <div className="bg-white/80 backdrop-blur-sm border border-red-100 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative z-10">
                        <span className="text-red-600 font-bold block mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-red-500"></div> نقاط الضعف
                        </span>
                        <ul className="text-xs text-slate-600 space-y-2.5">
                            <li className="flex items-start gap-2"><div className="w-1 h-1 bg-red-400 rounded-full mt-1.5"></div> ميزانية تسويق محدودة</li>
                            <li className="flex items-start gap-2"><div className="w-1 h-1 bg-red-400 rounded-full mt-1.5"></div> علامة تجارية جديدة</li>
                        </ul>
                    </div>
                    
                    <div className="bg-white/80 backdrop-blur-sm border border-blue-100 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative z-10">
                        <span className="text-blue-600 font-bold block mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-blue-500"></div> الفرص
                        </span>
                        <ul className="text-xs text-slate-600 space-y-2.5">
                            <li className="flex items-start gap-2"><div className="w-1 h-1 bg-blue-400 rounded-full mt-1.5"></div> نمو الطلب في السوق</li>
                            <li className="flex items-start gap-2"><div className="w-1 h-1 bg-blue-400 rounded-full mt-1.5"></div> شراكات محلية</li>
                        </ul>
                    </div>
                    
                    <div className="bg-white/80 backdrop-blur-sm border border-orange-100 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative z-10">
                        <span className="text-orange-600 font-bold block mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-orange-500"></div> التهديدات
                        </span>
                        <ul className="text-xs text-slate-600 space-y-2.5">
                            <li className="flex items-start gap-2"><AlertTriangle size={12} className="text-orange-500 mt-0.5"/> دخول منافسين كبار</li>
                            <li className="flex items-start gap-2"><AlertTriangle size={12} className="text-orange-500 mt-0.5"/> تغير تشريعات القطاع</li>
                        </ul>
                    </div>
                    
                    {/* AI Badge */}
                    <div className="col-span-2 flex justify-center mt-6 relative z-10">
                        <span className="bg-slate-900 text-white text-xs font-bold py-1.5 px-4 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition-transform">
                            <Sparkles size={12} className="text-rose-500 fill-rose-500" />
                            تم التوليد تلقائياً بواسطة AI
                        </span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default FeatureDeepDive;