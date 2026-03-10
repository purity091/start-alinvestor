import React from 'react';
import { FileText, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 text-white p-1.5 rounded-lg">
                <FileText size={20} />
              </div>
              <span className="text-xl font-bold text-slate-900">معالج الأعمال</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 mb-6">
              المنصة العربية الأولى لإنشاء وإدارة دراسات الجدوى وخطط العمل باستخدام قوة الذكاء الاصطناعي.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors"><Instagram size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">المنتج</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">كيف يعمل؟</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">نماذج الأعمال</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">الأسعار والباقات</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">للشركات</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">المصادر</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">المدونة</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">دليل ريادة الأعمال</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">مركز المساعدة</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">اتصل بنا</a></li>
            </ul>
          </div>
          
           <div>
            <h4 className="text-slate-900 font-bold mb-6">قانوني</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">شروط الاستخدام</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">أمن المعلومات</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-400 gap-4">
          <p>© 2024 معالج خطط الأعمال. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
             <span>صُنع بحب 💙 لرواد الأعمال</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;