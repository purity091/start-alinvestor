import React from 'react';
import { Lightbulb, X, Check } from 'lucide-react';

const Differentiation: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              لماذا هذه المنصة <span className="text-blue-600 relative inline-block">
                مختلفة؟
                <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-100 -z-10"></span>
              </span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              العديد من الأدوات تعطيك نصوصاً عامة لا قيمة لها. نحن صممنا هذه المنصة لتكون شريكاً استراتيجياً يساعدك على التفكير واتخاذ القرار.
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-red-50/50 border border-red-100 text-slate-500">
                <span className="font-medium decoration-slate-400 line-through decoration-2">أداة كتابة نصوص عشوائية</span>
                <X className="text-red-400" />
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-red-50/50 border border-red-100 text-slate-500">
                <span className="font-medium decoration-slate-400 line-through decoration-2">نموذج نظري جامد ومعقد</span>
                <X className="text-red-400" />
              </div>
              
              <div className="relative mt-6 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center justify-between p-6 bg-white rounded-xl border border-blue-100 shadow-xl">
                    <div className="flex items-center gap-4">
                        <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                            <Lightbulb size={24} />
                        </div>
                        <div>
                            <span className="block font-bold text-slate-900 text-lg">أداة تفكير واتخاذ قرار</span>
                            <span className="text-sm text-slate-500">مبنية على منهجيات ريادة الأعمال الحديثة</span>
                        </div>
                    </div>
                    <div className="bg-green-100 text-green-600 p-1 rounded-full">
                        <Check size={20} strokeWidth={3} />
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              {/* Abstract decorative elements */}
              <div className="absolute inset-0 bg-blue-600 blur-[80px] opacity-10 rounded-full animate-pulse-slow"></div>
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-yellow-400 rounded-full blur-[40px] opacity-20"></div>
              
              <div className="relative bg-white border border-gray-100 rounded-[2rem] shadow-2xl p-8 md:p-14 text-center transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner">
                  <Lightbulb size={48} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">نحن لا نعطيك سمكة</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  ولا حتى السنارة فقط.. <br/>
                  <span className="font-bold text-blue-600">نحن نعلمك أين وكيف تصطاد.</span>
                  <br/>
                  المنصة توفر لك البيئة والأدوات التي تجعل عملية التخطيط رحلة ممتعة، مما يمنحك الثقة الكاملة أمام المستثمرين.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiation;