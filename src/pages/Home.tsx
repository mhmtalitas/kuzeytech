import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, Cloud, Shield, BarChart3, Key, Users, Wrench, Smartphone, ArrowRight, ChevronRight } from "lucide-react";
import CounterAnimation from "@/components/CounterAnimation";
import SEO from "@/components/SEO";

const services = [
  {
    icon: Key,
    title: "Kurumsal Lisans ve Microsoft 365 Yönetimi",
    description: "Microsoft Office, Azure lisanslarınızı optimize edin. Kurumsal e-posta güvenliği ve lisans yönetimi danışmanlığı ile maliyetlerinizi düşürün.",
  },
  {
    icon: Users,
    title: "Microsoft Teams ve Modern Workplace",
    description: "Microsoft 365, Teams entegrasyonu, SharePoint ve modern workplace çözümleri ile ekiplerinizin verimliliğini artırın. Hibrit çalışma modelleri için optimize edilmiş sistemler.",
  },
  {
    icon: Wrench,
    title: "Microsoft Azure Danışmanlığı ve Teknik Destek",
    description: "7/24 Microsoft Azure teknik destek, bulut bilişim çözümleri ve sistem bakım hizmetleri ile kesintisiz operasyonlar sağlayın. Siber güvenlik yazılımı entegrasyonu.",
  },
  {
    icon: Cloud,
    title: "Veri Yönetimi ve Yedekleme Çözümleri",
    description: "Veeam, Acronis ile güvenilir yedekleme ve felaket kurtarma planları. Veri analizi yazılımı ve raporlama sistemleri ile iş sürekliliğinizi sağlayın.",
  },
  {
    icon: Brain,
    title: "Yapay Zeka Danışmanlığı ve Microsoft Copilot",
    description: "Microsoft Copilot entegrasyonu, AI Agents geliştirme ve yapay zeka danışmanlığı hizmetleri. İşletmenize özel makine öğrenmesi modelleri ve otomasyon çözümleri.",
  },
  {
    icon: Smartphone,
    title: "Web Yazılım ve Mobil Uygulama Geliştirme",
    description: "Özel yazılım çözümleri, CRM yazılımı, ERP yazılımı ve e-ticaret yazılımı geliştirme. React, Flutter ile modern mobil uygulamalar ve kurumsal web sistemleri.",
  },
];

const clients = [
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Microsoft_logo_-_2012_%28vertical%29.svg" },
  { name: "Acronis",   logo: "/acronis.png" },
  { name: "Trend Micro", logo: "/trendmicro.png" },
  { name: "Veeam",    logo: "/veeam.png" },
  { name: "Lenovo",   logo: "/lenovo.png" },
  { name: "Asus",     logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg" },
  { name: "HP",       logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
  { name: "SAP",      logo: "/sap.png" },
  { name: "Hikvision", logo: "/hikvision.png" },
  { name: "TP-Link",  logo: "/tplink.png" },
];

const stats = [
  { value: 50, suffix: "+", label: "Tamamlanan Proje" },
  { value: 25, suffix: "+", label: "Mutlu Müşteri" },
  { value: 2,  suffix: "+", label: "Yıllık Deneyim" },
  { value: 24, suffix: "/7", label: "Teknik Destek" },
];

const Home = () => {
  return (
    <div>
      <SEO
        title="Uptexx - Microsoft Uzmanlığı, Yapay Zeka ve Dijital Dönüşüm | İstanbul & Tüm Türkiye"
        description="İstanbul merkezli Uptexx, tüm Türkiye'ye Microsoft Azure, Copilot, Power Platform ve yapay zeka danışmanlığı hizmetleri sunar. Dijital dönüşüm ortağınız."
        keywords="microsoft uzmanlığı, yapay zeka danışmanlığı, istanbul teknoloji, türkiye yazılım, dijital dönüşüm, azure, copilot, power platform"
        canonical="/"
      />

      {/* --------------------------------------------------------
          HERO SECTION
      -------------------------------------------------------- */}
      <section className="hero-bg h-screen flex flex-col justify-center items-center relative overflow-hidden" id="hero">
        {/* Ambient glow */}
        <div className="hero-glow" aria-hidden="true" />

        {/* Floating tech orbit decoration */}
        <div
          className="absolute top-16 right-[8%] w-24 h-24 opacity-10 hidden xl:block"
          aria-hidden="true"
          style={{ animation: "orbit 12s linear infinite" }}
        >
          <div className="w-3 h-3 rounded-full bg-blue-300" />
        </div>

        <div className="container mx-auto px-6 relative z-10 w-full">
          <div className="max-w-5xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-5 animate-fade-in-down">
              <span className="tech-chip tech-chip-inverted">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
                IT & Dijital Dönüşüm
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-white mb-5 leading-none tracking-tight animate-fade-in-up"
              style={{ fontFamily: "'Syne', sans-serif", animationDelay: "80ms" }}
            >
              Geleceği Şekillendiren
              <span
                className="block mt-1"
                style={{
                  background: "linear-gradient(90deg, hsl(192 90% 72%), hsl(210 80% 80%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Teknoloji Çözümleri
              </span>
            </h1>

            {/* Sub */}
            <p
              className="text-base md:text-lg text-blue-100/80 max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "160ms" }}
            >
              Microsoft Azure, Copilot, Power Platform, yapay zeka danışmanlığı ve web yazılım geliştirme
              hizmetleriyle işletmenizin değişim yönetimi ve veri yönetimi ihtiyaçlarını karşılıyoruz.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 items-center justify-center animate-fade-in-up"
              style={{ animationDelay: "240ms" }}
            >
              <Link
                to="/hakkimizda"
                id="hero-cta-about"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                style={{
                  background: "hsl(0 0% 100% / 0.12)",
                  border: "1.5px solid hsl(0 0% 100% / 0.22)",
                  backdropFilter: "blur(8px)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "hsl(0 0% 100% / 0.2)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "hsl(0 0% 100% / 0.12)";
                }}
              >
                Bizi Tanıyın
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/hizmetler"
                id="hero-cta-services"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-[hsl(216,100%,12%)] bg-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                style={{ boxShadow: "0 2px 8px hsl(216 100% 12% / 0.18)" }}
              >
                Hizmetlerimiz
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

          {/* ---- Bottom wave fade --- */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            aria-hidden="true"
            style={{ zIndex: 5 }}
          >
            <svg
              viewBox="0 0 1440 80"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="w-full"
              style={{ display: "block", height: 80 }}
            >
              <defs>
                <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(220, 20%, 97%)" stopOpacity="0" />
                  <stop offset="100%" stopColor="hsl(220, 20%, 97%)" stopOpacity="1" />
                </linearGradient>
              </defs>
              <path
                d="M0,40 C240,80 480,0 720,40 C960,80 1200,20 1440,50 L1440,80 L0,80 Z"
                fill="url(#waveGrad)"
              />
              <path
                d="M0,55 C360,20 720,80 1080,40 C1260,20 1380,65 1440,60 L1440,80 L0,80 Z"
                fill="hsl(220, 20%, 97%)"
                fillOpacity="0.7"
              />
            </svg>
          </div>
        </section>

      {/* --------------------------------------------------------
          SERVICES SECTION
      -------------------------------------------------------- */}
      <section className="py-24 bg-[hsl(220,20%,97%)]" id="services">
        <div className="container mx-auto px-6">
          {/* Section header */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="section-eyebrow justify-center mb-4">Hizmetlerimiz</div>
            <h2
              className="text-3xl md:text-4xl font-bold text-[hsl(216,100%,12%)] mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Kurumsal Yazılım Çözümleri ve İş Uygulamaları
            </h2>
            <p className="text-[hsl(216,20%,42%)] text-lg leading-relaxed">
              Microsoft teknolojileri ve Ar-Ge gücümüzle işletmenizin dijital dönüşümünü,
              raporlama sistemlerini ve kurumsal lisans yönetiminizi optimize ediyoruz
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <article
                key={index}
                className="card-pro p-7 animate-fade-in-up"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="service-icon-wrap mb-5">
                  <service.icon className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <h3
                  className="font-bold text-[hsl(216,100%,12%)] text-base mb-2.5 leading-snug"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-[hsl(216,20%,45%)] text-sm leading-relaxed">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <Link
              to="/hizmetler"
              id="services-view-all"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold border-[1.5px] border-[hsl(216,100%,12%,0.22)] text-[hsl(216,100%,12%)] hover:bg-[hsl(216,100%,12%,0.04)] hover:border-[hsl(216,100%,12%,0.4)] transition-all duration-200"
            >
              Tüm Hizmetleri Görüntüle
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------
          STATS SECTION
      -------------------------------------------------------- */}
      <section className="py-20 bg-white border-y border-[hsl(213,20%,90%)]" id="stats">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card animate-fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="stat-number">
                  <CounterAnimation targetValue={stat.value} duration={2000} suffix={stat.suffix} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------
          PARTNERS / LOGOS STRIP
      -------------------------------------------------------- */}
      <section className="py-16 bg-[hsl(220,20%,97%)]" id="partners">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="section-eyebrow justify-center mb-3">İş Ortaklarımız</div>
            <h2
              className="text-2xl md:text-3xl font-bold text-[hsl(216,100%,12%)] mb-2"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Güvenilen İş Ortağınız
            </h2>
            <p className="text-[hsl(216,20%,48%)] text-sm">
              Sektöründe lider firmalarla başarılı projeler gerçekleştiriyoruz
            </p>
          </div>

          <div className="marquee-wrapper">
            <div className="flex animate-marquee-scroll" aria-label="İş ortakları logoları">
              {[...clients, ...clients].map((client, index) => (
                <div key={index} className="logo-strip-item">
                  <div className="logo-strip-inner">
                    <img
                      src={client.logo}
                      alt={`${client.name} Logo`}
                      className="h-full object-contain max-h-10"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------
          CTA SECTION
      -------------------------------------------------------- */}
      <section className="py-20 bg-white" id="cta">
        <div className="container mx-auto px-6">
          <div className="cta-banner px-8 py-16 md:py-20 text-center relative overflow-hidden">
            {/* Decorative orbs */}
            <div
              className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, hsl(216 80% 30% / 0.25) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 left-0 w-56 h-56 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, hsl(192 90% 55% / 0.1) 0%, transparent 70%)", transform: "translate(-30%, 30%)" }}
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="tech-chip tech-chip-inverted inline-flex mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
                Ücretsiz Danışmanlık
              </div>

              <h2
                className="text-3xl md:text-4xl font-extrabold text-white mb-4"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Projenizi Hayata Geçirmeye Hazır mısınız?
              </h2>
              <p className="text-blue-100/75 text-lg mb-10 leading-relaxed">
                Uzman ekibimizle birlikte işletmenizin dijital dönüşümünü başlatın ve rekabet avantajı kazanın.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/iletisim"
                  id="cta-contact-link"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-[hsl(216,100%,12%)] bg-white transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
                  style={{ boxShadow: "0 4px 16px hsl(0 0% 0% / 0.15)" }}
                >
                  Ücretsiz Danışmanlık Alın
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/hizmetler"
                  id="cta-services-link"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                  style={{
                    background: "hsl(0 0% 100% / 0.1)",
                    border: "1.5px solid hsl(0 0% 100% / 0.25)",
                    backdropFilter: "blur(8px)",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "hsl(0 0% 100% / 0.18)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "hsl(0 0% 100% / 0.1)"; }}
                >
                  Hizmetlerimiz
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;