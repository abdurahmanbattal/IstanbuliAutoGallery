import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    "أكثر من 15 عاماً من الخبرة في سوق السيارات",
    "تشكيلة واسعة من أفخم الماركات العالمية",
    "فريق متخصص لخدمة العملاء على مدار الساعة",
    "ضمان الجودة والمصداقية في كل صفقة",
    "موقع مميز في قلب عمان - وادي صقرة",
  ];

  return (
    <section className="section-luxury">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              من نحن
            </span>
            <h2 className="heading-section text-foreground">
              معرض استانبولي لتجارة السيارات
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              نحن معرض متخصص في بيع السيارات الحديثة والفاخرة في الأردن. منذ تأسيسنا، نسعى جاهدين لتقديم أفضل تجربة شراء لعملائنا الكرام مع الالتزام بأعلى معايير الجودة والمصداقية.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              نفخر بثقة عملائنا التي اكتسبناها على مر السنين من خلال تقديم خدمات VIP متميزة وسيارات بمواصفات استثنائية.
            </p>

            {/* Highlights */}
            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 p-1">
              <div className="w-full h-full rounded-2xl bg-card flex flex-col items-center justify-center p-12 text-center">
                <div className="text-8xl font-black text-gradient mb-4">+15</div>
                <div className="text-2xl font-bold text-foreground mb-2">عاماً من الخبرة</div>
                <div className="text-muted-foreground">في خدمة عملائنا الكرام</div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
