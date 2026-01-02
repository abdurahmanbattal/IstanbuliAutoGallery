import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center px-4">
          {/* 404 Display */}
          <div className="text-[150px] md:text-[200px] font-black text-gradient leading-none mb-4">
            404
          </div>
          
          {/* Message */}
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            الصفحة غير موجودة
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="btn-primary inline-flex items-center gap-2">
              <Home className="w-5 h-5" />
              <span>العودة للرئيسية</span>
            </Link>
            <Link to="/cars" className="btn-outline inline-flex items-center gap-2">
              <span>تصفح السيارات</span>
              <ArrowRight className="w-5 h-5 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
