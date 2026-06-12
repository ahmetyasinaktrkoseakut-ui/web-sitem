"use client";

import React, { useRef, useState } from "react";

interface ThreeDCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function ThreeDCard({
  children,
  className = "",
  glowColor = "rgba(168, 85, 247, 0.18)",
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
    
    // Eğilme miktarı (maksimum 12 derece)
    const rotateX = ((centerY - y) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * 12;
    
    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    
    // Fareyi takip eden dairesel neon parlama
    setGlowStyle({
      opacity: 1,
      background: `radial-gradient(circle 200px at ${x}px ${y}px, ${glowColor}, transparent 80%)`,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlowStyle({
      opacity: 0,
      transition: "all 0.5s ease",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-all duration-200 ease-out ${className}`}
      style={{
        transform: transformStyle,
        transformStyle: "preserve-3d",
      }}
      {...props}
    >
      {/* Dinamik parlama efekti katmanı */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
        style={glowStyle}
      />
      {children}
    </div>
  );
}
