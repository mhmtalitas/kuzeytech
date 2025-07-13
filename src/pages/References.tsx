import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Quote, Building, Users, ArrowRight } from "lucide-react";
import CounterAnimation from "@/components/CounterAnimation"; // Import CounterAnimation
import useScrollAnimation from "@/hooks/useScrollAnimation"; // Import useScrollAnimation

const References = () => {
  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      position: "Genel Müdür",
      company: "TechCorp A.Ş.",
      location: "İstanbul",
      rating: 5,
      comment: "Kuzey Tech ile çalışmaktan çok memnunuz. Özellikle Power BI raporlama sistemimizi kurarken gösterdikleri profesyonellik ve teknik bilgi birikimi etkileyiciydi. Şirketimizin veri analizi süreçlerini tamamen dönüştürdüler.",
      project: "Power BI Dashboard & Raporlama Sistemi",
      duration: "3 ay",
      avatar: "AY"
    },
    {
      name: "Elif Kara",
      position: "IT Müdürü",
      company: "İnovasyon Ltd.",
      location: "Ankara",
      rating: 5,
      comment: "Cloud migration projemizde Kuzey Tech'in uzman desteği sayesinde hiçbir veri kaybı yaşamadan Azure'a geçiş yaptık. 7/24 destek hizmetleri de çok değerli. Kesinlikle tavsiye ederim.",
      project: "Azure Cloud Migration",
      duration: "4 ay",
      avatar: "EK"
    },
    {
      name: "Mehmet Öz",
      position: "Kurucu Ortak",
      company: "StartupXYZ",
      location: "İzmir",
      rating: 5,
      comment: "Mobil uygulamamızı React Native ile geliştirdiler. Hem iOS hem Android için mükemmel performans. Kullanıcı deneyimi harika ve uygulama çok stabil çalışıyor. Smart Expense ürünlerini de kullanıyoruz.",
      project: "Mobil Uygulama Geliştirme",
      duration: "6 ay",
      avatar: "MÖ"
    },
    {
      name: "Zeynep Demir",
      position: "İnsan Kaynakları Müdürü",
      company: "GlobalTech",
      location: "Bursa",
      rating: 5,
      comment: "CV Converter ürünleri sayesinde işe alım sürecimiz çok hızlandı. Binlerce CV'yi otomatik olarak analiz edebiliyoruz. Kuzey Tech'in AI çözümleri gerçekten fark yaratıyor.",
      project: "İK Sistemleri & CV Converter",
      duration: "2 ay",
      avatar: "ZD"
    },
    {
      name: "Can Arslan",
      position: "Dijital Pazarlama Müdürü",
      company: "E-Commerce Pro",
      location: "Antalya",
      rating: 5,
      comment: "E-ticaret sitemizi sıfırdan kurdular. Modern tasarım, hızlı performans ve mükemmel SEO optimizasyonu. Satışlarımız %150 arttı. Power Platform entegrasyonları da çok başarılı.",
      project: "E-ticaret Sitesi & Power Platform",
      duration: "5 ay",
      avatar: "CA"
    },
    {
      name: "Fatma Yıldız",
      position: "Operasyon Müdürü",
      company: "Lojistik Plus",
      location: "Trabzon",
      rating: 5,
      comment: "Event Tracker ile etkinlik yönetimimiz çok profesyonelleşti. Özellikle QR kod sistemi ve real-time raporlar harika. Yerel bir firma olarak Kuzey Tech'i destekliyoruz.",
      project: "Etkinlik Yönetim Sistemi",
      duration: "3 ay",
      avatar: "FY"
    }
  ];

  const clientLogos = [
    { name: "TechCorp", sector: "Teknoloji" },
    { name: "İnovasyon Ltd.", sector: "Yazılım" },
    { name: "StartupXYZ", sector: "Fintech" },
    { name: "GlobalTech", sector: "Danışmanlık" },
    { name: "E-Commerce Pro", sector: "E-ticaret" },
    { name: "Lojistik Plus", sector: "Lojistik" },
    { name: "HealthCare Systems", sector: "Sağlık" },
    { name: "EduTech", sector: "Eğitim" },
    { name: "RetailChain", sector: "Perakende" },
    { name: "Manufacturing Co.", sector: "Üretim" },
    { name: "Finance Solutions", sector: "Finans" },
    { name: "Tourism Group", sector: "Turizm" }
  ];

  const projects = [
    {
      title: "Ulusal E-ticaret Platformu",
      client: "E-Commerce Pro",
      description: "300.000+ ürün kapasiteli, günde 10.000+ sipariş işleyen e-ticaret sistemi",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
      results: ["%150 satış artışı", "99.9% uptime", "3sn sayfa yükleme"]
    },
    {
      title: "Kurumsal Veri Analizi Sistemi",
      client: "TechCorp",
      description: "Real-time veri analizi ve görselleştirme platformu",
      technologies: ["Power BI", "MS Fabric", "Azure", "Python", "SQL"],
      results: ["50+ dashboard", "1TB veri işleme", "%80 karar süreci iyileştirmesi"]
    },
    {
      title: "Mobil İK Uygulaması",
      client: "GlobalTech",
      description: "2000+ çalışan için kapsamlı insan kaynakları mobil uygulaması",
      technologies: ["React Native", "Node.js", "MongoDB", "Push Notifications"],
      results: ["95% kullanıcı memnuniyeti", "60% işlem süresi azalması", "iOS & Android"]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Referanslarımız
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Farklı sektörlerden 50+ işletme bize güvendi. Başarılı projelerimiz ve 
            müşteri deneyimlerimiz ile neden bizi tercih ettiklerini keşfedin.
          </p>
        </div>

        {/* Stats Section */}
        <section className="bg-gradient-primary rounded-lg p-8 md:p-12 text-primary-foreground mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2"><CounterAnimation targetValue={100} duration={2000} suffix="+" /></div>
              <div className="text-primary-foreground/80">Tamamlanan Proje</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2"><CounterAnimation targetValue={50} duration={2000} suffix="+" /></div>
              <div className="text-primary-foreground/80">Mutlu Müşteri</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2"><CounterAnimation targetValue={98} duration={2000} suffix="%" /></div>
              <div className="text-primary-foreground/80">Müşteri Memnuniyeti</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2"><CounterAnimation targetValue={5} duration={2000} suffix="+" /></div>
              <div className="text-primary-foreground/80">Yıl Deneyim</div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Müşteri Görüşleri
            </h2>
            <p className="text-muted-foreground">
              Projelerini bizimle gerçekleştiren müşterilerimizin deneyimleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const [ref, isInView] = useScrollAnimation(0.2);
              return (
                <Card
                  key={index}
                  ref={ref}
                  className={`shadow-card hover:shadow-corporate transition-all duration-300 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                          <span className="text-primary-foreground font-semibold text-sm">{testimonial.avatar}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                          <p className="text-sm font-medium">{testimonial.company}</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="secondary">{testimonial.project}</Badge>
                      <Badge variant="outline">{testimonial.duration}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start space-x-2">
                      <Quote className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm italic">
                        {testimonial.comment}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Project Case Studies */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Öne Çıkan Projeler
            </h2>
            <p className="text-muted-foreground">
              Gerçekleştirdiğimiz büyük ölçekli projelerin detayları ve sonuçları
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => {
              const [ref, isInView] = useScrollAnimation(0.2);
              return (
                <Card
                  key={index}
                  ref={ref}
                  className={`shadow-card ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-primary text-xl mb-2">{project.title}</CardTitle>
                        <CardDescription className="text-base mb-4">
                          {project.description}
                        </CardDescription>
                      </div>
                      <Badge className="self-start md:self-center">{project.client}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Kullanılan Teknolojiler</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Elde Edilen Sonuçlar</h4>
                        <ul className="space-y-1">
                          {project.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="text-sm text-muted-foreground flex items-center">
                              <span className="text-green-500 mr-2">✓</span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mt-20 bg-secondary rounded-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Neden Kuzey Tech?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="font-medium mb-2">Yıllık Deneyim</div>
              <p className="text-sm text-muted-foreground">
                Sektördeki derin deneyimimizle güvenilir çözümler sunuyoruz
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="font-medium mb-2">Teknik Destek</div>
              <p className="text-sm text-muted-foreground">
                Kesintisiz teknik destek ile projelerinizin sürekliliğini sağlıyoruz
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="font-medium mb-2">Müşteri Odaklılık</div>
              <p className="text-sm text-muted-foreground">
                Her projede müşteri ihtiyaçlarını önceleyerek özel çözümler geliştiriyoruz
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default References;