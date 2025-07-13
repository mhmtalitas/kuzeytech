import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Brain, Settings, Cloud, Shield, BarChart3, Key, 
  Users, Smartphone, Globe, ShoppingCart, Monitor, Wrench, ArrowRight 
} from "lucide-react";
// import useScrollAnimation from "@/hooks/useScrollAnimation"; // Kaldırıldı

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Yapay Zeka Çözümleri",
      description: "İşletmenizin ihtiyaçlarına özel AI destekli çözümler geliştiriyoruz.",
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
      icon: Settings,
      title: "Power Platform ve Otomasyon",
      description: "Microsoft Power Platform ile iş süreçlerinizi otomatikleştirin.",
      features: [
        "Power Apps ile özel uygulamalar",
        "Power Automate ile iş akışları",
        "Power BI ile veri görselleştirme",
        "Power Virtual Agents chatbot",
        "SharePoint entegrasyonu",
        "Düşük kodlu uygulama geliştirme"
      ]
    },
    {
      icon: Users,
      title: "Modern Çalışma Ortamı (Modern Workplace)",
      description: "Ekiplerinizin verimli ve güvenli çalışmasını sağlayan modern workplace çözümleri.",
      features: [
        "Microsoft 365 kurulumu ve yönetimi",
        "Microsoft Teams entegrasyonu ve özelleştirme",
        "Exchange Online e-posta çözümleri",
        "SharePoint ve OneDrive yönetimi",
        "Cihaz yönetimi (Microsoft Intune)",
        "Kullanıcı eğitimi ve değişim yönetimi"
      ]
    },
    {
      icon: Cloud,
      title: "Bulut ve Hibrit Altyapı",
      description: "Azure bulut platformu ile altyapınızı modernize edin ve optimize edin.",
      features: [
        "Azure Cloud migration hizmetleri",
        "Hibrit bulut çözümleri",
        "Altyapı yönetimi ve optimizasyonu",
        "Maliyet optimizasyonu",
        "Performans izleme ve raporlama",
        "24/7 altyapı destek hizmetleri"
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
      icon: Key,
      title: "Yedekleme ve Felaket Kurtarma",
      description: "İş sürekliliğinizi sağlayan güvenilir yedekleme ve kurtarma çözümleri.",
      features: [
        "Azure Backup çözümleri",
        "Site Recovery planlaması",
        "Disaster recovery stratejileri",
        "Veri replikasyonu",
        "İş sürekliliği planlaması",
        "Recovery time optimization"
      ]
    },
    {
      icon: Key,
      title: "Lisans ve E-Posta Yönetimi",
      description: "Microsoft 365 ve yazılım lisanslarınızı optimize edin.",
      features: [
        "Microsoft 365 yönetimi",
        "Exchange Server çözümleri",
        "Lisans optimizasyonu",
        "E-posta güvenliği",
        "Compliance ve arşivleme",
        "Hybrid exchange yapılandırması"
      ]
    },
    {
      icon: Globe,
      title: "Web Geliştirme",
      description: "Modern, responsive ve SEO uyumlu web siteleri.",
      features: [
        "Kurumsal web siteleri",
        "React, Vue.js, Angular",
        "CMS çözümleri",
        "SEO optimizasyonu",
        "Web performans analizi",
        "Progressive Web Apps (PWA)"
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
      icon: Smartphone,
      title: "Mobil Uygulama Geliştirme",
      description: "React Native ve Flutter ile cross-platform mobil uygulamalar.",
      features: [
        "iOS ve Android uygulamaları",
        "React Native geliştirme",
        "Flutter uygulamaları",
        "Native uygulama geliştirme",
        "App Store optimizasyonu",
        "Mobil uygulama bakımı"
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
    },
    {
      icon: Wrench,
      title: "Teknik Destek ve Bakım",
      description: "7/24 teknik destek ve sistem bakım hizmetleri.",
      features: [
        "Sistem izleme ve bakım",
        "Güvenlik güncellemeleri",
        "Performans optimizasyonu",
        "Hata giderme",
        "Kullanıcı eğitimleri",
        "Proaktif sistem yönetimi"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Hizmetlerimiz
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            İşletmenizin dijital dönüşümünde ihtiyaç duyduğu tüm teknoloji hizmetlerini 
            tek çatı altında sunuyoruz. Uzman ekibimizle projelerinizi başarıyla hayata geçirin.
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
          <div className="space-x-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/iletisim">
                Bizi Tanıyın
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/products" className="text-gray-900">Ürünlerimizi İnceleyin</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;