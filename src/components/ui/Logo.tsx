interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon";
}

const Logo = ({ className = "", size = "md", variant = "full" }: LogoProps) => {
  const sizes = {
    sm: { icon: "w-8 h-8", text: "text-lg" },
    md: { icon: "w-10 h-10", text: "text-xl" },
    lg: { icon: "w-14 h-14", text: "text-2xl" },
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Ant-inspired Logo Icon */}
      <div className={`${sizes[size].icon} relative`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Background Circle */}
          <circle cx="50" cy="50" r="48" fill="hsl(var(--primary))" />
          
          {/* Ant Body - Stylized */}
          <ellipse cx="50" cy="65" rx="18" ry="14" fill="white" />
          <ellipse cx="50" cy="45" rx="14" ry="12" fill="white" />
          <circle cx="50" cy="28" r="10" fill="white" />
          
          {/* Ant Antennae */}
          <path
            d="M44 22 Q38 12 32 10"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M56 22 Q62 12 68 10"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          
          {/* Ant Legs */}
          <path
            d="M35 58 Q25 55 20 48"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M65 58 Q75 55 80 48"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M34 68 Q22 70 18 78"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M66 68 Q78 70 82 78"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          
          {/* Accent dots for eyes */}
          <circle cx="45" cy="26" r="2" fill="hsl(var(--primary))" />
          <circle cx="55" cy="26" r="2" fill="hsl(var(--primary))" />
        </svg>
      </div>
      
      {variant === "full" && (
        <span className={`font-bold ${sizes[size].text} text-foreground`}>
          Red<span className="text-primary">Ant</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
