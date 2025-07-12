import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Brain, Cloud, Shield, BarChart3, Settings, Smartphone, ArrowRight } from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: Brain,
      title: "Yapay Zeka Çözümleri",
      description: "İşletmenizin ihtiyaçlarına özel AI destekli çözümler geliştiriyoruz.",
    },
    {
      icon: Settings,
      title: "Power Platform & Otomasyon",
      description: "Microsoft Power Platform ile iş süreçlerinizi otomatikleştirin.",
    },
    {
      icon: Cloud,
      title: "Bulut Çözümleri",
      description: "Güvenli ve ölçeklenebilir bulut altyapısı ile verimliliğinizi artırın.",
    },
    {
      icon: BarChart3,
      title: "Veri ve Raporlama",
      description: "Power BI ve MS Fabric ile verilerinizi analiz edin ve görselleştirin.",
    },
    {
      icon: Shield,
      title: "Siber Güvenlik",
      description: "Dijital varlıklarınızı en güncel güvenlik çözümleriyle koruyun.",
    },
    {
      icon: Smartphone,
      title: "Mobil Uygulama Geliştirme",
      description: "React Native ve Flutter ile modern mobil uygulamalar.",
    },
  ];

  const clients = [
    "Microsoft", "Amazon", "Google", "Apple", "Meta", "Oracle"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Geleceği Şekillendiren
              <span className="block text-blue-200">Teknoloji Çözümleri</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Kuzey Tech olarak, yapay zekadan otomasyona, bulut çözümlerinden siber güvenliğe kadar 
              geniş bir yelpazede yenilikçi teknoloji hizmetleri sunuyoruz.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg" variant="secondary" className="animate-scale-in">
                <Link to="/hakkimizda">
                  Bizi Tanıyın
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/hizmetler">Hizmetlerimiz</Link>
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
              Öne Çıkan Hizmetlerimiz
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern teknolojilerle işletmenizin dijital dönüşümünü başarıyla tamamlayın
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-corporate transition-all duration-300 hover:-translate-y-1">
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
            ))}
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
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Tamamlanan Proje</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Mutlu Müşteri</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Yıllık Deneyim</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {clients.map((client, index) => (
              <div key={index} className="text-center">
                <div className="bg-secondary rounded-lg p-6 flex items-center justify-center h-20">
                  <span className="font-semibold text-primary">{client}</span>
                </div>
              </div>
            ))}
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
          <Button asChild size="lg" variant="secondary">
            <Link to="/iletisim">
              Ücretsiz Danışmanlık Alın
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;