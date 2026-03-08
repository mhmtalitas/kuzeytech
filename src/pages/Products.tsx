import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  CheckCircle, 
  Mail, 
  Database, 
  ShieldCheck, 
  ArrowRight, 
  Download, 
  Users, 
  Settings, 
  Lock, 
  Server,
  CloudCog,
  ChevronRight,
  FileText
} from "lucide-react";

const productsData: Record<string, any> = {
  "booldesk": {
    name: "Booldesk",
    title: "Tek Ekranda Tüm BT Süreçlerinizi Yönetin",
    description: "Tüm IT yönetimi ve proje süreçlerinizi Booldesk ile tek bir merkezi platformdan yönetin. Dağıtık iş akışlarını sadeleştirerek operasyonel verimliliği artırın, manuel süreçleri otomasyonla optimize edin.",
    gradient: "linear-gradient(135deg, hsl(216 100% 15%), hsl(220 80% 30%))",
    icon: LayoutDashboard,
    image: "/images/products/booldesk_p6_i1.jpeg",
    features: ["Sınırsız Asset ve Teknisyen", "Ücretsiz Kurulum ve Destek", "Tek Lisans Tüm Özellikler"],
    modules: [
      {
        name: "Sistem Yönetimi",
        icon: Server,
        desc: "Uç nokta cihazları merkezi olarak izleyip yönetmenizi sağlayan ağ yönetimi yeteneği.",
        items: [
          "Active Directory'de Otomatik Keşif ve Entegrasyon",
          "Workgroup ve Domain Cihaz Yönetimi",
          "Web Tarayıcı Üzerinden Cihazlara Uzaktan Erişim",
          "USB, Uygulama ve Kullanıcı Güncelleme Yönetimi",
          "PowerShell, CMD, Dosya Transferi, Canlı Aksiyonlar"
        ]
      },
      {
        name: "Yardım Masası (Helpdesk)",
        icon: Users,
        desc: "Kurum içi ve dışı kullanıcı taleplerinin merkezi bir yapıda toplanarak sistematik çözülmesi.",
        items: [
          "Web Portalı ve E-Posta İle Hızlı Çağrı Açma",
          "SLA Raporları ve Özelleştirilebilir SLA Tanımları",
          "Gelen Çağrılar İçin Dinamik Onay Mekanizması",
          "Otomatik Çağrı Atama ve İş Akışı Kuralları",
          "Özelleştirilebilir Raporlama ve Memnuniyet Ölçümü"
        ]
      },
      {
        name: "Envanter ve Zimmet Yönetimi",
        icon: Database,
        desc: "Tüm IT ve Non-IT varlıkların yaşam döngüsünü barkodlu ve merkezi şekilde dijitalleştirme.",
        items: [
          "Yazılım ve Donanım Varlık Tanımlama (IT & Non-IT)",
          "Kuruma Özel Zimmet Formu ve Kullanıcı Yönetimi",
          "Karekod (QR) İle Hızlı Envanter Takibi ve Sayımı",
          "Network Üzerinden Otomatik Envanter Tarama",
          "CSV Formatında Toplu Envanter Girişi"
        ]
      },
      {
        name: "Proje & Sözleşme Yönetimi",
        icon: FileText,
        desc: "Projelerinizi uçtan uca planlayın, sorumlulukları dağıtın ve üretici/hizmet sözleşmelerinizi takip edin.",
        items: [
          "Proje, Bütçe ve Hakkediş Onay Yönetimi",
          "Rol Tabanlı Yönetim ve Dış Paydaş Davet Etme",
          "Sözleşme Bitiş Süresi ve Bütçe Hatırlatmaları",
          "Detaylı Ürün/Hizmet Tanımlama",
          "Sözleşme Doküman Yönetimi ve Üretici Takibi"
        ]
      }
    ]
  },
  "admin-toolkit": {
    name: "Admin Toolkit",
    title: "Tek portalde Microsoft 365 Servis Yönetimi ve çok daha fazlası",
    description: "Admin Toolkit, Microsoft 365 uygulamalarını yönetmek için kullanıcı dostu bir yönetim merkezi olarak tasarlanmıştır. Azure Active Directory (Entra), SharePoint, Exchange, Teams, XDR dahil olmak üzere 7'den fazla hizmeti tek bir platformdan kontrol edebilirsiniz.",
    gradient: "linear-gradient(135deg, hsl(260 80% 20%), hsl(280 60% 50%))",
    icon: Settings,
    image: "/images/products/admin_toolkit_p3_i1.jpeg",
    features: ["7+ Microsoft 365 Servisi", "Tek Ekrandan Yönetim", "SaaS Uygulaması", "Tasarım & Kimlik Uyumu"],
    modules: [
      {
        name: "Entra (Active Directory) Yönetimi",
        icon: Users,
        desc: "Tüm servislerin temeli olan kullanıcı, grup ve lisans süreçlerinin kapsamlı ve güvenli kontrolü.",
        items: [
          "Hesap ve Misafir Hesap Oluşturma/Yönetimi",
          "MFA/2FA Kullanmayan Hesapların Tespiti ve Raporlanması",
          "Kullanılan ve Toplam Lisans Kapasitelerinin Takibi",
          "Organizasyon Şeması Destekli Kullanıcı Yönetimi",
          "Sadece Domain İçinde veya Mail ile Hızlı Arama",
          "Tek Tıkla Güvenli Hesap Kapatma (Offboarding)"
        ]
      },
      {
        name: "Exchange & Mail İmza Yönetimi",
        icon: Mail,
        desc: "Posta kutusu süreçleri ve yatay/dikey, aydınlık/karanlık temalarda kurumsal çoklu e-posta imza yönetimi.",
        items: [
          "Hızlı Paylaşımlı Posta Kutusu Oluşturma",
          "Kullanılmayan/Ölü Posta Kutularının Tespiti",
          "DMARC & DKIM Optimizasyonları",
          "Yatay/Dikey Tasarım & Açık/Koyu Tema Seçimi",
          "Kampanyalar İçin Mail İmzalarına Reklam Ekleme",
          "4 Farklı Tür Kurumsal Şemaya Uygun İmza Dağıtımı"
        ]
      },
      {
        name: "SharePoint & Teams Yönetimi",
        icon: CloudCog,
        desc: "Ortak çalışma panellerinin ve kurum içi iletişimi tek merkezden efektif bir biçimde raporlanması ve yönetimi.",
        items: [
          "Sadeleştirilmiş Ekrandan Hızlı SharePoint Sitesi Kurulumu",
          "1GB Üzeri Alan Kaplayan Sitelerin Tespiti",
          "Kullanılmayan Şirket Sitelerinin Raporlanması",
          "Gözden Kaçan Site İzinlerini Tek Tıkla Sıfırlama",
          "Ön Tanımlı Filtrelerle İstenen Teams Kanallarını Bulma",
          "Organizasyondaki Yüklü Teams Uygulamalarını İnceleme"
        ]
      },
      {
        name: "Güvenlik, XDR & Intune (Defender for 365)",
        icon: ShieldCheck,
        desc: "Bulut cihazları, mail güvenliği ve denetim kayıtlarına tek elden müdahale sağlayan güçlü güvenlik platformu.",
        items: [
          "Intune Antivirüs, ASR ve Firewall Politikalarının Merkezi Yönetimi",
          "XDR Alertleri, Anti-Phishing ve Anti-Spam Politikaları",
          "Zararlı Yazılım (Malware) ve Güvenli Ek/Link Denetimleri",
          "Denetim Kayıtları (Audit Logs) ve Riskli Giriş Uyarıları",
          "Şüpheli (Riskli) İş Yükü ve Kullanıcı Raporları",
          "Koşullu Erişim (Conditional Access) ve Güvenli Konum Tanımları"
        ]
      }
    ]
  },
  "mailtiv": {
    name: "Mailtiv",
    title: "Profesyonel İletişim İçin Merkezi İmza Yönetimi",
    description: "Mailtiv, kurumsal e-posta imzalarınızı Microsoft 365 ekosistemiyle tamamen entegre bir şekilde yönetmenizi sağlar. Tüm çalışanların imzalarını tek merkezden standartlaştırır ve yönetirsiniz.",
    gradient: "linear-gradient(135deg, hsl(320 80% 20%), hsl(340 60% 40%))",
    icon: Mail,
    image: "/images/products/mailtiv_p5_i1.jpeg",
    features: ["Bulut Tabanlı SaaS", "Tüm Cihazlarda Sorunsuz", "M365 Api Kodsuz Entegrasyon", "Otomatik Bildirimler"],
    modules: [
      {
        name: "Merkezi Yönetim ve Standardizasyon",
        icon: Settings,
        desc: "Kurum kimliğinizi güçlendirecek merkezi, standartlaştırılmış imza yönetimi.",
        items: [
          "Tüm Çalışanların E-Posta İmzalarını Tek Yerden Yönetin",
          "Şirket Logosu, Renkleri ve Yazı Tipleriyle Tam Uyum",
          "Microsoft 365 Outlook İle Derinlemesine Uyumlu",
          "API Entegrasyonu Sayesinde Otomatik Veri Çekme"
        ]
      },
      {
        name: "Dinamik İçerik & Pazarlama",
        icon: LayoutDashboard,
        desc: "İmzalarınızı şirket içi ve dışı pazarlama/iletişim panoları olarak kullanma imkanı.",
        items: [
          "Kampanya Duyuruları ve Banner Ekleme Özelliği",
          "Gelişmiş Sosyal Medya Bağlantıları",
          "Satış ve Pazarlama Hedefli Satır İçi Linkler",
          "İnsan Kaynakları Çalışan Bildirim İmzası Tipi"
        ]
      },
      {
        name: "Süreç Otomasyonu",
        icon: CloudCog,
        desc: "Manuel iş yükünü sıfırlayan akıllı kurulum mekanizmaları.",
        items: [
          "Yeni İşe Giren Çalışanlara Otomatik İmza Sağlanması",
          "Manuel Oluşturma/Güncelleme Maliyetinden Tasarruf",
          "Bulut Tabanlı Yapı ile Anında Dağıtım / Güncelleme",
          "Harici İletişim IT Ekipleri İçin Hazır Tasarım Yükleri"
        ]
      },
      {
        name: "Güvenlik & Compliance",
        icon: ShieldCheck,
        desc: "Verilerinizi güvende tutmak üzere tasarlanmış Microsoft tabanlı mimari.",
        items: [
          "GDPR ve Veri Koruma Standartlarına %100 Uyum",
          "Verilerinizi Kesinlikle Harici Serverda Tutmaz (Microsoft İzni Kullanılır)",
          "Azure Altyapısı ile Üst Düzey Kurumsal Koruma",
          "Maliyet ve Kontrol Standartlarında Güvenilir Yapı"
        ]
      }
    ]
  },
  "sp-hub": {
    name: "SP Hub",
    title: "Kuruma Özel Gelişmiş SharePoint Portali",
    description: "SPHub, iş süreçlerini optimize etmek ve SharePoint’i daha işlevsel hale getirmek için kullanıma hazır çeşitli widget çözümleri sunar. M365 ekosisteminde çalışan, kurumsal kimliğinize tamamen özel bir portaldir. (Admin Toolkit alt ürünüdür)",
    gradient: "linear-gradient(135deg, hsl(140 80% 15%), hsl(160 70% 30%))",
    icon: Database,
    image: "/images/products/sphub_p1_i1.png",
    features: ["Max 5 Saatte Kurulum", "Yepyeni Widget Ekosistemi", "Performans Optimizasyonlu", "Azure GDPR Uyumlu"],
    modules: [
      {
        name: "Özel SharePoint Yönetimi & Arayüz",
        icon: Server,
        desc: "SharePoint'i kendi web siteniz veya şirket içi mobil/web ağınız gibi özelleştirebileceğiniz bir tasarım ortamı.",
        items: [
          "Kurumsal Kimliğe Uygun Özel Arayüz (Marka/Logo/Renk) Tasarımı",
          "Bulut Tabanlı Süreç ve Hızlı Erişim Altyapısı",
          "Kullanıcı İzinlerinin Organizasyon Şemasına Göre Atanması",
          "Site İçerikleri, Belgeler ve Kütüphaneler İçin Otomatik Versiyonlama"
        ]
      },
      {
        name: "İnsan Kaynakları Widget'ları",
        icon: Users,
        desc: "Şirket verimliliğini artıran tüm HR araçları hazır SharePoint entegreli olarak gelir.",
        items: [
          "İşe Alım Yönetimi ve Aday Başvuruları",
          "Seyahat Yönetimi (Rezervasyonlar ve Masraf Beyanları)",
          "Masraf Yönetimi (Dijital Bildirim ve Onay Süreçleri)",
          "Catering Entegreli Dinamik Yemek Menüsü Tablosu"
        ]
      },
      {
        name: "Tedarik & Envanter Widget'ları",
        icon: LayoutDashboard,
        desc: "Sözleşme ve envanter süreçlerini direkt olarak portal üzerinden yürütün.",
        items: [
          "Envanter Yönetimi (QR Kod, Barkod ve Zimmet Takibi)",
          "Satın Alma Talepleri (Teklif Karşılaştırma, İş Akışı Doğrulamaları)",
          "Sözleşme Yönetimi (Bitiş Tarihi, Yenileme Uyarıları)",
          "İçerik Yönetimi (Gelişmiş Filtrelemeli Medya/Doküman Deposu)"
        ]
      },
      {
        name: "Güvenlik & Performans Denetimi",
        icon: ShieldCheck,
        desc: "Microsoft 365 ile aralıksız entegre, denetim dostu şeffaf SharePoint ekosistemi.",
        items: [
          "Tüm İşlem Geçmişinin Loglanması ve İzlenmesi (Audit Logs)",
          "Kullanıcı Rollerine Göre Esnek Yetkilendirme Politikaları",
          "SPHub'ın Güçlü Veri Koruma Kuralları İle İhlal Tespiti",
          "SharePoint Performansını Artıran Altyapı Optimizasyonu"
        ]
      }
    ]
  },
  "compliance-agent": {
    name: "Compliance Agent",
    title: "Kurumsal Uyumluluk, Risk Yönetimi & KVKK",
    description: "İşletmelerin yasal düzenlemelere (KVKK/GDPR vb.), sektörel standartlara ve iç politikalarına uyum sağlamalarını kolaylaştıran Microsoft destekli dijital zeka çözümüdür. (Admin Toolkit alt ürünüdür)",
    gradient: "linear-gradient(135deg, hsl(20 80% 20%), hsl(40 80% 40%))",
    icon: CheckCircle,
    image: "/images/products/compliance_agent_sunum_p3_i1.jpeg",
    features: ["Otomatik Uyumluluk Kontrolleri", "Yapay Zeka (AI) Destekli", "Gerçek Zamanlı Raporlama", "Güçlü Azure Güvenliği"],
    modules: [
      {
        name: "Merkezi Panel ve Raporlama",
        icon: LayoutDashboard,
        desc: "Karmaşık denetim süreçlerini ve uygunsuzlukları tek bir güvenli dashboard üzerinden tespit edin.",
        items: [
          "Kullanıcı Dostu Merkezi Yönetim Arayüzü",
          "Gerçek Zamanlı İzleme ve Görsel Raporlama",
          "Rutinden Kurtaran Yönetim Kararları ve İçgörü Verileri",
          "Ekipler İçin Hazır İhlal/Uyumsuzluk Uyarı Bildirimleri"
        ]
      },
      {
        name: "Regülasyon & Otomatik Uyum",
        icon: Server,
        desc: "Rutin regülasyon uyumluluğunu otomatikleştirerek insan müdahalesi ve insan kaynaklı hataları sıfırlayın.",
        items: [
          "Türkiye (KVKK), Avrupa (GDPR) ve ISO Sistemlerine Tam Destek",
          "Regülasyon Kurallarına Göre Kuruma Özel Konfigürasyon Yapısı",
          "Manuel İncelemeleri Ortadan Kaldıran Periyodik Otomatik Taramalar",
          "Marka İtibarını ve Operasyonel Yükü Korumak Üzere Anlık Uyum Yeteneği"
        ]
      },
      {
        name: "Makine Öğrenimi (AI) & Tahminleme",
        icon: CloudCog,
        desc: "Akıllı tahminleme yöntemleriyle veri güvenliğiniz riske girmeden önce proaktif tedbirler alın.",
        items: [
          "Makine Öğrenimi (ML) Modelleriyle Veri Sınıflandırma ve Düzenleme",
          "Proaktif Risk Algılama ve Zafiyet Analizi Olasılıkları",
          "Otonom Öneri Sistemleri İle Uyumluluk Karar Desteği",
          "Zamanla Öğrenerek Analiz Sürelerinin Optimize Edilmesi"
        ]
      },
      {
        name: "İş Akışı, Kurulum ve API",
        icon: ShieldCheck,
        desc: "Mevcut olan altyapınızla hızlıca entegre olarak işletme içi eğitim/süreç optimizasyonunu devralır.",
        items: [
          "Mevcut İç ve Dış Sistemlere (API) Direkt Entegrasyon Yeteneği",
          "Microsoft 365 (O365, Teams, SharePoint) Uygulamalarıyla Tam Uyum",
          "7/24 Teknik Destek, Rehberlik ve Hızlı/Sorunsuz Kurulum Modeli",
          "Kullanıcıların Adaptasyonunu Geliştiren Hazır Kurum İçi Eğitim Materyalleri"
        ]
      }
    ]
  }
};

const productsList = [
  { id: "booldesk", name: "Booldesk", icon: LayoutDashboard },
  { id: "admin-toolkit", name: "Admin Toolkit", icon: Settings },
  { id: "mailtiv", name: "Mailtiv", icon: Mail },
  { id: "sp-hub", name: "SP Hub", icon: Database },
  { id: "compliance-agent", name: "Compliance Agent", icon: CheckCircle },
];

const Products = () => {
  const [activeTab, setActiveTab] = useState("admin-toolkit"); // Default Admin Toolkit for showcase
  const location = useLocation();

  useEffect(() => {
    // URL hashine göre ilgili tabı açma opsiyonu
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      if (productsList.some(p => p.id === targetId)) {
        setActiveTab(targetId);
      }
    }
  }, [location]);

  const activeProduct = productsData[activeTab] || productsData["admin-toolkit"];
  const ActiveIcon = productsList.find(p => p.id === activeTab)?.icon || Settings;

  return (
    <>
      <Helmet>
        <title>Ürünlerimiz - Admin Toolkit, Booldesk ve Daha Fazlası | Uptexx</title>
        <meta
          name="description"
          content="Uptexx'in kurumsal teknoloji ve yazılım ürünlerini keşfedin: Admin Toolkit, Booldesk, Mailtiv, SP Hub ve Compliance Agent."
        />
        <link rel="canonical" href="https://uptexx.com/urunler" />
      </Helmet>

      {/* ---- Hero ---- */}
      <section className="hero-bg pt-40 pb-24 relative overflow-hidden" id="products-hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex mb-6 animate-fade-in-down">
            <span className="tech-chip tech-chip-inverted">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
              Kurumsal Ürünlerimiz
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 max-w-5xl mx-auto animate-fade-in-up"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            İş Süreçlerinizi Dönüştüren <br className="hidden md:block"/> Hazır Yazılım Çözümleri
          </h1>
          <p className="text-xl text-blue-100/75 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            Booldesk, Admin Toolkit, Mailtiv, SP Hub ve Compliance Agent ile
            şirketinizin dijital altyapısını güçlendirin, zamandan ve maliyetten tasarruf edin.
          </p>
        </div>
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true" style={{ zIndex: 5 }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full" style={{ display: "block", height: 80 }}>
            <defs>
              <linearGradient id="waveGradProducts" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(220, 20%, 97%)" stopOpacity="0" />
                <stop offset="100%" stopColor="hsl(220, 20%, 97%)" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,20 1440,50 L1440,80 L0,80 Z" fill="url(#waveGradProducts)" />
            <path d="M0,55 C360,20 720,80 1080,40 C1260,20 1380,65 1440,60 L1440,80 L0,80 Z" fill="hsl(220, 20%, 97%)" fillOpacity="0.7" />
          </svg>
        </div>
      </section>

      {/* ---- Content Section ---- */}
      <div className="bg-[hsl(220,20%,97%)] border-b border-[hsl(216,20%,90%)] pt-12 pb-32 min-h-screen">
        <div className="container mx-auto px-6">
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16 animate-fade-in-up delay-100">
            {productsList.map((product) => {
              const isActive = activeTab === product.id;
              const Icon = product.icon;
              return (
                <button
                  key={product.id}
                  onClick={() => setActiveTab(product.id)}
                  className={`flex items-center gap-2.5 px-6 py-4 rounded-xl text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-[hsl(216,100%,12%)] text-white shadow-xl scale-105"
                      : "bg-white text-[hsl(216,25%,40%)] hover:bg-blue-50 hover:text-[hsl(216,100%,12%)] hover:shadow-md border border-[hsl(216,30%,92%)]"
                  }`}
                  style={{
                    boxShadow: isActive ? "0 10px 40px -10px hsl(216 100% 12% / 0.3)" : "",
                  }}
                >
                  <Icon size={18} className={isActive ? "text-blue-400" : "text-[hsl(216,25%,60%)]"} />
                  {product.name}
                </button>
              );
            })}
          </div>

          {/* Active Product Detailed View */}
          <div 
            key={activeTab} // Forces re-render on tab switch
            className="animate-fade-in-up"
          >
            {/* Product Hero Banner */}
            <div 
              className="rounded-3xl overflow-hidden mb-12 flex flex-col lg:flex-row shadow-2xl relative"
              style={{ background: activeProduct.gradient }}
            >
              <div className="p-12 md:p-16 flex-1 flex flex-col justify-center relative overflow-hidden text-white z-10 w-full lg:w-1/2">
                <ActiveIcon className="absolute -right-10 -top-10 w-64 h-64 opacity-5 text-white pointer-events-none" />
                <div className="relative z-10 max-w-2xl">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                    <ActiveIcon size={32} className="text-white" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {activeProduct.name}
                  </h2>
                  <h3 className="text-xl md:text-2xl text-white/90 font-medium mb-6 leading-snug">
                    {activeProduct.title}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed mb-8">
                    {activeProduct.description}
                  </p>
                  
                  {activeProduct.features && (
                    <div className="flex flex-wrap gap-3">
                      {activeProduct.features.map((feat: string, i: number) => (
                        <span key={i} className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-white/10 rounded-full border border-white/10 backdrop-blur-sm">
                          <CheckCircle size={14} className="text-blue-300" />
                          {feat}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Product Extracted Image Side */}
              {activeProduct.image && (
                <div className="hidden lg:block w-1/2 relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-[1.03]" 
                    style={{ backgroundImage: `url('${activeProduct.image}')` }}
                  />
                  {/* Gradient Overlay to blend horizontally */}
                  <div 
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{ background: `linear-gradient(to right, ${activeProduct.gradient.split(',')[1]} 0%, transparent 40%)` }}
                  />
                </div>
              )}
            </div>

            {/* Modules / Features Grid (If Data Exists) */}
            {activeProduct.modules && activeProduct.modules.length > 0 ? (
              <div className="mb-16">
                <div className="text-center mb-12">
                  <div className="section-eyebrow justify-center mb-4">Ürün Modülleri</div>
                  <h3 className="text-3xl font-bold text-[hsl(216,100%,12%)]" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {activeProduct.name} Detaylı Özellikleri
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {activeProduct.modules.map((module: any, idx: number) => {
                    const ModIcon = module.icon;
                    return (
                      <div 
                        key={idx} 
                        className="bg-white p-8 rounded-3xl border border-[hsl(216,30%,90%)] hover:shadow-2xl transition-all duration-300 group"
                      >
                        <div className="flex items-start gap-5 mb-6">
                          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                            <ModIcon size={26} />
                          </div>
                          <div>
                            <h4 className="text-2xl font-bold text-[hsl(216,100%,12%)] mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                              {module.name}
                            </h4>
                            <p className="text-[hsl(216,20%,40%)] text-sm leading-relaxed">
                              {module.desc}
                            </p>
                          </div>
                        </div>

                        <ul className="space-y-4 bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                          {module.items.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <CheckCircle size={12} className="text-green-700" />
                              </span>
                              <span className="text-[hsl(216,30%,25%)] font-medium text-sm">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              // Placeholder for missing PDF content
              <div className="bg-white p-12 rounded-3xl border border-dashed border-blue-200 text-center animate-pulse">
                <FileText size={48} className="text-blue-300 mx-auto mb-4 opacity-50" />
                <h3 className="text-2xl font-bold text-[hsl(216,100%,12%)] mb-3">
                  Detaylı Döküman Bekleniyor
                </h3>
                <p className="text-[hsl(216,20%,40%)] max-w-lg mx-auto">
                  Bu ürüne ait özellik tablosu modülleri, ilgili PDF yüklendiğinde Admin Toolkit örneğindeki gibi detaylandırılacaktır.
                </p>
              </div>
            )}

            {/* Referanslar Slider (Marquee) */}
            <div className="mt-16 pb-8">
              <div className="text-center mb-10">
                <div className="section-eyebrow justify-center mb-4">Referanslarımız</div>
                <h3 className="text-2xl font-bold text-[hsl(216,100%,12%)]" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Bize Güvenen Markalar
                </h3>
              </div>

              <div className="w-full overflow-hidden bg-[hsl(220,20%,97%)] py-12 relative" style={{ borderTop: "1px solid hsl(216 20% 90%)", borderBottom: "1px solid hsl(216 20% 90%)" }}>
                {/* Sol ve Sağ gradient karartması pürüzsüz kayma efekti için */}
                <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[hsl(220,20%,97%)] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[hsl(220,20%,97%)] to-transparent z-10 pointer-events-none"></div>

                <div className="flex overflow-x-hidden group">
                  <div className="animate-marquee-scroll whitespace-nowrap flex space-x-20 items-center">
                    {/* Logolar buraya harici parçalanarak gelecek. Placeholder olarak 16 slot ayrıldı */}
                    {[...Array(16)].map((_, index) => (
                      <div key={`ref1-${index}`} className="flex items-center justify-center w-56 h-32 opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300">
                        <img 
                          src={`/images/references/ref_${index + 1}.png`} 
                          alt={`Referans ${index + 1}`} 
                          className="max-h-24 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 mix-blend-multiply"
                          onError={(e) => {
                            // Dosya yoksa kırık ikon yerine şık bir yükleniyor durumu
                            (e.target as HTMLImageElement).src = "/placeholder.svg"; 
                            (e.target as HTMLImageElement).classList.add("opacity-30");
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="animate-marquee-scroll whitespace-nowrap flex space-x-20 items-center ml-20">
                    {/* Döngünün kesintisiz devam etmesi için 2. set (Seamless Loop) */}
                    {[...Array(16)].map((_, index) => (
                      <div key={`ref2-${index}`} className="flex items-center justify-center w-56 h-32 opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300">
                        <img 
                          src={`/images/references/ref_${index + 1}.png`} 
                          alt={`Referans ${index + 1}`} 
                          className="max-h-24 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 mix-blend-multiply"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/placeholder.svg";
                            (e.target as HTMLImageElement).classList.add("opacity-30");
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Products;