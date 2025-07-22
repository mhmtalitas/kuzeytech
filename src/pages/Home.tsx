import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Brain, Cloud, Shield, BarChart3, Settings, Smartphone, ArrowRight, Users, Key, Wrench, HardDrive } from "lucide-react";
import CounterAnimation from "@/components/CounterAnimation";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Home = () => {
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
      icon: HardDrive,
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
    { name: "Acronis", logo: "/acronis.png" },
    { name: "Trend Micro", logo: "/trendmicro.png" },
    { name: "Veeam", logo: "/veeam.png" },
    { name: "Lenovo", logo: "/lenovo.png" },
    { name: "Asus", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg" },
    { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
    { name: "SAP", logo: "/sap.png" },
    { name: "Hikvision", logo: "/hikvision.png" },
    { name: "TP-Link", logo: "/tplink.png" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Geleceği Şekillendiren
              <span className="block text-blue-200">Teknoloji Çözümleri</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Microsoft Azure, Copilot, Power Platform, yapay zeka danışmanlığı ve web yazılım geliştirme 
              hizmetleriyle işletmenizin değişim yönetimi ve veri yönetimi ihtiyaçlarını karşılıyoruz.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/hakkimizda">
                  Bizi Tanıyın
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/hizmetler">
                  Hizmetlerimiz
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Kurumsal Yazılım Çözümleri ve İş Uygulamaları
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Microsoft teknolojileri ve Ar-Ge gücümüzle işletmenizin dijital dönüşümünü, 
              raporlama sistemlerini ve kurumsal lisans yönetiminizi optimize ediyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              return (
                <Card
                  key={index}
                  className={`shadow-card hover:shadow-corporate transition-all duration-300 hover:-translate-y-1`}
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/hizmetler">
                Tüm Hizmetleri Görüntüle
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <CounterAnimation targetValue={50} duration={2000} suffix="+" />
              </div>
              <div className="text-muted-foreground">Tamamlanan Proje</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <CounterAnimation targetValue={25} duration={2000} suffix="+" />
              </div>
              <div className="text-muted-foreground">Mutlu Müşteri</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <CounterAnimation targetValue={2} duration={2000} suffix="+" />
              </div>
              <div className="text-muted-foreground">Yıllık Deneyim</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <CounterAnimation targetValue={24} duration={2000} suffix="/7" />
              </div>
              <div className="text-muted-foreground">Teknik Destek</div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Güvenilen İş Ortağınız
            </h2>
            <p className="text-muted-foreground">
              Sektöründe lider firmalarla başarılı projeler gerçekleştiriyoruz
            </p>
          </div>

          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {/* İlk set */}
              {clients.map((client, index) => (
                <div key={index} className="flex-shrink-0 w-48 px-4">
                  <div className="bg-secondary rounded-lg p-6 flex items-center justify-center h-20 opacity-60 hover:opacity-80 transition-opacity">
                    <img src={client.logo} alt={`${client.name} Logo`} className="h-full object-contain" />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clients.map((client, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 w-48 px-4">
                  <div className="bg-secondary rounded-lg p-6 flex items-center justify-center h-20 opacity-60 hover:opacity-80 transition-opacity">
                    <img src={client.logo} alt={`${client.name} Logo`} className="h-full object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projenizi Hayata Geçirmeye Hazır mısınız?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Uzman ekibimizle birlikte işletmenizin dijital dönüşümünü başlatın ve rekabet avantajı kazanın.
          </p>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 items-center justify-center">
            <Button asChild size="lg" variant="secondary" className="w-full md:w-auto">
              <Link to="/iletisim">
                Ücretsiz Danışmanlık Alın
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full md:w-auto">
              <Link to="/hizmetler">
                Hizmetlerimiz
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;