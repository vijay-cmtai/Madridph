import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, PackageSearch } from "lucide-react"; // Using a more relevant icon
import { useNavigate } from "react-router-dom";

const ProductsSection = () => {
  const navigate = useNavigate();

  const featuredProducts = [
    {
      name: "Lexprate-CR",
      category: "Cardiovascular",
      description:
        "Extended-release formulation for proactive cardiovascular health management.",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      slug: "lexprate-cr",
      gradient: "from-red-500 to-pink-600",
      borderColor: "border-pink-500/50",
    },
    {
      name: "Calvilux Forte",
      category: "Bone Health",
      description:
        "Advanced calcium & D3 for optimal bone density and skeletal integrity.",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      slug: "calvilux-forte",
      gradient: "from-pharma-blue to-sky-500",
      borderColor: "border-pharma-blue/50",
    },
    {
      name: "Multilux Gold",
      category: "Multivitamin",
      description:
        "Comprehensive multivitamin complex for enhanced energy and robust immunity.",
      image:
        "https://images.unsplash.com/photo-1550572017-4fae0de30b9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      slug: "multilux-gold",
      gradient: "from-pharma-green to-emerald-500",
      borderColor: "border-pharma-green/50",
    },
  ];

  const handleProductClick = (slug) => {
    navigate(`/products/${slug}`);
  };

  return (
    <section className="py-15 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-16 md:mb-20 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="inline-flex items-center justify-center bg-pharma-blue/10 text-pharma-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
            <PackageSearch className="w-5 h-5 mr-2" />
            Quality Formulations
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Explore Our{" "}
            <span className="text-pharma-blue">Featured Products</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            High-quality pharmaceutical products designed to meet diverse
            healthcare needs and improve patient outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {featuredProducts.map((product, index) => (
            <Card
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden border-2 border-transparent hover:${product.borderColor} animate-fade-in-up transform hover:-translate-y-2 cursor-pointer`}
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              onClick={() => handleProductClick(product.slug)}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-20 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>
                <div className="absolute top-4 right-4">
                  <span
                    className={`bg-gradient-to-r ${product.gradient} text-white px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-md`}
                  >
                    {product.category}
                  </span>
                </div>
              </div>
              <CardHeader className="pt-6 pb-2">
                <CardTitle className="text-xl lg:text-2xl font-semibold text-slate-800 group-hover:text-pharma-blue transition-colors duration-300">
                  {product.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-1 pb-6 flex flex-col flex-grow">
                <p className="text-sm text-slate-600 mb-6 min-h-[40px] line-clamp-2 flex-grow">
                  {product.description}
                </p>
                <Button
                  variant="link" // Changed to link for a cleaner card, main click on card
                  className="w-auto mt-auto text-pharma-blue hover:text-pharma-darkBlue font-semibold py-2 px-0 group/button self-start"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProductClick(product.slug);
                  }}
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className="text-center mt-16 md:mt-20 animate-fade-in-up"
          style={{
            animationDelay: `${0.2 + featuredProducts.length * 0.15 + 0.1}s`,
          }}
        >
          <Button
            size="lg"
            className="bg-pharma-green hover:bg-green-700 text-white px-10 py-3.5 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105"
            onClick={() => navigate("/products")}
          >
            View All Products
            <ArrowRight className="ml-2.5 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
