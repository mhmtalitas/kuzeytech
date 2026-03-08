import { useState } from "react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
}

const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"
      fill="currentColor"
    />
  </svg>
);

const WhatsAppButton = ({
  phoneNumber = "905438716131",
  message = "Merhaba, Uptexx hizmetleri hakkında bilgi almak istiyorum.",
  className = ""
}: WhatsAppButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 ${className}`}>
      {/* Tooltip label — slides in from right on hover */}
      <div
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white whitespace-nowrap pointer-events-none transition-all duration-300"
        style={{
          background: "linear-gradient(135deg, hsl(216 100% 12%), hsl(216 80% 18%))",
          boxShadow: "0 4px 20px hsl(216 100% 12% / 0.25)",
          border: "1px solid hsl(0 0% 100% / 0.12)",
          backdropFilter: "blur(10px)",
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "translateX(0) scale(1)" : "translateX(12px) scale(0.95)",
          fontFamily: "'DM Sans', sans-serif",
        }}
        aria-hidden="true"
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
        Şimdi Yazın — Anında Cevap
      </div>

      {/* Main button */}
      <div className="relative flex-shrink-0">
        {/* Outer pulse ring */}
        <span
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "hsl(142 70% 50% / 0.25)",
            animation: "wa-ring 2.5s ease-out infinite",
          }}
          aria-hidden="true"
        />
        {/* Second pulse ring (delayed) */}
        <span
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "hsl(142 70% 50% / 0.15)",
            animation: "wa-ring 2.5s ease-out 0.8s infinite",
          }}
          aria-hidden="true"
        />

        <button
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="WhatsApp ile iletişim — Ücretsiz Danışmanlık"
          className="relative flex items-center justify-center w-[52px] h-[52px] rounded-2xl text-white transition-all duration-300"
          style={{
            background: isHovered
              ? "linear-gradient(135deg, hsl(142 75% 38%), hsl(160 70% 35%))"
              : "linear-gradient(135deg, hsl(142 70% 45%), hsl(155 65% 40%))",
            boxShadow: isHovered
              ? "0 8px 28px hsl(142 70% 40% / 0.55), 0 0 0 1px hsl(142 60% 55% / 0.3)"
              : "0 4px 16px hsl(142 70% 40% / 0.35), 0 2px 6px hsl(0 0% 0% / 0.15)",
            transform: isHovered ? "translateY(-3px) scale(1.05)" : "translateY(0) scale(1)",
          }}
        >
          <WhatsAppIcon />
        </button>
      </div>

      {/* Inject keyframes */}
      <style>{`
        @keyframes wa-ring {
          0%   { transform: scale(1);    opacity: 0.7; }
          70%  { transform: scale(1.55); opacity: 0;   }
          100% { transform: scale(1.55); opacity: 0;   }
        }
      `}</style>
    </div>
  );
};

export default WhatsAppButton;