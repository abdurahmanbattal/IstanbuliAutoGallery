import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";

const CTASection = () => {
  const whatsappMessage = encodeURIComponent("مرحباً، أرغب في الاستفسار عن السيارات المتوفرة في معرض استانبولي");
  const whatsappLink = `https://wa.me/962795473707?text=${whatsappMessage}`;

  return (
    <section className="section-luxury relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="heading-display text-foreground mb-6">
            هل تبحث عن
            <br />
            <span className="text-gradient">سيارة أحلامك؟</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            تواصل معنا الآن ودع فريقنا المتخصص يساعدك في اختيار السيارة المثالية لك
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 bg-emerald-600 hover:shadow-[0_4px_40px_-10px_rgb(34,197,94,0.5)]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>تواصل عبر واتساب</span>
            </a>
            <a
              href="tel:+962795473707"
              className="btn-outline inline-flex items-center gap-3"
            >
              <Phone className="w-5 h-5" />
              <span>اتصل الآن</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border/30 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>رد سريع</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>استشارة مجانية</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>خدمة VIP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
