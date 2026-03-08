import { Target, Award, Heart, Users, ArrowRight } from "lucide-react";
import CounterAnimation from "@/components/CounterAnimation";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Misyonumuz",
      description: "İşletmelerin dijital dönüşümünde güvenilir teknoloji ortağı olmak ve yenilikçi çözümlerle değer yaratmak.",
    },
    {
      icon: Award,
      title: "Vizyonumuz",
      description: "Teknoloji alanında öncü bir şirket olarak, Türkiye'nin dijital geleceğine öncülük etmek.",
    },
    {
      icon: Heart,
      title: "Değerlerimiz",
      description: "Müşteri odaklılık, kalite, güvenilirlik ve sürekli gelişim ilkelerini benimser, etik değerlere bağlı kalırız.",
    },
    {
      icon: Users,
      title: "Ekibimiz",
      description: "Alanında uzman, deneyimli ve sürekli kendini geliştiren profesyonel ekibimizle hizmet veriyoruz.",
    },
  ];

  const team = [
    { name: "Serkan Günaçtı",  position: "Kurucu & CEO",               description: "15 Yıllık IT Deneyimi",                                  initials: "SG" },
    { name: "Mehmet Ali Taş",  position: "Yazılım Geliştirici",         description: "10 Yıl Deneyimli Yazılım Geliştirici",                   initials: "MT" },
    { name: "Mehmet Başkan",   position: "Teknik Operasyon Müdürü",    description: "Teknik Operasyon Yönetimi ve Sistem Uzmanı",             initials: "MB" },
    { name: "Osman Gülay",     position: "Satış Yöneticisi",            description: "Müşteri İlişkileri ve Satış Süreçleri Uzmanı",           initials: "OG" },
  ];

  const achievements = [
    { value: 50,  suffix: "+",  label: "Tamamlanan Projeler" },
    { value: 25,  suffix: "+",  label: "Aktif Müşteriler" },
    { value: 5,   suffix: "+",  label: "Ekip Üyeleri" },
    { value: 99,  suffix: "%",  label: "Müşteri Memnuniyeti" },
  ];

  const whyUs = [
    { number: "2+",    heading: "Yıllık Deneyim",     text: "Sektördeki derin deneyimimizle güvenilir çözümler sunuyoruz" },
    { number: "24/7",  heading: "Teknik Destek",       text: "Kesintisiz teknik destek ile projelerinizin sürekliliğini sağlıyoruz" },
    { number: "100%",  heading: "Müşteri Odaklılık",   text: "Her projede müşteri ihtiyaçlarını önceleyerek özel çözümler geliştiriyoruz" },
  ];

  return (
    <div className="min-h-screen bg-[hsl(220,20%,97%)]">
      <SEO
        title="Hakkımızda - Uptexx Teknoloji | İstanbul & Türkiye"
        description="2025 yılında İstanbul'da kurulan Uptexx, tüm Türkiye'ye Microsoft ve yapay zeka çözümleri sunmaktadır. Vizyonumuz, değerlerimiz ve uzman ekibimizle tanışın."
        keywords="uptexx hakkında, istanbul teknoloji şirketi, microsoft partner türkiye, yapay zeka şirketi, kurumsal teknoloji, dijital dönüşüm uzmanları"
        canonical="/hakkimizda"
      />

      {/* ---- Hero ---- */}
      <section className="hero-bg pt-40 pb-24 relative overflow-hidden" id="about-hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex mb-6 animate-fade-in-down">
            <span className="tech-chip tech-chip-inverted">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
              Hakkımızda
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 animate-fade-in-up"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Uptexx Hakkında
          </h1>
          <p className="text-xl text-blue-100/75 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            2025 yılında İstanbul'da kurulan Uptexx, teknoloji alanında yenilikçi çözümler üreten
            dinamik bir şirkettir. Müşterilerimizin dijital dönüşüm yolculuğunda güvenilir ortağı olmanın
            gururunu yaşıyoruz.
          </p>
        </div>
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true" style={{ zIndex: 5 }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full" style={{ display: "block", height: 80 }}>
            <defs>
              <linearGradient id="waveGradAbout" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="100%" stopColor="white" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,20 1440,50 L1440,80 L0,80 Z" fill="url(#waveGradAbout)" />
            <path d="M0,55 C360,20 720,80 1080,40 C1260,20 1380,65 1440,60 L1440,80 L0,80 Z" fill="white" fillOpacity="0.7" />
          </svg>
        </div>
      </section>

      {/* ---- Story + Achievements ---- */}
      <section className="py-24 bg-white" id="story">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Story text */}
            <div className="animate-slide-in-left">
              <div className="section-eyebrow mb-4">Hikayemiz</div>
              <h2
                className="text-3xl md:text-4xl font-bold text-[hsl(216,100%,12%)] mb-6"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Hikayemiz
              </h2>
              <div className="space-y-4 text-[hsl(216,20%,42%)] leading-relaxed">
                <p>
                  Uptexx, teknolojinin hızla geliştiği bir dönemde, işletmelerin bu değişime
                  ayak uydurmasına yardımcı olmak amacıyla kuruldu. Marmara'nın güçlü teknoloji
                  ekosisteminden yola çıkarak, önce yerel sonra ulusal ölçekte hizmet vermeye başladık.
                </p>
                <p>
                  Bugün, yapay zekadan bulut çözümlerine, web geliştirmeden mobil uygulamalara
                  kadar geniş bir yelpazede hizmet sunuyoruz. Her projede müşteri memnuniyetini
                  ön planda tutarak, uzun vadeli iş ortaklıkları kurmayı hedefliyoruz.
                </p>
                <p>
                  Sürekli öğrenme ve gelişim kültürümüzle, sektördeki en güncel teknolojileri
                  takip ediyor ve müşterilerimize en iyi çözümleri sunuyoruz.
                </p>
              </div>

              <Link
                to="/hizmetler"
                id="about-services-link"
                className="inline-flex items-center gap-2.5 mt-8 px-7 py-3.5 rounded-xl text-sm font-semibold text-white"
                style={{ background: "linear-gradient(135deg, hsl(216 100% 14%), hsl(216 90% 20%))", boxShadow: "0 2px 10px hsl(216 100% 12% / 0.22)" }}
              >
                Hizmetlerimizi Keşfedin
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Achievements card */}
            <div
              className="rounded-2xl p-8 relative overflow-hidden animate-slide-in-right"
              style={{ background: "linear-gradient(135deg, hsl(216 100% 11%), hsl(216 80% 18%))" }}
            >
              {/* Grid bg */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "linear-gradient(hsl(214 50% 65% / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(214 50% 65% / 0.08) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
                aria-hidden="true"
              />
              <div className="relative z-10">
                <h3
                  className="text-2xl font-bold text-white mb-8"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Başarılarımız
                </h3>
                <div className="grid grid-cols-2 gap-5">
                  {achievements.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl p-5"
                      style={{ background: "hsl(0 0% 100% / 0.07)", border: "1px solid hsl(0 0% 100% / 0.1)" }}
                    >
                      <div
                        className="text-3xl font-extrabold text-white mb-1"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        <CounterAnimation targetValue={item.value} duration={2000} suffix={item.suffix} />
                      </div>
                      <div className="text-blue-200/70 text-xs font-medium">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Values ---- */}
      <section className="py-24 bg-[hsl(220,20%,97%)]" id="values">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-eyebrow justify-center mb-4">Değerlerimiz</div>
            <h2
              className="text-3xl md:text-4xl font-bold text-[hsl(216,100%,12%)]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Değerlerimiz ve Yaklaşımımız
            </h2>
            <p className="text-[hsl(216,20%,48%)] mt-3 max-w-xl mx-auto">
              Çalışmalarımızı yönlendiren temel değerler ve iş yapış şeklimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <article
                key={index}
                className="card-pro p-7 animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="service-icon-wrap mb-5">
                  <value.icon className="h-5 w-5 text-white" />
                </div>
                <h3
                  className="font-bold text-[hsl(216,100%,12%)] text-lg mb-2.5"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {value.title}
                </h3>
                <p className="text-[hsl(216,20%,45%)] text-sm leading-relaxed">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Team ---- */}
      <section className="py-24 bg-white" id="team">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-eyebrow justify-center mb-4">Ekibimiz</div>
            <h2
              className="text-3xl md:text-4xl font-bold text-[hsl(216,100%,12%)]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Ekibimiz
            </h2>
            <p className="text-[hsl(216,20%,48%)] mt-3 max-w-xl mx-auto">
              Alanlarında uzman, deneyimli ve tutkulu profesyonellerden oluşan ekibimiz
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <article
                key={index}
                className="team-card animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="team-avatar mb-4">
                  <span
                    className="font-bold text-base text-white"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {member.initials}
                  </span>
                </div>
                <h3
                  className="font-bold text-[hsl(216,100%,12%)] text-sm mb-1"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-xs font-semibold mb-2.5"
                  style={{ color: "hsl(216 70% 35%)" }}
                >
                  {member.position}
                </p>
                <p className="text-[hsl(216,20%,50%)] text-xs leading-relaxed">{member.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Why Us ---- */}
      <section className="py-20 bg-[hsl(220,20%,97%)]" id="why-us">
        <div className="container mx-auto px-6">
          <div
            className="rounded-2xl px-8 py-14 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(216 100% 11%), hsl(216 80% 18%))",
            }}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "linear-gradient(hsl(214 50% 65% / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(214 50% 65% / 0.08) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="tech-chip tech-chip-inverted inline-flex mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
                  Neden Biz
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-white"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Neden Uptexx?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {whyUs.map((item, i) => (
                  <div
                    key={i}
                    className="text-center rounded-xl p-7"
                    style={{ background: "hsl(0 0% 100% / 0.06)", border: "1px solid hsl(0 0% 100% / 0.1)" }}
                  >
                    <div
                      className="text-4xl font-extrabold text-white mb-2"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {item.number}
                    </div>
                    <div className="font-semibold text-blue-100 text-sm mb-2">{item.heading}</div>
                    <p className="text-blue-200/60 text-xs leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;