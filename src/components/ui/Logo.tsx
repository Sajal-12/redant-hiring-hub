interface LogoProps {
  className?: string;
}

const Logo = ({ className = "w-10 h-10" }: LogoProps) => {
  return (
    <div className={`relative ${className}`}>
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
  );
};

export default Logo;
