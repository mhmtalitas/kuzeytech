import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Hakkımızda", path: "/hakkimizda" },
    { name: "Hizmetler", path: "/hizmetler" },
    { name: "Blog", path: "/blog" },
    { name: "İletişim", path: "/iletisim" },
  ];

  const serviceLinks = [
    "Microsoft Copilot ve Yapay Zeka",
    "Microsoft Azure Danışmanlığı",
    "Power Platform Geliştirme",
    "Microsoft 365 ve Teams",
    "Web Yazılım Geliştirme",
    "Kurumsal Lisans Yönetimi",
  ];

  return (
    <footer className="footer-pro text-white relative" role="contentinfo">
      <div className="relative z-10">
        {/* Main footer grid */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand column */}
            <div className="lg:col-span-1 space-y-5">
              <Link to="/" className="flex items-center gap-2.5 group w-fit">
                <img
                  src="/uptexxlogo.png"
                  alt="Uptexx Logo"
                  className="h-14 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                />
                <span
                  className="font-bold text-xl text-white/95"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Uptexx
                </span>
              </Link>

              <p className="text-white/55 text-sm leading-relaxed max-w-xs">
                İstanbul merkezli Microsoft uzmanlığı ile yapay zeka danışmanlığı,
                Azure çözümleri ve dijital dönüşüm hizmetlerinde tüm Türkiye'nin
                güvenilir teknoloji ortağınız.
              </p>

              {/* Social */}
              <div className="flex items-center gap-3 pt-1">
                {[
                  { icon: Linkedin, label: "LinkedIn", href: "#" },
                  { icon: Twitter,  label: "Twitter",  href: "#" },
                  { icon: Facebook, label: "Facebook", href: "#" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-white/50 hover:text-white transition-all duration-200"
                    style={{
                      background: "hsl(0 0% 100% / 0.06)",
                      border: "1px solid hsl(0 0% 100% / 0.1)",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "hsl(0 0% 100% / 0.14)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "hsl(0 0% 100% / 0.06)"; }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3
                className="font-semibold text-sm tracking-widest uppercase text-white/35"
                style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.1em" }}
              >
                Hızlı Linkler
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map(link => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-150 flex items-center gap-1.5 group"
                    >
                      <span className="w-0 group-hover:w-3 h-0.5 rounded-full bg-blue-300/60 transition-all duration-200 overflow-hidden" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3
                className="font-semibold text-sm tracking-widest uppercase text-white/35"
                style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.1em" }}
              >
                Hizmetlerimiz
              </h3>
              <ul className="space-y-2.5">
                {serviceLinks.map(srv => (
                  <li key={srv}>
                    <span className="text-white/60 text-sm leading-snug block">{srv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3
                className="font-semibold text-sm tracking-widest uppercase text-white/35"
                style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.1em" }}
              >
                İletişim
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "hsl(0 0% 100% / 0.07)", border: "1px solid hsl(0 0% 100% / 0.1)" }}>
                    <MapPin size={13} className="text-blue-300/80" />
                  </div>
                  <div className="text-white/55 text-sm space-y-2.5 leading-relaxed">
                    <div>
                      <span className="font-semibold text-white/75 block text-xs uppercase tracking-wide mb-0.5">Merkez Ofis</span>
                      Cumhuriyet Mah. Kazım Karabekir Cad. No:2/28 61800 Beşikdüzü/Trabzon
                    </div>
                    <div>
                      <span className="font-semibold text-white/75 block text-xs uppercase tracking-wide mb-0.5">İstanbul Şube</span>
                      Fatih Sultan Mehmet Mah. Depoyolu Sk. No:16 İç Kapı no:58, One Block Plaza 34774 Ümraniye/İstanbul
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
                    style={{ background: "hsl(0 0% 100% / 0.07)", border: "1px solid hsl(0 0% 100% / 0.1)" }}>
                    <Mail size={13} className="text-blue-300/80" />
                  </div>
                  <a href="mailto:info@uptexx.com" className="text-white/55 hover:text-white text-sm transition-colors">
                    info@uptexx.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
                    style={{ background: "hsl(0 0% 100% / 0.07)", border: "1px solid hsl(0 0% 100% / 0.1)" }}>
                    <Phone size={13} className="text-blue-300/80" />
                  </div>
                  <a href="tel:+905438716131" className="text-white/55 hover:text-white text-sm transition-colors">
                    0543 871 61 31
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t"
          style={{ borderColor: "hsl(0 0% 100% / 0.08)" }}
        >
          <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/35 text-xs">
              © 2025 Uptexx. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;