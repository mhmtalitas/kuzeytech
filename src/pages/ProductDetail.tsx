import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Users, Clock, Shield, Smartphone } from "lucide-react";

const ProductDetail = () => {
  const { slug } = useParams();

  // Ürün detayları (gerçek uygulamada API'den gelecek)
  const productDetails = {
    "smart-expense": {
      title: "Smart Expense",
      category: "Finans Yönetimi",
      tagline: "AI Destekli Akıllı Masraf Yönetimi",
      description: "Smart Expense, yapay zeka teknolojisi ile güçlendirilmiş masraf yönetim sistemidir. Şirketinizin tüm harcamalarını otomatik olarak kategorize eder, analiz eder ve raporlar. Makbuz tarama özelliği ile manuel veri girişini minimize eder.",
      keyFeatures: [
        "AI destekli otomatik kategorilendirme",
        "OCR teknolojisi ile makbuz tarama",
        "Gerçek zamanlı bütçe kontrolü",
        "Çoklu para birimi desteği",
        "Mobil uygulama (iOS & Android)",
        "Entegrasyon API'leri"
      ],
      benefits: [
        "Masraf onay sürecini %75 hızlandırır",
        "Manuel hataları %90 azaltır",
        "Maliyet görünürlüğünü artırır",
        "Compliance gereksinimlerini karşılar"
      ],
      techSpecs: [
        "Microsoft 365 entegrasyonu",
        "Power BI raporlama",
        "Azure AD güvenliği",
        "REST API desteği",
        "Real-time senkronizasyon"
      ]
    },
    "cv-converter": {
      title: "CV Converter",
      category: "İnsan Kaynakları",
      tagline: "Akıllı CV Dönüştürme ve Standardizasyon",
      description: "CV Converter, farklı formatlardaki CV'leri otomatik olarak analiz eder, standardize eder ve ATS uyumlu formatlara dönüştürür. İK süreçlerinizi hızlandırır ve aday değerlendirme kalitesini artırır.",
      keyFeatures: [
        "Çoklu format desteği (PDF, Word, TXT)",
        "AI destekli içerik analizi",
        "ATS uyumlu format dönüşümü",
        "Toplu işlem kapasitesi",
        "Anahtar kelime optimizasyonu",
        "Yetenek haritalaması"
      ],
      benefits: [
        "CV inceleme süresini %60 azaltır",
        "Aday kalitesini artırır",
        "İK süreçlerini standardize eder",
        "Önyargıları minimize eder"
      ],
      techSpecs: [
        "Machine Learning algoritmaları",
        "Natural Language Processing",
        "Bulk processing sistemi",
        "API entegrasyonu",
        "Güvenli veri işleme"
      ]
    },
    "event-tracker": {
      title: "Event Tracker",
      category: "Etkinlik Yönetimi", 
      tagline: "Kapsamlı Etkinlik Yönetim Platformu",
      description: "Event Tracker, etkinliklerinizi planlamadan katılımcı yönetimine, check-in sürecinden feedback toplamaya kadar tüm süreçleri dijitalleştirir. QR kod sistemi ve real-time analytics ile etkinlik deneyimini optimize eder.",
      keyFeatures: [
        "Etkinlik planlama ve zaman çizelgesi",
        "Online kayıt ve ödeme sistemi",
        "QR kod check-in sistemi",
        "Real-time katılımcı takibi",
        "E-posta otomasyonu",
        "Anket ve feedback sistemi"
      ],
      benefits: [
        "Etkinlik yönetimi süresini %50 azaltır",
        "Katılımcı deneyimini artırır",
        "Operasyonel maliyetleri düşürür",
        "Detaylı analytics sağlar"
      ],
      techSpecs: [
        "Cloud-based altyapı",
        "Mobile-first tasarım",
        "Payment gateway entegrasyonu",
        "SMS ve email entegrasyonu",
        "Analytics dashboard"
      ]
    },
    "document-ai": {
      title: "Document AI",
      category: "Doküman Yönetimi",
      tagline: "AI Destekli Akıllı Doküman Yönetimi",
      description: "Document AI, dokümanlarınızı otomatik olarak sınıflandıran, içerik çıkaran ve organize eden yapay zeka sistemidir. OCR teknolojisi ile fiziksel dokümanları dijitalleştirir ve arama yapılabilir hale getirir.",
      keyFeatures: [
        "Otomatik doküman sınıflandırma",
        "Gelişmiş OCR teknolojisi",
        "Akıllı içerik çıkarma",
        "Versiyon kontrol sistemi",
        "Güvenli erişim yönetimi",
        "API entegrasyonu"
      ],
      benefits: [
        "Doküman işleme süresini %80 azaltır",
        "Arama verimliliğini artırır",
        "Compliance risklerini minimize eder",
        "Depolama maliyetlerini düşürür"
      ],
      techSpecs: [
        "Advanced OCR engine",
        "Machine Learning classification",
        "Elasticsearch integration",
        "Role-based access control",
        "Audit trail sistemi"
      ]
    },
    "invoice-manager": {
      title: "Invoice Manager",
      category: "Fatura Yönetimi",
      tagline: "Kapsamlı Fatura ve Tahsilat Yönetimi",
      description: "Invoice Manager, fatura oluşturmadan tahsilatın tamamlanmasına kadar tüm süreci yönetir. E-fatura entegrasyonu, otomatik hatırlatmalar ve detaylı raporlama ile finansal süreçlerinizi optimize eder.",
      keyFeatures: [
        "Otomatik fatura oluşturma",
        "E-fatura sistemi entegrasyonu",
        "Tahsilat takip sistemi",
        "Otomatik hatırlatmalar",
        "Finansal raporlama",
        "CRM entegrasyonu"
      ],
      benefits: [
        "Fatura işleme süresini %70 azaltır",
        "Tahsilat oranını artırır",
        "Mali compliance sağlar",
        "Nakit akışını optimize eder"
      ],
      techSpecs: [
        "E-fatura API entegrasyonu",
        "Payment gateway bağlantısı",
        "Financial reporting engine",
        "CRM sistem entegrasyonu",
        "Automated workflow"
      ]
    },
    "crm-pro": {
      title: "CRM Pro",
      category: "Müşteri Yönetimi",
      tagline: "Gelişmiş Müşteri İlişkileri Yönetimi",
      description: "CRM Pro, müşteri ilişkilerinizi güçlendiren kapsamlı bir platformdur. Satış süreçlerinden müşteri hizmetlerine, pazarlama otomasyonundan analytics'e kadar tüm müşteri verilerini tek merkezde yönetir.",
      keyFeatures: [
        "360° müşteri görünümü",
        "Satış pipeline yönetimi",
        "Pazarlama otomasyonu",
        "Müşteri hizmetleri ticketing",
        "Mobil CRM uygulaması",
        "Advanced analytics"
      ],
      benefits: [
        "Satış verimliliğini %45 artırır",
        "Müşteri memnuniyetini yükseltir",
        "Satış döngüsünü kısaltır",
        "Müşteri yaşam değerini artırır"
      ],
      techSpecs: [
        "Cloud-native architecture",
        "Microsoft 365 entegrasyonu",
        "Power BI dashboard entegrasyonu",
        "Mobile app (iOS/Android)",
        "API-first yaklaşım"
      ]
    }
  };

  const product = productDetails[slug as keyof typeof productDetails];

  if (!product) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Ürün Bulunamadı</h1>
          <p className="text-muted-foreground mb-8">Aradığınız ürün mevcut değil.</p>
          <Button asChild>
            <Link to="/urunler">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Ürünlere Dön
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Anasayfa</Link>
          <span>/</span>
          <Link to="/urunler" className="hover:text-primary">Ürünler</Link>
          <span>/</span>
          <span className="text-primary">{product.title}</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <Badge className="mb-4">{product.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {product.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {product.tagline}
            </p>
            <p className="text-lg mb-8">
              {product.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/iletisim">
                  Demo Talep Et
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/iletisim">
                  Fiyat Teklifi Al
                </Link>
              </Button>
            </div>
          </div>

          {/* Product Visual */}
          <div className="bg-gradient-primary rounded-lg p-12 flex items-center justify-center">
            <div className="text-center text-primary-foreground">
              <div className="w-32 h-32 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl font-bold">{product.title.slice(0, 2)}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
              <p className="text-primary-foreground/80">{product.category}</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Key Features */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-primary flex items-center">
                <CheckCircle className="mr-2 h-5 w-5" />
                Temel Özellikler
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {product.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-primary flex items-center">
                <Users className="mr-2 h-5 w-5" />
                İş Faydaları
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Technical Specs */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-primary flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Teknik Özellikler
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {product.techSpecs.map((spec, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{spec}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Implementation Process */}
        <section className="bg-secondary rounded-lg p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Uygulama Süreci
            </h2>
            <p className="text-muted-foreground">
              {product.title} ürününü işletmenizde nasıl hayata geçiriyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Analiz</h3>
              <p className="text-sm text-muted-foreground">
                Mevcut süreçlerinizi analiz eder ve ihtiyaçlarınızı belirleriz.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Özelleştirme</h3>
              <p className="text-sm text-muted-foreground">
                Ürünü işletmenizin özel ihtiyaçlarına göre yapılandırırız.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Eğitim</h3>
              <p className="text-sm text-muted-foreground">
                Ekibinize kapsamlı eğitim vererek adaptasyonu hızlandırırız.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Destek</h3>
              <p className="text-sm text-muted-foreground">
                Sürekli destek ve gelişim hizmetleri sağlarız.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-primary rounded-lg p-8 md:p-12 text-primary-foreground">
          <h2 className="text-3xl font-bold mb-4">
            {product.title} ile Fark Yaratmaya Başlayın!
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Ücretsiz demo ile {product.title} ürününün işletmenize nasıl değer katabileceğini keşfedin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/iletisim">
                <Clock className="mr-2 h-4 w-4" />
                Demo Rezervasyonu
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/iletisim">
                <Smartphone className="mr-2 h-4 w-4" />
                Ücretsiz Danışmanlık
              </Link>
            </Button>
          </div>
        </section>

        {/* Back to Products */}
        <div className="mt-12">
          <Button asChild variant="outline">
            <Link to="/urunler">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Tüm Ürünlere Dön
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;