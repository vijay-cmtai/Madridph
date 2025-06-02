import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const HeroSection = () => {
  const textShadowStyle = { textShadow: "0 2px 10px rgba(0, 0, 0, 0.4)" };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image and Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Innovative Healthcare Solutions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-pharma-darkBlue/75 to-pharma-blue/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl lg:max-w-5xl mx-auto px-6">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-fade-in-up"
          style={{ ...textShadowStyle, animationDelay: "0.2s" }}
        >
          Pioneering Health,{" "}
          <span className="block sm:inline text-pharma-lightBlue">
            Inspiring Life.
          </span>
        </h1>
        <p
          className="text-xl md:text-2xl mb-10 text-slate-200 leading-relaxed animate-fade-in-up"
          style={{ ...textShadowStyle, animationDelay: "0.4s" }}
        >
          Luxem Pharmaceuticals is dedicated to advancing healthcare through
          cutting-edge research, innovative therapies, and a commitment to
          patient well-being.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            size="lg"
            className="bg-pharma-green hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            Discover Innovations
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10 hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            <Phone className="mr-2 h-5 w-5" />
            Contact Us
          </Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow hidden md:block">
        <ArrowRight className="h-8 w-8 text-white/70 rotate-90" />
      </div>
    </section>
  );
};

export default HeroSection;
