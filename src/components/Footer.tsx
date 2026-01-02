import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/istanbuli-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="space-y-6">
            <Link to="/">
              <img
                src={logo}
                alt="ISTANBULI AUTO GALLERY"
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              معرض استانبولي لتجارة السيارات - وجهتك الأولى للسيارات الفاخرة والحديثة في الأردن
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  to="/cars"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  السيارات
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  وادي صقرة - عمان - الأردن
                  <br />
                  بناء رقم 83، شارع الشريف ناصر بن جميل
                </span>
              </li>
              <li>
                <a
                  href="tel:+962795473707"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span dir="ltr">+962 7 9547 3707</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+96265543910"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span dir="ltr">+962 6 554 3910</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">تابعنا</h4>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/Istanbuli.Auto.Gallery/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-blue-glow transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/istanbuli.auto.gallery/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-blue-glow transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} معرض استانبولي لتجارة السيارات. جميع الحقوق محفوظة.
          </p>
          <p className="text-muted-foreground text-sm">
            ISTANBULI AUTO GALLERY
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
