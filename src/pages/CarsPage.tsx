import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Gauge, Search, SlidersHorizontal, X } from "lucide-react";
import Layout from "@/components/Layout";

// Mock data
const allCars = [
  {
    id: 1,
    brand: "Mercedes-Benz",
    model: "S-Class S500",
    year: 2024,
    price: 185000,
    mileage: 0,
    condition: "new",
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
    condition: "used",
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
    condition: "used",
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
    condition: "new",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop",
    status: "available",
  },
  {
    id: 5,
    brand: "Audi",
    model: "RS Q8",
    year: 2023,
    price: 155000,
    mileage: 8000,
    condition: "used",
    image: "https://images.unsplash.com/photo-1606664927561-726d23b15c2c?w=600&h=400&fit=crop",
    status: "available",
  },
  {
    id: 6,
    brand: "Mercedes-Benz",
    model: "AMG GT 63",
    year: 2024,
    price: 210000,
    mileage: 0,
    condition: "new",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=600&h=400&fit=crop",
    status: "available",
  },
  {
    id: 7,
    brand: "BMW",
    model: "M8 Competition",
    year: 2023,
    price: 175000,
    mileage: 15000,
    condition: "used",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&h=400&fit=crop",
    status: "sold",
  },
  {
    id: 8,
    brand: "Lexus",
    model: "LX 600",
    year: 2024,
    price: 145000,
    mileage: 0,
    condition: "new",
    image: "https://images.unsplash.com/photo-1619976215249-d6e9d7ff3a4f?w=600&h=400&fit=crop",
    status: "available",
  },
];

const brands = ["الكل", "Mercedes-Benz", "BMW", "Porsche", "Range Rover", "Audi", "Lexus"];
const priceRanges = [
  { label: "الكل", min: 0, max: Infinity },
  { label: "أقل من 150,000$", min: 0, max: 150000 },
  { label: "150,000$ - 180,000$", min: 150000, max: 180000 },
  { label: "أكثر من 180,000$", min: 180000, max: Infinity },
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

const CarsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("الكل");
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredCars = allCars.filter((car) => {
    const matchesSearch =
      car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === "الكل" || car.brand === selectedBrand;
    const matchesPrice =
      car.price >= selectedPriceRange.min && car.price <= selectedPriceRange.max;

    return matchesSearch && matchesBrand && matchesPrice;
  });

  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="heading-display text-foreground text-center mb-4">
            <span className="text-gradient">معرض السيارات</span>
          </h1>
          <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto">
            تصفح مجموعتنا الحصرية من السيارات الفاخرة والحديثة
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 border-b border-border sticky top-[72px] z-40 glass">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="ابحث عن سيارة..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 pr-12 pl-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Filter Toggle - Mobile */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden btn-outline flex items-center gap-2 py-3"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>الفلاتر</span>
            </button>

            {/* Desktop Filters */}
            <div className="hidden md:flex items-center gap-4">
              {/* Brand Filter */}
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="py-3 px-4 bg-card border border-border rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer"
              >
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>

              {/* Price Filter */}
              <select
                value={selectedPriceRange.label}
                onChange={(e) =>
                  setSelectedPriceRange(
                    priceRanges.find((r) => r.label === e.target.value) || priceRanges[0]
                  )
                }
                className="py-3 px-4 bg-card border border-border rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer"
              >
                {priceRanges.map((range) => (
                  <option key={range.label} value={range.label}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile Filters Panel */}
          {showFilters && (
            <div className="md:hidden mt-4 p-4 bg-card border border-border rounded-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold">الفلاتر</span>
                <button onClick={() => setShowFilters(false)}>
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">الماركة</label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full py-3 px-4 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:border-primary"
                >
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">السعر</label>
                <select
                  value={selectedPriceRange.label}
                  onChange={(e) =>
                    setSelectedPriceRange(
                      priceRanges.find((r) => r.label === e.target.value) || priceRanges[0]
                    )
                  }
                  className="w-full py-3 px-4 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:border-primary"
                >
                  {priceRanges.map((range) => (
                    <option key={range.label} value={range.label}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Cars Grid */}
      <section className="section-luxury">
        <div className="container mx-auto">
          {/* Results Count */}
          <div className="mb-8">
            <span className="text-muted-foreground">
              عرض {filteredCars.length} سيارة
            </span>
          </div>

          {filteredCars.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🚗</div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                لم يتم العثور على نتائج
              </h3>
              <p className="text-muted-foreground">
                جرب تغيير معايير البحث
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCars.map((car) => (
                <Link key={car.id} to={`/cars/${car.id}`} className="card-luxury group">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={car.image}
                      alt={`${car.brand} ${car.model}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      {getStatusBadge(car.status)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <div className="text-sm text-primary font-medium mb-1">
                        {car.brand}
                      </div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {car.model}
                      </h3>
                    </div>

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
          )}
        </div>
      </section>
    </Layout>
  );
};

export default CarsPage;
