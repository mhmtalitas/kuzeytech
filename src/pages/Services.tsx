import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Brain, Settings, Cloud, Shield, BarChart3, Key,
  Users, Smartphone, Globe, ShoppingCart, Monitor, Wrench, ArrowRight, Check
} from "lucide-react";
import SEO from "@/components/SEO";

const Services = () => {
  const services = [
    {
      icon: Key,
      title: "Kurumsal Lisans Yönetimi ve Microsoft 365 Danışmanlığı",
      description: "Microsoft Office, Azure, Power Platform lisanslarınızı optimize edin. Kurumsal e-posta güvenliği ve Microsoft entegrasyonu.",
      features: [
        "Microsoft 365 kurulum ve yönetimi",
        "Exchange Server ve Exchange Online çözümleri",
        "Lisans optimizasyonu ve maliyet danışmanlığı",
        "E-posta güvenliği ve Defender implementasyonu",
        "Compliance, arşivleme ve veri yönetimi",
        "Hybrid exchange yapılandırması ve migrasyonu",
      ],
    },
    {
      icon: Users,
      title: "Microsoft Teams ve Modern Workplace Çözümleri",
      description: "Microsoft Teams, SharePoint entegrasyonu ve hibrit çalışma modelleri. Modern workplace dönüşümünde uzman danışmanlık.",
      features: [
        "Microsoft 365 ve Teams kurulumu ve özelleştirme",
        "Teams entegrasyonu, bot geliştirme ve özelleştirme",
        "Exchange Online ve Outlook entegrasyonu",
        "SharePoint, OneDrive ve Power Platform entegrasyonu",
        "Microsoft Intune cihaz yönetimi",
        "Değişim yönetimi ve kullanıcı eğitimi programları",
      ],
    },
    {
      icon: Wrench,
      title: "Microsoft Azure Danışmanlığı ve Teknik Destek",
      description: "7/24 Microsoft Azure teknik destek, bulut bilişim çözümleri ve hibrit altyapı yönetimi hizmetleri.",
      features: [
        "Azure sistem izleme, bakım ve optimizasyon",
        "Azure Security Center ve güvenlik güncellemeleri",
        "Bulut performans optimizasyonu",
        "Azure DevOps ve CI/CD pipeline kurulumu",
        "Microsoft sertifikalı uzmanlardan kullanıcı eğitimleri",
        "Proaktif Azure sistem yönetimi ve izleme",
      ],
    },
    {
      icon: Key,
      title: "Veri Yönetimi ve Yedekleme Çözümleri",
      description: "Veeam, Acronis entegrasyonu ile Azure Backup, veri analizi yazılımı ve raporlama sistemleri. İş sürekliliği planlaması.",
      features: [
        "Azure Backup ve hibrit yedekleme çözümleri",
        "Veeam Backup & Replication implementasyonu",
        "Site Recovery ve disaster recovery planlaması",
        "Veri replikasyonu ve senkronizasyon",
        "İş sürekliliği ve felaket kurtarma planlaması",
        "Recovery time optimization ve test senaryoları",
      ],
    },
    {
      icon: Cloud,
      title: "Microsoft Azure ve Bulut Bilişim Çözümleri",
      description: "Azure bulut platformu migration, hibrit altyapı kurulumu ve siber güvenlik yazılımı entegrasyonu.",
      features: [
        "Azure Cloud migration ve modernizasyon hizmetleri",
        "Hibrit bulut çözümleri ve on-premise entegrasyonu",
        "Azure altyapı yönetimi ve cost optimization",
        "Azure Security Center ve siber güvenlik",
        "Azure Monitor ile performans izleme ve raporlama",
        "24/7 Azure altyapı destek ve danışmanlık hizmetleri",
      ],
    },
    {
      icon: Brain,
      title: "Yapay Zeka Danışmanlığı ve Microsoft Copilot",
      description: "Microsoft Copilot entegrasyonu, AI Agents geliştirme ve yapay zeka danışmanlığı. Özel makine öğrenmesi modelleri.",
      features: [
        "Makine öğrenmesi algoritmaları",
        "Doğal dil işleme",
        "Görüntü tanıma ve analiz",
        "Tahmine dayalı analitik",
        "Chatbot ve sanal asistanlar",
        "Özel AI modelleri geliştirme",
      ],
    },
    {
      icon: Globe,
      title: "Web Yazılım Geliştirme ve SEO Hizmetleri",
      description: "Modern, responsive kurumsal web siteleri, e-ticaret yazılımı ve Kurumsal SEO hizmetleri. Özel yazılım çözümleri geliştirme.",
      features: [
        "Kurumsal web yazılım geliştirme ve CRM yazılımı",
        "React, Next.js, Angular ile modern web uygulamaları",
        "WordPress, custom CMS çözümleri",
        "Kurumsal SEO danışmanlığı ve dijital pazarlama SEO",
        "Web performans optimizasyonu ve analiz",
        "Progressive Web Apps (PWA) ve API geliştirme",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobil Uygulama Geliştirme",
      description: "React Native ve Flutter ile iOS/Android mobil uygulamalar. Cross-platform mobil çözümler ve native uygulama geliştirme.",
      features: [
        "iOS ve Android mobil uygulamalar",
        "React Native cross-platform geliştirme",
        "Flutter hybrid uygulamaları",
        "Native Swift ve Kotlin geliştirme",
        "App Store ve Google Play optimizasyonu",
        "Mobil uygulama bakım ve güncellemeleri",
      ],
    },
    {
      icon: Settings,
      title: "Microsoft Power Platform Geliştirme",
      description: "Power Apps, Power Automate, Power BI ve PowerApps ile düşük kodlu kurumsal uygulamalar ve otomasyon çözümleri.",
      features: [
        "PowerApps ile özel iş uygulamaları geliştirme",
        "Power Automate ile iş süreçleri otomasyonu",
        "Power BI ile veri görselleştirme ve raporlama",
        "Power Virtual Agents ile AI chatbot geliştirme",
        "SharePoint ve Microsoft 365 entegrasyonu",
        "Low-code/no-code uygulama geliştirme danışmanlığı",
      ],
    },
    {
      icon: Shield,
      title: "Siber Güvenlik ve Kimlik Yönetimi",
      description: "Kapsamlı güvenlik çözümleri ile dijital varlıklarınızı koruyun.",
      features: [
        "Azure Active Directory kimlik yönetimi",
        "Multi-factor authentication (MFA)",
        "Tehdit koruması ve izleme",
        "Güvenlik operasyonları merkezi (SOC)",
        "E-posta güvenliği çözümleri",
        "Güvenlik denetimleri ve uyumluluk",
      ],
    },
    {
      icon: BarChart3,
      title: "Veri ve İş Zekası",
      description: "Verilerinizi değerli içgörülere dönüştürün ve akıllı kararlar alın.",
      features: [
        "Power BI dashboard ve raporlama",
        "MS Fabric data platformu",
        "Veri ambarı çözümleri",
        "İş zekası (Business Intelligence)",
        "Gerçek zamanlı veri analizi",
        "Self-service analytics",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-ticaret Sistemleri",
      description: "Kapsamlı e-ticaret platformları ve entegrasyonları.",
      features: [
        "Online mağaza kurulumu",
        "Ödeme sistemi entegrasyonu",
        "Envanter yönetimi",
        "CRM entegrasyonu",
        "Mobil ticaret çözümleri",
        "B2B e-ticaret platformları",
      ],
    },
    {
      icon: Monitor,
      title: "Özel Yazılım Çözümleri",
      description: "İşletmenizin özel ihtiyaçları için yazılım geliştirme.",
      features: [
        "CRM sistemleri",
        "Stok takibi uygulamaları",
        "İnsan kaynakları sistemleri",
        "Muhasebe yazılımları",
        "Özel ERP çözümleri",
        "API geliştirme ve entegrasyon",
      ],
    },
  ];

  const processSteps = [
    { step: "01", title: "Analiz", desc: "İhtiyaçlarınızı detaylı olarak analiz eder ve en uygun çözümü belirleriz." },
    { step: "02", title: "Planlama", desc: "Proje planını hazırlar, zaman çizelgesi ve kaynak dağılımını belirleriz." },
    { step: "03", title: "Geliştirme", desc: "Uzman ekibimizle çözümü geliştirir ve test ederiz." },
    { step: "04", title: "Teslimat", desc: "Çözümü teslim eder, eğitim verir ve sürekli destek sağlarız." },
  ];

  return (
    <div className="min-h-screen bg-[hsl(220,20%,97%)]">
      <SEO
        title="Hizmetlerimiz - Microsoft Azure, Copilot, AI Danışmanlığı | Uptexx"
        description="Uptexx Hizmetleri: Microsoft Azure, Copilot, Power Platform, Yapay Zeka Danışmanlığı, Web ve Mobil Yazılım, Siber Güvenlik. İstanbul'dan tüm Türkiye'ye kurumsal çözümler."
        keywords="microsoft azure danışmanlığı, copilot entegrasyonu, power platform geliştirme, yapay zeka danışmanlığı, web yazılım, mobil uygulama, siber güvenlik, kurumsal lisanslama"
        canonical="/hizmetler"
      />

      {/* ---- Hero ---- */}
      <section className="hero-bg pt-40 pb-24 relative overflow-hidden" id="services-hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex mb-6 animate-fade-in-down">
            <span className="tech-chip tech-chip-inverted">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
              Hizmetlerimiz
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 max-w-4xl mx-auto animate-fade-in-up"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Microsoft Uzmanlığı ve Kurumsal Teknoloji Hizmetleri
          </h1>
          <p className="text-xl text-blue-100/75 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            İstanbul merkezli ve tüm Türkiye'de Microsoft Azure, Copilot, Power Platform danışmanlığı,
            web yazılım geliştirme, yapay zeka danışmanlığı ve kurumsal lisans yönetimi hizmetleri.
            Dijital dönüşüm ve değişim yönetimi projelerinizde güvenilir teknoloji ortağınız.
          </p>
        </div>
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true" style={{ zIndex: 5 }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full" style={{ display: "block", height: 80 }}>
            <defs>
              <linearGradient id="waveGradServices" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(220, 20%, 97%)" stopOpacity="0" />
                <stop offset="100%" stopColor="hsl(220, 20%, 97%)" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,20 1440,50 L1440,80 L0,80 Z" fill="url(#waveGradServices)" />
            <path d="M0,55 C360,20 720,80 1080,40 C1260,20 1380,65 1440,60 L1440,80 L0,80 Z" fill="hsl(220, 20%, 97%)" fillOpacity="0.7" />
          </svg>
        </div>
      </section>

      <div className="container mx-auto px-6 py-24">
        {/* ---- Services Grid ---- */}
        <div className="mb-24">
          <div className="section-eyebrow justify-center mb-4">Çözümlerimiz</div>
          <h2
            className="text-3xl font-bold text-[hsl(216,100%,12%)] text-center mb-12"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Tüm Hizmetlerimiz
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <article
                key={index}
                className="card-pro p-7 flex flex-col gap-5 animate-fade-in-up"
                style={{ animationDelay: `${(index % 6) * 60}ms` }}
              >
                {/* Icon + title */}
                <div className="flex items-start gap-4">
                  <div className="service-icon-wrap flex-shrink-0">
                    <service.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <h3
                    className="font-bold text-[hsl(216,100%,12%)] text-sm leading-snug pt-1"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {service.title}
                  </h3>
                </div>

                <p className="text-[hsl(216,20%,45%)] text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-1.5 mt-auto">
                  {service.features.map((feature, fi) => (
                    <li
                      key={fi}
                      className="flex items-start gap-2.5 text-xs text-[hsl(216,20%,45%)]"
                    >
                      <Check
                        size={13}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: "hsl(216 100% 12%)" }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* ---- Process Section ---- */}
        <section
          className="rounded-2xl px-8 py-16 mb-16 relative overflow-hidden"
          id="process"
          style={{ background: "linear-gradient(135deg, hsl(216 100% 11%), hsl(216 80% 18%))" }}
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
            <div className="text-center mb-14">
              <div className="tech-chip tech-chip-inverted inline-flex mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
                Sürecimiz
              </div>
              <h2
                className="text-3xl font-bold text-white mb-3"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Çalışma Sürecimiz
              </h2>
              <p className="text-blue-200/60 text-sm">Projelerinizi başarıyla tamamlamak için izlediğimiz adımlar</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  className="process-step rounded-xl p-7 text-center"
                  style={{ background: "hsl(0 0% 100% / 0.06)", border: "1px solid hsl(0 0% 100% / 0.1)" }}
                >
                  <div
                    className="text-5xl font-extrabold mb-4 block"
                    style={{ fontFamily: "'Syne', sans-serif", color: "hsl(0 0% 100% / 0.12)" }}
                    aria-hidden="true"
                  >
                    {step.step}
                  </div>
                  <h3
                    className="font-bold text-white mb-2"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-blue-200/60 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- CTA ---- */}
        <section className="cta-banner px-8 py-16 md:py-20 text-center" id="services-cta">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Projeniz İçin Ücretsiz Danışmanlık Alın
            </h2>
            <p className="text-blue-100/70 text-lg mb-10">
              Hangi hizmete ihtiyacınız olduğundan emin değil misiniz?
              Uzman ekibimizle görüşerek size en uygun çözümü belirleyelim.
            </p>
            <Link
              to="/iletisim"
              id="services-cta-link"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-[hsl(216,100%,12%)] bg-white transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
              style={{ boxShadow: "0 4px 16px hsl(0 0% 0% / 0.15)" }}
            >
              Bizi Tanıyın
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;