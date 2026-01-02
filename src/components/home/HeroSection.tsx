import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import heroImage from "@/assets/hero-showroom.jpg";
import logo from "@/assets/istanbuli-logo.jpg";

const HeroSection = () => {
  return (
    <section
      dir="ltr"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="معرض السيارات الفاخرة"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 flex justify-center">
        {/* ⬇️ هذا هو العنصر الحاسم */}
        <div className="max-w-4xl w-full text-center">
          {/* Logo */}
          <div className="animate-fade-up mb-8 flex justify-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-primary/20">
              <img src={logo} alt="ISTANBULI" className="h-8 w-auto" />
              <span className="text-sm font-medium text-primary">
                معرض السيارات الفاخرة
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="heading-display text-foreground mb-6 animate-fade-up animate-delay-100">
            معرض استانبولي
            <br />
            <span className="text-gradient">لتجارة السيارات</span>
          </h1>

          {/* Paragraph */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up animate-delay-200 leading-relaxed">
            وجهتك الأولى لبيع السيارات الحديثة والفاخرة في الأردن. نقدم لك تجربة
            شراء VIP مع ضمان الجودة والمصداقية.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-delay-300">
            <Link
              to="/cars"
              className="btn-primary inline-flex items-center justify-center gap-3"
            >
              <span>عرض السيارات</span>
              <ChevronLeft className="w-5 h-5" />
            </Link>

            <Link
              to="/contact"
              className="btn-outline inline-flex items-center justify-center"
            >
              تواصل معنا
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/30 animate-fade-up animate-delay-400">
            <div>
              <div className="text-3xl md:text-4xl font-black text-gradient">
                +366
              </div>
              <div className="text-muted-foreground text-sm mt-1">
                سيارة تم بيعها
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-gradient">
                +15
              </div>
              <div className="text-muted-foreground text-sm mt-1">
                سنة خبرة
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-gradient">
                100%
              </div>
              <div className="text-muted-foreground text-sm mt-1">
                رضا العملاء
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
