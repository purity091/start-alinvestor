import React, { useEffect, useState } from 'react';
import { Check, Star, Zap } from 'lucide-react';

const pricingData: Record<string, { currency: string, amount: string | number, symbol: string, code: string }> = {
    SA: { currency: "SAR", amount: 99, symbol: "ر.س", code: "SA" },
    AE: { currency: "AED", amount: 97, symbol: "د.إ", code: "AE" },
    QA: { currency: "QAR", amount: 96, symbol: "ر.ق", code: "QA" },
    KW: { currency: "KWD", amount: 8, symbol: "د.ك", code: "KW" },
    BH: { currency: "BHD", amount: 10, symbol: "د.ب", code: "BH" },
    OM: { currency: "OMR", amount: 10, symbol: "ر.ع", code: "OM" },
    DEFAULT: { currency: "USD", amount: 26.4, symbol: "$", code: "US" }
};

const Pricing: React.FC = () => {
    const [userCountry, setUserCountry] = useState<string>("DEFAULT");
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const response = await fetch('https://get.geojs.io/v1/ip/country.json');
                if (response.ok) {
                    const data = await response.json();
                    const country = data.country;
                    if (pricingData[country]) {
                        setUserCountry(country);
                    } else {
                        setUserCountry("DEFAULT");
                    }
                }
            } catch (error) {
                console.error("Failed to fetch country", error);
                setUserCountry("DEFAULT");
            } finally {
                setIsLoading(false);
            }
        };
        fetchCountry();
    }, []);

    const currentPrice = pricingData[userCountry] || pricingData["DEFAULT"];

    return (
        <section className="py-24 px-4 bg-gray-50 relative overflow-hidden" id="pricing">
            <div className="absolute top-0 right-0 -mr-40 mt-32 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-60"></div>
            <div className="absolute bottom-0 left-0 -ml-40 mb-32 w-96 h-96 bg-indigo-100 rounded-full blur-[100px] opacity-60"></div>

            <div className="container mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        خطط تناسب طموحك
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-light">
                        اختر الخطة التي تناسب احتياجاتك لتبدأ رحلة نجاحك معنا، سواء كنت في البداية أو تبحث عن الاحترافية.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto justify-center items-center md:items-stretch">

                    {/* Free Plan */}
                    <div className="flex-1 w-full max-w-md bg-white rounded-3xl p-8 lg:p-10 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative flex flex-col">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">الخطة المجانية</h3>
                            <p className="text-slate-500 font-medium">البداية المثالية لاستكشاف المنصة</p>
                        </div>

                        <div className="mb-8 flex items-baseline gap-2">
                            <span className="text-5xl font-extrabold text-slate-900">مجاناً</span>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {['توليد خطة عمل أساسية', 'تصدير بصيغة PDF', 'دعم فني عبر البريد الإلكتروني', 'وصول لنموذج الأعمال المبسط'].map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-slate-700">
                                    <div className="bg-slate-100 text-slate-600 p-1 rounded-full shrink-0">
                                        <Check size={16} strokeWidth={3} />
                                    </div>
                                    <span className="font-medium text-sm md:text-base">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-4 px-6 rounded-xl font-bold bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors mt-auto shadow-sm">
                            ابدأ مجاناً
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div className="flex-1 w-full max-w-md bg-[#0f172a] rounded-3xl p-8 lg:p-10 shadow-2xl shadow-blue-900/30 border border-blue-900/50 hover:shadow-blue-900/40 hover:-translate-y-1 transition-all duration-300 relative text-white flex flex-col transform md:-translate-y-4 md:hover:-translate-y-5">
                        <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-blue-500/30 flex items-center gap-2 whitespace-nowrap z-20">
                            <Star size={14} fill="currentColor" /> الأكثر مبيعاً
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent rounded-3xl pointer-events-none"></div>

                        <div className="mb-8 relative z-10 mt-2">
                            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                خطة المحترفين <Zap size={20} className="text-amber-400 fill-amber-400/20" />
                            </h3>
                            <p className="text-slate-400 font-medium">كل ما تحتاجه لإطلاق مشروعك بقوة</p>
                        </div>

                        <div className="mb-8 flex items-baseline gap-2 relative z-10 transition-opacity duration-300" style={{ opacity: isLoading ? 0.5 : 1 }}>
                            <span className="text-5xl font-extrabold text-white">
                                {currentPrice.amount}
                            </span>
                            <span className="text-xl text-blue-300 font-bold">{currentPrice.symbol}</span>
                            <span className="text-slate-400 font-medium mr-2">/ مرة واحدة</span>
                        </div>

                        <ul className="space-y-4 mb-8 relative z-10 flex-1">
                            {['توليد خطة عمل احترافية ومفصلة', 'تحليل شامل للسوق والمنافسين', 'دراسة جدوى مالية متكاملة', 'تصدير بجميع الصيغ (PDF, Word, Excel)', 'دعم فني ذو أولوية على مدار الساعة'].map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-slate-200">
                                    <div className="bg-blue-600 text-white p-1 rounded-full shrink-0 shadow-sm shadow-blue-600/50">
                                        <Check size={16} strokeWidth={3} />
                                    </div>
                                    <span className="font-medium text-sm md:text-base">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-4 px-6 rounded-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg shadow-blue-600/30 relative z-10 mt-auto hover:shadow-blue-500/50 transform hover:scale-[1.02] active:scale-95">
                            اشترك الآن
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pricing;
