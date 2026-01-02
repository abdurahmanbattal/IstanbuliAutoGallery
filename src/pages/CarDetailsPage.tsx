import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  Gauge,
  Fuel,
  Settings,
  Car,
  Palette,
  Phone,
  MessageCircle,
  Share2,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";

// Mock data
const carsData: Record<number, {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  condition: string;
  status: string;
  engineType: string;
  engineSize: string;
  transmission: string;
  fuelType: string;
  driveType: string;
  exteriorColor: string;
  interiorColor: string;
  description: string;
  images: string[];
}> = {
  1: {
    id: 1,
    brand: "Mercedes-Benz",
    model: "S-Class S500",
    year: 2024,
    price: 185000,
    mileage: 0,
    condition: "جديدة",
    status: "available",
    engineType: "بنزين",
    engineSize: "3.0L V6 Turbo",
    transmission: "أوتوماتيك 9 سرعات",
    fuelType: "بنزين",
    driveType: "دفع خلفي",
    exteriorColor: "أسود ميتاليك",
    interiorColor: "بيج",
    description:
      "مرسيدس S-Class S500 موديل 2024 بحالة ممتازة. السيارة مجهزة بالكامل بجميع المواصفات الفاخرة بما في ذلك نظام الصوت Burmester، فتحة سقف بانورامية، مقاعد جلد طبيعي مع تدفئة وتبريد، ونظام القيادة الذكية. صيانة كاملة في الوكالة مع سجل خدمة موثق.",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=800&fit=crop",
    ],
  },
  2: {
    id: 2,
    brand: "BMW",
    model: "X7 M60i",
    year: 2024,
    price: 165000,
    mileage: 5000,
    condition: "مستعملة",
    status: "available",
    engineType: "بنزين",
    engineSize: "4.4L V8 Twin-Turbo",
    transmission: "أوتوماتيك 8 سرعات",
    fuelType: "بنزين",
    driveType: "دفع رباعي",
    exteriorColor: "أزرق ميتاليك",
    interiorColor: "أسود",
    description:
      "BMW X7 M60i موديل 2024 بمواصفات كاملة. محرك V8 قوي مع أداء استثنائي. مقاعد للصف الثالث، شاشات ترفيه خلفية، نظام صوتي Harman Kardon، وجميع أنظمة السلامة المتقدمة.",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1619976215249-d6e9d7ff3a4f?w=1200&h=800&fit=crop",
    ],
  },
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "available":
      return (
        <span className="badge-available px-4 py-2 rounded-full text-sm font-semibold">
          متوفرة
        </span>
      );
    case "reserved":
      return (
        <span className="badge-reserved px-4 py-2 rounded-full text-sm font-semibold">
          محجوزة
        </span>
      );
    case "sold":
      return (
        <span className="badge-sold px-4 py-2 rounded-full text-sm font-semibold">
          مباعة
        </span>
      );
    default:
      return null;
  }
};

const CarDetailsPage = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const car = carsData[Number(id)] || carsData[1];

  if (!car) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              السيارة غير موجودة
            </h1>
            <Link to="/cars" className="btn-primary">
              العودة للسيارات
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `مرحباً، أرغب في الاستفسار عن ${car.brand} ${car.model} ${car.year}`
  );
  const whatsappLink = `https://wa.me/962795473707?text=${whatsappMessage}`;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + car.images.length) % car.images.length
    );
  };

  const specs = [
    { icon: Calendar, label: "سنة الصنع", value: car.year },
    { icon: Gauge, label: "المسافة المقطوعة", value: `${car.mileage.toLocaleString()} كم` },
    { icon: Settings, label: "ناقل الحركة", value: car.transmission },
    { icon: Fuel, label: "نوع الوقود", value: car.fuelType },
    { icon: Car, label: "نوع الدفع", value: car.driveType },
    { icon: Palette, label: "اللون الخارجي", value: car.exteriorColor },
  ];

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="pt-28 pb-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/cars" className="hover:text-primary transition-colors">
              السيارات
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">
              {car.brand} {car.model}
            </span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-card">
                <img
                  src={car.images[currentImageIndex]}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover"
                />
                {/* Navigation Arrows */}
                {car.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
                    >
                      <ArrowLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  </>
                )}
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  {getStatusBadge(car.status)}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {car.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === index
                        ? "border-primary"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${car.brand} ${car.model} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              {/* Header */}
              <div className="mb-8">
                <span className="text-primary font-semibold text-lg">
                  {car.brand}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                  {car.model}
                </h1>
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground">{car.condition}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{car.year}</span>
                </div>
              </div>

              {/* Price */}
              <div className="p-6 rounded-2xl bg-card border border-border mb-8">
                <div className="text-sm text-muted-foreground mb-2">السعر</div>
                <div className="text-4xl font-black text-gradient">
                  ${car.price.toLocaleString()}
                </div>
              </div>

              {/* Specifications Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="p-4 rounded-xl bg-card border border-border"
                  >
                    <spec.icon className="w-5 h-5 text-primary mb-2" />
                    <div className="text-xs text-muted-foreground mb-1">
                      {spec.label}
                    </div>
                    <div className="font-semibold text-foreground">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  الوصف
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {car.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 flex items-center justify-center gap-3 bg-emerald-600 hover:shadow-[0_4px_40px_-10px_rgb(34,197,94,0.5)]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>واتساب</span>
                </a>
                <a
                  href="tel:+962795473707"
                  className="btn-outline flex-1 flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  <span>اتصل الآن</span>
                </a>
                <button className="btn-ghost flex items-center justify-center gap-2 px-4">
                  <Share2 className="w-5 h-5" />
                  <span className="hidden sm:inline">مشاركة</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Specs Table */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="heading-section text-foreground mb-8">
            المواصفات الكاملة
          </h2>
          <div className="card-luxury p-6">
            <table className="w-full">
              <tbody>
                {[
                  { label: "الماركة", value: car.brand },
                  { label: "الموديل", value: car.model },
                  { label: "سنة الصنع", value: car.year },
                  { label: "الحالة", value: car.condition },
                  { label: "المسافة المقطوعة", value: `${car.mileage.toLocaleString()} كم` },
                  { label: "نوع المحرك", value: car.engineType },
                  { label: "سعة المحرك", value: car.engineSize },
                  { label: "ناقل الحركة", value: car.transmission },
                  { label: "نوع الوقود", value: car.fuelType },
                  { label: "نوع الدفع", value: car.driveType },
                  { label: "اللون الخارجي", value: car.exteriorColor },
                  { label: "اللون الداخلي", value: car.interiorColor },
                ].map((row, index) => (
                  <tr
                    key={row.label}
                    className={index % 2 === 0 ? "bg-background/50" : ""}
                  >
                    <td className="py-4 px-6 text-muted-foreground font-medium">
                      {row.label}
                    </td>
                    <td className="py-4 px-6 text-foreground font-semibold">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CarDetailsPage;
