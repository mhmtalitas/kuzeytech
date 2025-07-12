import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calculator, FileText, Calendar, ArrowRight, Star, Download } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Calculator,
      title: "Smart Expense",
      category: "Finans Yönetimi",
      description: "AI destekli akıllı masraf takibi ve raporlama sistemi. Şirket harcamalarınızı otomatik olarak kategorize eder ve analiz eder.",
      features: [
        "Otomatik masraf kategorilendirme",
        "Makbuz tarama ve OCR",
        "Bütçe kontrol ve uyarıları",
        "Detaylı raporlama",
        "Mobil uygulama desteği",
        "Multi-currency desteği"
      ],
      price: "₺299/ay",
      popular: true,
      demo: true
    },
    {
      icon: FileText,
      title: "CV Converter",
      category: "İnsan Kaynakları",
      description: "CV'leri otomatik olarak farklı formatlara dönüştüren ve standardize eden akıllı sistem.",
      features: [
        "Çoklu format desteği",
        "AI destekli içerik analizi",
        "Otomatik düzenleme",
        "Toplu işlem özelliği",
        "ATS uyumlu formatlar",
        "Anahtar kelime optimizasyonu"
      ],
      price: "₺199/ay",
      popular: false,
      demo: true
    },
    {
      icon: Calendar,
      title: "Event Tracker",
      category: "Etkinlik Yönetimi",
      description: "Kapsamlı etkinlik planlama, takip ve analiz platformu. Etkinliklerinizi baştan sona yönetin.",
      features: [
        "Etkinlik planlama araçları",
        "Katılımcı yönetimi",
        "QR kod check-in",
        "Real-time analytics",
        "E-posta otomasyonu",
        "Feedback sistemi"
      ],
      price: "₺399/ay",
      popular: false,
      demo: true
    },
    {
      icon: FileText,
      title: "Document AI",
      category: "Doküman Yönetimi",
      description: "Dokümanları otomatik olarak sınıflandıran, içerik çıkaran ve organize eden AI sistemi.",
      features: [
        "Otomatik sınıflandırma",
        "İçerik çıkarma (OCR)",
        "Arama ve filtreleme",
        "Versiyon kontrolü",
        "Güvenli paylaşım",
        "API entegrasyonu"
      ],
      price: "₺499/ay",
      popular: false,
      demo: false
    },
    {
      icon: Calculator,
      title: "Invoice Manager",
      category: "Fatura Yönetimi",
      description: "Fatura oluşturma, takip ve tahsilat süreçlerini yöneten kapsamlı sistem.",
      features: [
        "Otomatik fatura oluşturma",
        "Ödeme takibi",
        "E-fatura entegrasyonu",
        "Tahsilat hatırlatmaları",
        "Finansal raporlar",
        "CRM entegrasyonu"
      ],
      price: "₺349/ay",
      popular: false,
      demo: true
    },
    {
      icon: Star,
      title: "CRM Pro",
      category: "Müşteri Yönetimi",
      description: "Müşteri ilişkileri yönetimi için geliştirilmiş kapsamlı CRM çözümü.",
      features: [
        "Müşteri veritabanı yönetimi",
        "Satış süreç takibi",
        "Otomatik görevlendirme",
        "E-posta pazarlama",
        "Raporlama ve analitik",
        "Mobil uygulama"
      ],
      price: "₺599/ay",
      popular: true,
      demo: true
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Yazılım Ürünlerimiz
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            İşletmenizin verimliliğini artıran, kullanımı kolay ve AI destekli yazılım ürünlerimizi keşfedin. 
            Her ürün, gerçek iş ihtiyaçlarından yola çıkarak geliştirilmiştir.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={index} className={`shadow-card hover:shadow-corporate transition-all duration-300 hover:-translate-y-1 relative ${product.popular ? 'ring-2 ring-primary' : ''}`}>
              {product.popular && (
                <Badge className="absolute -top-2 left-4 bg-primary text-primary-foreground">
                  Popüler
                </Badge>
              )}
              
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <product.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <Badge variant="secondary">{product.category}</Badge>
                </div>
                <CardTitle className="text-primary text-xl">{product.title}</CardTitle>
                <CardDescription className="text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t">
                    <div className="text-2xl font-bold text-primary mb-4">{product.price}</div>
                    <div className="space-y-2">
                      <Button className="w-full" asChild>
                        <Link to="/iletisim">
                          Satın Al
                        </Link>
                      </Button>
                      {product.demo && (
                        <Button variant="outline" className="w-full">
                          <Download className="mr-2 h-4 w-4" />
                          Demo İndir
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <section className="bg-secondary rounded-lg p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Tüm Ürünlerimizde Standart Özellikler
            </h2>
            <p className="text-muted-foreground">
              Her ürünümüzde bulabileceğiniz kalite ve güvenlik standartları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">🔒</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Güvenli</h3>
              <p className="text-sm text-muted-foreground">
                En yüksek güvenlik standartları ile verilerinizi koruyoruz
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">☁️</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Bulut Tabanlı</h3>
              <p className="text-sm text-muted-foreground">
                Her yerden erişim ve otomatik güncellemeler
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">📱</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Mobil Uyumlu</h3>
              <p className="text-sm text-muted-foreground">
                Tüm cihazlarda mükemmel kullanım deneyimi
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">🤖</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">AI Destekli</h3>
              <p className="text-sm text-muted-foreground">
                Yapay zeka ile gelişmiş özellikler ve otomatikleştirme
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Benefits */}
        <section className="bg-gradient-primary rounded-lg p-8 md:p-12 text-primary-foreground mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Esnek Fiyatlandırma Seçenekleri
            </h2>
            <p className="text-xl text-primary-foreground/90">
              İşletmenizin büyüklüğüne ve ihtiyaçlarına göre özel çözümler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-semibold text-xl mb-2">Startup Paketi</h3>
              <p className="text-primary-foreground/80 mb-4">
                Küçük işletmeler için temel özellikler ve uygun fiyat
              </p>
              <ul className="text-sm space-y-1 text-primary-foreground/80">
                <li>• 1-10 kullanıcı</li>
                <li>• Temel raporlama</li>
                <li>• E-posta desteği</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-xl mb-2">Business Paketi</h3>
              <p className="text-primary-foreground/80 mb-4">
                Orta ölçekli işletmeler için gelişmiş özellikler
              </p>
              <ul className="text-sm space-y-1 text-primary-foreground/80">
                <li>• 10-50 kullanıcı</li>
                <li>• Gelişmiş analitik</li>
                <li>• Öncelikli destek</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-xl mb-2">Enterprise Paketi</h3>
              <p className="text-primary-foreground/80 mb-4">
                Büyük işletmeler için sınırsız özellikler
              </p>
              <ul className="text-sm space-y-1 text-primary-foreground/80">
                <li>• Sınırsız kullanıcı</li>
                <li>• Özel entegrasyonlar</li>
                <li>• 7/24 destek</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Hangi Ürünün Size Uygun Olduğunu Keşfedin
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Uzman ekibimizle görüşerek işletmeniz için en uygun yazılım çözümünü belirleyin. 
            Ücretsiz danışmanlık ve demo imkanı.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link to="/iletisim">
                Ücretsiz Danışmanlık
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/hizmetler">Özel Yazılım Geliştirme</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;