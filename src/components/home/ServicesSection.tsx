import { Award, Shield, Car, Users } from "lucide-react";

const features = [
  {
    icon: Car,
    title: "سيارات حديثة",
    description: "تشكيلة واسعة من أحدث موديلات السيارات العالمية",
  },
  {
    icon: Award,
    title: "سيارات فاخرة",
    description: "أفخم الماركات العالمية بمواصفات استثنائية",
  },
  {
    icon: Shield,
    title: "جودة مضمونة",
    description: "فحص شامل لكل سيارة مع ضمان الجودة الكاملة",
  },
  {
    icon: Users,
    title: "خدمة عملاء VIP",
    description: "فريق متخصص لخدمتك وتلبية جميع احتياجاتك",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-luxury bg-secondary/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            خدماتنا
          </span>
          <h2 className="heading-section text-foreground">
            لماذا تختار معرض استانبولي؟
          </h2>
          <p className="text-muted-foreground text-lg">
            نقدم لك خدمات متميزة تجعل تجربة شراء سيارتك سهلة وممتعة
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-luxury p-8 text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
