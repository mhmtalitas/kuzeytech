import { useRef, useEffect } from "react";

const PartnersStrip = () => {
    const logos = [
        { name: "Microsoft", text: "Microsoft Tech" },
        { name: "Azure", text: "Microsoft Azure" },
        { name: "PowerPlatform", text: "Power Platform" },
        { name: "Copilot", text: "Microsoft Copilot" },
        { name: "React", text: "React" },
        { name: "OpenAI", text: "OpenAI" },
        { name: "GoogleCloud", text: "Google Cloud" },
        { name: "AWS", text: "AWS" },
    ];

    return (
        <div className="w-full py-10 bg-secondary/30 overflow-hidden">
            <div className="container mx-auto px-4 mb-6 text-center">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                    Güçlü Teknoloji Ekosistemimiz ve Partnerlerimiz
                </p>
            </div>
            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex space-x-16 items-center">
                    {/* First set of logos */}
                    {logos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center space-x-2 opacity-70 hover:opacity-100 transition-opacity duration-300">
                            {/* Placeholder for logo icon if actual image is not available */}
                            <div className="h-8 w-8 bg-primary/20 rounded-full flex items-center justify-center">
                                <span className="text-primary font-bold text-xs">{logo.name[0]}</span>
                            </div>
                            <span className="text-lg font-bold text-foreground/80">{logo.text}</span>
                        </div>
                    ))}
                    {/* Second set of logos for seamless loop */}
                    {logos.map((logo, index) => (
                        <div key={`duplicate-${index}`} className="flex items-center justify-center space-x-2 opacity-70 hover:opacity-100 transition-opacity duration-300">
                            <div className="h-8 w-8 bg-primary/20 rounded-full flex items-center justify-center">
                                <span className="text-primary font-bold text-xs">{logo.name[0]}</span>
                            </div>
                            <span className="text-lg font-bold text-foreground/80">{logo.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PartnersStrip;
