import { Link } from "react-router-dom";
import { ChevronLeft, Calendar, Gauge } from "lucide-react";

// Mock data for featured cars
const featuredCars = [
  {
    id: 1,
    brand: "Mercedes-Benz",
    model: "S-Class S500",
    year: 2024,
    price: 185000,
    mileage: 0,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop",
    status: "available",
  },
  {
    id: 2,
    brand: "BMW",
    model: "X7 M60i",
    year: 2024,
    price: 165000,
    mileage: 5000,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop",
    status: "available",
  },
  {
    id: 3,
    brand: "Porsche",
    model: "Cayenne Turbo GT",
    year: 2023,
    price: 195000,
    mileage: 12000,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
    status: "reserved",
  },
  {
    id: 4,
    brand: "Range Rover",
    model: "Sport SVR",
    year: 2024,
    price: 175000,
    mileage: 0,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop",
    status: "available",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "available":
      return <span className="badge-available px-3 py-1 rounded-full text-xs font-semibold">متوفرة</span>;
    case "reserved":
      return <span className="badge-reserved px-3 py-1 rounded-full text-xs font-semibold">محجوزة</span>;
    case "sold":
      return <span className="badge-sold px-3 py-1 rounded-full text-xs font-semibold">مباعة</span>;
    default:
      return null;
  }
};

const FeaturedCarsSection = () => {
  return (
    <section className="section-luxury bg-secondary/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              معروضاتنا
            </span>
            <h2 className="heading-section text-foreground mb-0">
              سيارات مميزة
            </h2>
          </div>
          <Link
            to="/cars"
            className="btn-ghost inline-flex items-center gap-2 text-primary"
          >
            عرض جميع السيارات
            <ChevronLeft className="w-5 h-5" />
          </Link>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCars.map((car, index) => (
            <Link
              key={car.id}
              to={`/cars/${car.id}`}
              className="card-luxury group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  {getStatusBadge(car.status)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Brand & Model */}
                <div className="mb-3">
                  <div className="text-sm text-primary font-medium mb-1">
                    {car.brand}
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {car.model}
                  </h3>
                </div>

                {/* Specs */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{car.year}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Gauge className="w-4 h-4" />
                    <span>{car.mileage.toLocaleString()} كم</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="text-xl font-bold text-gradient">
                    ${car.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    عرض التفاصيل
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarsSection;
