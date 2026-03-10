import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "سارة العمر",
    role: "مؤسسة مشروع كافيه",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "كنت ضائعة بين الأوراق والحسابات، لكن هذا الموقع رتب أفكاري بالكامل. حصلت على تمويل مبدئي بفضل خطة العمل المقنعة التي أعددتها هنا.",
    rating: 5
  },
  {
    name: "عبدالرحمن الزهراني",
    role: "مدير تنفيذي لشركة تقنية",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "التحليلات التي يقدمها الذكاء الاصطناعي مذهلة. لفت نظري لنقاط ضعف في مشروعي لم أكن منتبهاً لها، وهذا وفر علي الكثير من الخسائر المحتملة.",
    rating: 5
  },
  {
    name: "ليلى حسن",
    role: "مصممة جرافيك مستقلة",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "أعجبني جداً سهولة الاستخدام. في أقل من ساعة كان لدي تصور كامل للمشروع جاهز للطباعة. تجربة المستخدم رائعة وسلسة.",
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="testimonials">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 rounded-full blur-[80px] opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-sm tracking-wider uppercase mb-3 block">آراء العملاء</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">قصص نجاح نفخر بها</h2>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            انضم لأكثر من 10,000 رائد أعمال استخدموا منصتنا لإطلاق مشاريعهم بثقة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] relative group border border-slate-100 hover:border-blue-200 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-2 transition-all duration-300">
              <div className="absolute -top-4 left-8 bg-blue-600 text-white p-3 rounded-xl shadow-lg transform rotate-12 group-hover:rotate-0 transition-all duration-300">
                <Quote size={20} className="transform scale-x-[-1]" fill="currentColor" />
              </div>

              <div className="flex gap-1 mb-6 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={`${i < t.rating ? "text-amber-400 fill-amber-400" : "text-gray-200"}`} 
                  />
                ))}
              </div>

              <p className="text-slate-600 text-base leading-relaxed mb-8 relative z-10 font-medium h-24">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;