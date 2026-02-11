import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Brain, Settings, Cloud, Shield, BarChart3, Key,
  Users, Smartphone, Globe, ShoppingCart, Monitor, Wrench, ArrowRight
} from "lucide-react";
// import useScrollAnimation from "@/hooks/useScrollAnimation"; // Kaldırıldı
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
        "Hybrid exchange yapılandırması ve migrasyonu"
      ]
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
        "Değişim yönetimi ve kullanıcı eğitimi programları"
      ]
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
        "Proaktif Azure sistem yönetimi ve izleme"
      ]
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
        "Recovery time optimization ve test senaryoları"
      ]
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
        "24/7 Azure altyapı destek ve danışmanlık hizmetleri"
      ]
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
        "Özel AI modelleri geliştirme"
      ]
    },
    {
      icon: Globe,
      title: "Web Yazılım Geliştirme ve SEO Hizmetleri",
      description: "Modern, responsive kurumsal web siteleri, e-ticaret yazılımı ve Trabzon SEO hizmetleri. Özel yazılım çözümleri geliştirme.",
      features: [
        "Kurumsal web yazılım geliştirme ve CRM yazılımı",
        "React, Next.js, Angular ile modern web uygulamaları",
        "WordPress, custom CMS çözümleri",
        "Kurumsal SEO danışmanlığı ve dijital pazarlama SEO",
        "Web performans optimizasyonu ve analiz",
        "Progressive Web Apps (PWA) ve API geliştirme"
      ]
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
        "Mobil uygulama bakım ve güncellemeleri"
      ]
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
        "Low-code/no-code uygulama geliştirme danışmanlığı"
      ]
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
        "Güvenlik denetimleri ve uyumluluk"
      ]
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
        "Self-service analytics"
      ]
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
        "B2B e-ticaret platformları"
      ]
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
        "API geliştirme ve entegrasyon"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <SEO
          title="Hizmetlerimiz - Microsoft Azure, Copilot, AI Danışmanlığı | Uptexx"
          description="Uptexx Hizmetleri: Microsoft Azure, Copilot, Power Platform, Yapay Zeka Danışmanlığı, Web ve Mobil Yazılım, Siber Güvenlik. İstanbul'dan tüm Türkiye'ye kurumsal çözümler."
          keywords="microsoft azure danışmanlığı, copilot entegrasyonu, power platform geliştirme, yapay zeka danışmanlığı, web yazılım, mobil uygulama, siber güvenlik, kurumsal lisanslama"
          canonical="/hizmetler"
        />
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Microsoft Uzmanlığı ve Kurumsal Teknoloji Hizmetleri
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trabzon ve Karadeniz bölgesinde Microsoft Azure, Copilot, Power Platform danışmanlığı,
            web yazılım geliştirme, yapay zeka danışmanlığı ve kurumsal lisans yönetimi hizmetleri.
            Dijital dönüşüm ve değişim yönetimi projelerinizde güvenilir teknoloji ortağınız.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`shadow-card hover:shadow-corporate transition-all duration-300 hover:-translate-y-1`}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-primary text-lg">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <section className="bg-secondary rounded-lg p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Çalışma Sürecimiz
            </h2>
            <p className="text-muted-foreground">
              Projelerinizi başarıyla tamamlamak için izlediğimiz adımlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Analiz</h3>
              <p className="text-sm text-muted-foreground">
                İhtiyaçlarınızı detaylı olarak analiz eder ve en uygun çözümü belirleriz.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Planlama</h3>
              <p className="text-sm text-muted-foreground">
                Proje planını hazırlar, zaman çizelgesi ve kaynak dağılımını belirleriz.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Geliştirme</h3>
              <p className="text-sm text-muted-foreground">
                Uzman ekibimizle çözümü geliştirir ve test ederiz.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Teslimat</h3>
              <p className="text-sm text-muted-foreground">
                Çözümü teslim eder, eğitim verir ve sürekli destek sağlarız.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-primary rounded-lg p-8 md:p-12 text-primary-foreground">
          <h2 className="text-3xl font-bold mb-4">
            Projeniz İçin Ücretsiz Danışmanlık Alın
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Hangi hizmete ihtiyacınız olduğundan emin değil misiniz?
            Uzman ekibimizle görüşerek size en uygun çözümü belirleyelim.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" variant="secondary" className="w-full md:w-auto">
              <Link to="/iletisim">
                Bizi Tanıyın
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;