import { Phone, MapPin, MessageCircle, Clock, Facebook, Instagram } from "lucide-react";
import Layout from "@/components/Layout";

const ContactPage = () => {
  const whatsappMessage = encodeURIComponent("مرحباً، أرغب في الاستفسار عن السيارات المتوفرة في معرض استانبولي");
  const whatsappLink = `https://wa.me/962795473707?text=${whatsappMessage}`;

  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="heading-display text-foreground text-center mb-4">
            <span className="text-gradient">تواصل معنا</span>
          </h1>
          <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto">
            نحن هنا لمساعدتك. تواصل معنا بأي طريقة تناسبك
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-luxury">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Address Card */}
              <div className="card-luxury p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      العنوان
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      وادي صقرة - عمان - الأردن
                      <br />
                      بناء رقم 83، شارع الشريف ناصر بن جميل
                    </p>
                    <a
                      href="https://maps.app.goo.gl/WCHs4AEJq9eMKFir7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-medium mt-3 hover:underline"
                    >
                      افتح في خرائط جوجل
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Cards */}
              <div className="card-luxury p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      أرقام الهاتف
                    </h3>
                    <div className="space-y-3">
                      <a
                        href="tel:+962795473707"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                        dir="ltr"
                      >
                        +962 7 9547 3707
                      </a>
                      <a
                        href="tel:+96265543910"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                        dir="ltr"
                      >
                        +962 6 554 3910
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="card-luxury p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      ساعات العمل
                    </h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>السبت - الخميس: 9:00 صباحاً - 8:00 مساءً</p>
                      <p>الجمعة: 2:00 مساءً - 8:00 مساءً</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 flex items-center justify-center gap-3 bg-emerald-600 hover:shadow-[0_4px_40px_-10px_rgb(34,197,94,0.5)]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>تواصل عبر واتساب</span>
                </a>
                <a
                  href="tel:+962795473707"
                  className="btn-outline flex-1 flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  <span>اتصل الآن</span>
                </a>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">
                  تابعنا على
                </h3>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.facebook.com/Istanbuli.Auto.Gallery/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-blue-glow transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/istanbuli.auto.gallery/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-blue-glow transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-[500px] lg:h-auto min-h-[400px] rounded-2xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.5!2d35.9!3d31.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDU3JzAwLjAiTiAzNcKwNTQnMDAuMCJF!5e0!3m2!1sen!2sjo!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع معرض استانبولي"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            هل لديك أي استفسار؟
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            فريقنا جاهز لمساعدتك والإجابة على جميع أسئلتك حول السيارات المتوفرة
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3"
          >
            <MessageCircle className="w-5 h-5" />
            <span>ابدأ المحادثة الآن</span>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
