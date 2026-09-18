"use client";

import React, { useRef, useState } from "react";

interface ThreeDCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  maxRotate?: number;
}

export function ThreeDCard({
  children,
  className = "",
  glowColor = "rgba(255, 255, 255, 0.06)",
  maxRotate = 5,
  ...props
}: ThreeDCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState("");
  const [glowStyle, setGlowStyle] = useState<React.CSSProperties>({
    opacity: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Fare imlecinin kart içindeki X ve Y pozisyonu
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Kartın merkez noktası
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Rafine, fiziksel ve elit eğilme açısı (varsayılan 5 derece)
    const rotateX = ((centerY - y) / centerY) * maxRotate;
    const rotateY = ((x - centerX) / centerX) * maxRotate;
    
    setTransformStyle(`perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(4px) scale3d(1.008, 1.008, 1.008)`);
    
    // Fareyi takip eden ince, zarif yüzey aydınlatması (specular spotlight)
    setGlowStyle({
      opacity: 1,
      background: `radial-gradient(circle 320px at ${x}px ${y}px, ${glowColor}, transparent 75%)`,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle("perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)");
    setGlowStyle({
      opacity: 0,
      transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{
        transform: transformStyle,
        transformStyle: "preserve-3d",
      }}
      {...props}
    >
      {/* Dinamik parlama efekti katmanı */}
      <div 
        className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-300"
        style={glowStyle}
      />
      {children}
    </div>
  );
}
