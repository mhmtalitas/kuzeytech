import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Eye, Clock, BookOpen, TrendingUp } from "lucide-react";
import SEO from "@/components/SEO";

const Blog = () => {
  const createSlug = (title: string) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

  const featuredPost = {
    title: "Microsoft Copilot ve AI Agents ile Dijital Dönüşüm: İşletmeler İçin Kapsamlı Rehber",
    excerpt:
      "Microsoft Copilot implementasyonu ile işletmeler ortalama %40 verimlilik artışı sağlıyor. Bu kapsamlı rehberde AI Agents geliştirme süreçleri, Microsoft Azure entegrasyonu ve Copilot'un KOBİ'lere sağladığı rekabet avantajlarını ele alıyoruz. Microsoft sertifikalı uzmanlarımızın deneyimleriyle.",
    author: "Serkan Günaçtı",
    authorTitle: "Kurucu & CEO, Microsoft Certified Expert",
    date: "15 Şubat 2025",
    category: "Microsoft Copilot ve Yapay Zeka",
    readTime: "8 dk",
    views: "2,841",
    initials: "AI",
    slug: createSlug("Microsoft Copilot ve AI Agents ile Dijital Donusum"),
    tags: ["Microsoft Copilot", "Yapay Zeka", "Dijital Dönüşüm", "Azure"],
  };

  const blogPosts = [
    {
      title: "Microsoft Azure Danışmanlığı: Kurumsal Bulut Geçişinde En Kritik 10 Adım",
      excerpt:
        "Azure bulut platformuna geçiş yaparken dikkat edilmesi gereken maliyet optimizasyonu, güvenlik yapılandırması ve hibrit altyapı kurulumu. Azure danışmanlığı sürecinde şirketlerin yaptığı en yaygın 10 hata ve çözümleri.",
      author: "Mehmet Başkan",
      authorTitle: "Teknik Operasyon Müdürü",
      date: "28 Ocak 2025",
      category: "Microsoft Azure",
      readTime: "10 dk",
      views: "3,156",
      initials: "AZ",
      slug: createSlug("Microsoft Azure Danismanligi Kurumsal Bulut Gecisinde En Kritik 10 Adim"),
      tags: ["Azure", "Bulut Bilişim", "Cloud Migration", "Maliyet Optimizasyonu"],
    },
    {
      title: "Microsoft 365 ve Teams Entegrasyonu: Hibrit Çalışma Modeli Kurulumu",
      excerpt:
        "Hibrit çalışma modelini benimseyen şirketler için Microsoft 365 ve Teams'in doğru yapılandırılması. SharePoint, OneDrive entegrasyonu ve Microsoft Intune ile cihaz yönetimi rehberi.",
      author: "Mehmet Ali Taş",
      authorTitle: "Yazılım Geliştirici",
      date: "20 Ocak 2025",
      category: "Microsoft 365 ve Teams",
      readTime: "7 dk",
      views: "1,982",
      initials: "M3",
      slug: createSlug("Microsoft 365 ve Teams Entegrasyonu Hibrit Calisma Modeli"),
      tags: ["Microsoft 365", "Teams", "Hibrit Çalışma", "SharePoint"],
    },
    {
      title: "Power Platform Geliştirme: PowerApps ile Kurumsal Otomasyon Nasıl Yapılır?",
      excerpt:
        "Power Apps ve Power Automate kullanarak iş süreçlerini otomatikleştirme rehberi. Low-code/no-code yaklaşımla yazılım maliyetlerini %60 azaltmak mümkün. Power BI ile veri görselleştirme entegrasyonu.",
      author: "Osman Gülay",
      authorTitle: "Satış Yöneticisi",
      date: "12 Ocak 2025",
      category: "Power Platform",
      readTime: "6 dk",
      views: "1,473",
      initials: "PP",
      slug: createSlug("Power Platform Gelistirme PowerApps ile Kurumsal Otomasyon"),
      tags: ["Power Apps", "Power Automate", "Power BI", "Low-Code"],
    },
    {
      title: "Siber Güvenlik 2025: Microsoft Defender ve Azure Security Center ile Kurumsal Koruma",
      excerpt:
        "KOBİ ve kurumsal şirketler için Microsoft Defender, Azure Security Center ve çok faktörlü kimlik doğrulama (MFA) implementasyonu. Siber tehdit koruması ve uyumluluk (compliance) yönetimi kapsamlı rehber.",
      author: "Serkan Günaçtı",
      authorTitle: "Kurucu & CEO",
      date: "5 Ocak 2025",
      category: "Siber Güvenlik",
      readTime: "9 dk",
      views: "2,218",
      initials: "CS",
      slug: createSlug("Siber Guvenlik 2025 Microsoft Defender Azure Security Center"),
      tags: ["Siber Güvenlik", "Microsoft Defender", "MFA", "Azure Security"],
    },
    {
      title: "Veeam Backup ile Azure Yedekleme: İş Sürekliliği Planlaması Rehberi",
      excerpt:
        "Veeam Backup & Replication ve Azure Backup entegrasyonu ile felaket kurtarma (disaster recovery) planlaması. RTO/RPO hedeflerini nasıl belirlersiniz? Veri yönetimi ve yedekleme stratejileri.",
      author: "Mehmet Başkan",
      authorTitle: "Teknik Operasyon Müdürü",
      date: "28 Aralık 2024",
      category: "Veri Yönetimi",
      readTime: "8 dk",
      views: "1,340",
      initials: "VB",
      slug: createSlug("Veeam Backup ile Azure Yedekleme Is Surekliligi Planlamasi"),
      tags: ["Veeam", "Azure Backup", "Disaster Recovery", "İş Sürekliliği"],
    },
    {
      title: "Power BI ile Kurumsal Veri Görselleştirme: Dashboard Tasarımı ve İş Zekası",
      excerpt:
        "Microsoft Power BI ile satış, finans ve operasyon verilerini gerçek zamanlı izleme. MS Fabric veri platformu ve Self-service analytics ile iş zekası raporlarını nasıl oluşturursunuz?",
      author: "Mehmet Ali Taş",
      authorTitle: "Yazılım Geliştirici",
      date: "18 Aralık 2024",
      category: "Power BI ve Veri Analizi",
      readTime: "7 dk",
      views: "1,895",
      initials: "BI",
      slug: createSlug("Power BI ile Kurumsal Veri Gorsellestime Dashboard"),
      tags: ["Power BI", "Veri Analizi", "Business Intelligence", "Dashboard"],
    },
    {
      title: "Kurumsal Web Yazılım Geliştirme: React ve Next.js ile Ölçeklenebilir Sistemler",
      excerpt:
        "Modern kurumsal web uygulamaları için React, Next.js ve TypeScript kullanımı. CRM yazılımı, ERP entegrasyonu ve Progressive Web App (PWA) geliştirme süreçleri. API mimarisi ve performans optimizasyonu.",
      author: "Mehmet Ali Taş",
      authorTitle: "Yazılım Geliştirici",
      date: "10 Aralık 2024",
      category: "Web Yazılım Geliştirme",
      readTime: "11 dk",
      views: "2,503",
      initials: "WD",
      slug: createSlug("Kurumsal Web Yazilim Gelistirme React Nextjs Olceklenebilir"),
      tags: ["React", "Next.js", "Web Geliştirme", "CRM", "ERP"],
    },
    {
      title: "Microsoft Copilot Studio ile Özel AI Chatbot Geliştirme Rehberi",
      excerpt:
        "Copilot Studio kullanarak kurumunuza özel yapay zeka asistanı ve chatbot oluşturma. Power Virtual Agents entegrasyonu, Teams chatbot ve müşteri hizmetleri otomasyonu için adım adım rehber.",
      author: "Serkan Günaçtı",
      authorTitle: "Kurucu & CEO",
      date: "2 Aralık 2024",
      category: "Microsoft Copilot ve Yapay Zeka",
      readTime: "9 dk",
      views: "1,764",
      initials: "CS",
      slug: createSlug("Microsoft Copilot Studio Ozel AI Chatbot Gelistirme"),
      tags: ["Copilot Studio", "AI Chatbot", "Power Virtual Agents", "Otomasyon"],
    },
    {
      title: "Kurumsal SEO Danışmanlığı: B2B Şirketler İçin Teknik SEO Stratejileri",
      excerpt:
        "B2B teknoloji şirketleri için teknik SEO, içerik stratejisi ve Google'da üst sıralara çıkma rehberi. Core Web Vitals optimizasyonu, schema markup ve yerel SEO ile organik trafik artırma.",
      author: "Osman Gülay",
      authorTitle: "Satış Yöneticisi",
      date: "22 Kasım 2024",
      category: "Kurumsal SEO",
      readTime: "12 dk",
      views: "3,412",
      initials: "SE",
      slug: createSlug("Kurumsal SEO Danismanligi B2B Sirketler Icin Teknik SEO"),
      tags: ["SEO", "Teknik SEO", "B2B", "Google", "Organik Trafik"],
    },
    {
      title: "React Native vs Flutter 2025: Mobil Uygulama Geliştirmede Doğru Seçim",
      excerpt:
        "React Native ve Flutter'ın 2025 itibarıyla detaylı karşılaştırması. Performans, geliştirme hızı, maliyet ve App Store optimizasyonu açısından hangi framework kurumsal mobil projeler için daha uygun?",
      author: "Mehmet Ali Taş",
      authorTitle: "Yazılım Geliştirici",
      date: "15 Kasım 2024",
      category: "Mobil Uygulama",
      readTime: "8 dk",
      views: "2,187",
      initials: "RN",
      slug: createSlug("React Native vs Flutter 2025 Mobil Uygulama Gelistirme"),
      tags: ["React Native", "Flutter", "Mobil Uygulama", "iOS", "Android"],
    },
    {
      title: "Exchange Online Geçişi: On-Premise'den Buluta Adım Adım Migrasyon",
      excerpt:
        "Exchange Server'dan Exchange Online'a güvenli geçiş planlaması. Hybrid Exchange yapılandırması, e-posta güvenliği, Defender for Office 365 ve arşivleme politikaları. Migrasyon sürecinde dikkat edilmesi gerekenler.",
      author: "Mehmet Başkan",
      authorTitle: "Teknik Operasyon Müdürü",
      date: "5 Kasım 2024",
      category: "Microsoft 365 ve Teams",
      readTime: "10 dk",
      views: "1,629",
      initials: "EX",
      slug: createSlug("Exchange Online Gecisi On-Premise Buluta Adim Adim Migrasyon"),
      tags: ["Exchange Online", "Migrasyon", "E-posta Güvenliği", "Microsoft 365"],
    },
    {
      title: "Azure DevOps ve CI/CD: Yazılım Geliştirme Süreçlerini Otomatize Etme",
      excerpt:
        "Azure DevOps ile sürekli entegrasyon (CI) ve sürekli dağıtım (CD) pipeline kurulumu. GitHub Actions entegrasyonu, Docker containerization ve Kubernetes ile modern yazılım geliştirme DevOps pratikleri.",
      author: "Mehmet Ali Taş",
      authorTitle: "Yazılım Geliştirici",
      date: "25 Ekim 2024",
      category: "Microsoft Azure",
      readTime: "13 dk",
      views: "1,942",
      initials: "DO",
      slug: createSlug("Azure DevOps CICD Yazilim Gelistirme Sureclerini Otomatize"),
      tags: ["Azure DevOps", "CI/CD", "Docker", "Kubernetes", "Otomasyon"],
    },
  ];

  const categories = [
    { name: "Microsoft Copilot ve Yapay Zeka", count: 18, color: "hsl(216 100% 12%)" },
    { name: "Microsoft Azure", count: 15, color: "hsl(216 100% 12%)" },
    { name: "Power Platform", count: 14, color: "hsl(216 100% 12%)" },
    { name: "Microsoft 365 ve Teams", count: 13, color: "hsl(216 100% 12%)" },
    { name: "Power BI ve Veri Analizi", count: 9, color: "hsl(216 100% 12%)" },
    { name: "Web Yazılım Geliştirme", count: 12, color: "hsl(216 100% 12%)" },
    { name: "Siber Güvenlik", count: 8, color: "hsl(216 100% 12%)" },
    { name: "Veri Yönetimi", count: 7, color: "hsl(216 100% 12%)" },
    { name: "Mobil Uygulama", count: 6, color: "hsl(216 100% 12%)" },
    { name: "Kurumsal SEO", count: 5, color: "hsl(216 100% 12%)" },
    { name: "Azure DevOps", count: 4, color: "hsl(216 100% 12%)" },
  ];

  const popularPosts = [
    { title: "Kurumsal SEO Danışmanlığı: B2B Şirketler İçin Teknik SEO Stratejileri", date: "22 Kasım 2024", views: "3,412" },
    { title: "Microsoft Azure Danışmanlığı: Kurumsal Bulut Geçişinde En Kritik 10 Adım", date: "28 Ocak 2025", views: "3,156" },
    { title: "Microsoft Copilot ve AI Agents ile Dijital Dönüşüm", date: "15 Şubat 2025", views: "2,841" },
  ];

  const allTags = [
    "Microsoft Copilot", "Azure", "Power Platform", "Teams", "Yapay Zeka",
    "Siber Güvenlik", "Veeam", "Power BI", "React", "Flutter",
    "SEO", "DevOps", "Cloud Migration", "Low-Code", "İş Sürekliliği",
  ];

  return (
    <div className="min-h-screen bg-[hsl(220,20%,97%)]">
      <SEO
        title="Teknoloji Blogu - Microsoft Azure, AI ve Dijital Dönüşüm Makaleleri | Uptexx"
        description="Microsoft Azure, Copilot, Power Platform, yapay zeka danışmanlığı, siber güvenlik ve web yazılım geliştirme konularında uzman makaleler. Uptexx teknoloji bloğunda sektör deneyimlerimizi paylaşıyoruz."
        keywords="microsoft azure blog, copilot rehberi, power platform makaleleri, yapay zeka danışmanlığı, siber güvenlik, dijital dönüşüm makaleleri, kurumsal teknoloji blog, exchange online, teams entegrasyonu, veeam backup"
        canonical="/blog"
      />

      {/* ---- Hero ---- */}
      <section className="hero-bg pt-40 pb-24 relative overflow-hidden" id="blog-hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex mb-6 animate-fade-in-down">
            <span className="tech-chip tech-chip-inverted">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
              Blog &amp; Uzman Makaleler
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 max-w-4xl mx-auto animate-fade-in-up"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Microsoft, Azure ve Yapay Zeka Teknoloji Blogu
          </h1>
          <p className="text-xl text-blue-100/75 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            Microsoft Azure, Copilot, Power Platform, siber güvenlik ve dijital dönüşüm konularında
            uzman ekibimizin sektör deneyimlerine dayalı teknik rehberler, başarı hikayeleri ve stratejik içerikler.
          </p>
          {/* Stats chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8 animate-fade-in-up delay-200">
            {[
              { icon: BookOpen, text: "120+ Makale" },
              { icon: TrendingUp, text: "50.000+ Okuyucu" },
              { icon: User, text: "4 Uzman Yazar" },
            ].map(({ icon: Icon, text }, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-xs font-medium text-white/70 px-4 py-2 rounded-full"
                style={{ background: "hsl(0 0% 100% / 0.09)", border: "1px solid hsl(0 0% 100% / 0.15)" }}>
                <Icon size={13} className="text-blue-300" />
                {text}
              </span>
            ))}
          </div>
        </div>
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true" style={{ zIndex: 5 }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full" style={{ display: "block", height: 80 }}>
            <defs>
              <linearGradient id="waveGradBlog" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(220, 20%, 97%)" stopOpacity="0" />
                <stop offset="100%" stopColor="hsl(220, 20%, 97%)" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,20 1440,50 L1440,80 L0,80 Z" fill="url(#waveGradBlog)" />
            <path d="M0,55 C360,20 720,80 1080,40 C1260,20 1380,65 1440,60 L1440,80 L0,80 Z" fill="hsl(220, 20%, 97%)" fillOpacity="0.7" />
          </svg>
        </div>
      </section>

      <div className="container mx-auto px-6 py-24">

        {/* ---- Featured Post ---- */}
        <section className="mb-16" id="featured-post">
          <div className="section-eyebrow mb-6">Öne Çıkan Yazı</div>
          <div className="featured-blog-card grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">
            {/* Left visual */}
            <div
              className="relative flex items-center justify-center p-12 min-h-[260px]"
              style={{ background: "linear-gradient(135deg, hsl(216 100% 11%), hsl(216 80% 18%))" }}
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "linear-gradient(hsl(214 50% 65% / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(214 50% 65% / 0.08) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
                aria-hidden="true"
              />
              <div className="relative z-10 text-center">
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-float"
                  style={{ background: "hsl(0 0% 100% / 0.1)", border: "1.5px solid hsl(0 0% 100% / 0.15)" }}
                >
                  <span className="text-3xl font-extrabold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {featuredPost.initials}
                  </span>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 px-3 py-1.5 rounded-full mb-4 block w-fit mx-auto"
                  style={{ background: "hsl(0 0% 100% / 0.12)", border: "1px solid hsl(0 0% 100% / 0.18)" }}
                >
                  <BookOpen size={11} />
                  Öne Çıkan
                </span>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 justify-center mt-3">
                  {featuredPost.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-medium text-white/60 px-2 py-0.5 rounded-full"
                      style={{ background: "hsl(0 0% 100% / 0.08)", border: "1px solid hsl(0 0% 100% / 0.12)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="p-8 md:p-10 bg-white flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="text-xs font-medium rounded-full px-3 py-1">
                  {featuredPost.category}
                </Badge>
                <div className="flex items-center gap-1 text-xs text-[hsl(216,20%,50%)]">
                  <Calendar size={11} />
                  {featuredPost.date}
                </div>
              </div>
              <h2
                className="text-xl md:text-2xl font-bold text-[hsl(216,100%,12%)] mb-4 leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {featuredPost.title}
              </h2>
              <p className="text-[hsl(216,20%,45%)] text-sm leading-relaxed mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <div className="text-xs font-semibold text-[hsl(216,100%,12%)]">{featuredPost.author}</div>
                  <div className="text-[10px] text-[hsl(216,20%,55%)]">{featuredPost.authorTitle}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3 text-xs text-[hsl(216,20%,50%)]">
                    <div className="flex items-center gap-1"><Clock size={11} />{featuredPost.readTime}</div>
                    <div className="flex items-center gap-1"><Eye size={11} />{featuredPost.views}</div>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    state={{ post: featuredPost }}
                    id="featured-read-more"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white px-4 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 ml-3"
                    style={{
                      background: "linear-gradient(135deg, hsl(216 100% 14%), hsl(216 90% 20%))",
                      boxShadow: "0 2px 8px hsl(216 100% 12% / 0.22)",
                    }}
                  >
                    Devamını Oku
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- Posts + Sidebar Grid ---- */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Blog Posts */}
          <div className="lg:col-span-3" id="blog-posts">
            <div className="flex items-center justify-between mb-8">
              <div className="section-eyebrow">Son Makaleler</div>
              <span className="text-xs text-[hsl(216,20%,50%)]">{blogPosts.length} makale</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="card-pro flex flex-col overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${(index % 4) * 60}ms` }}
                >
                  {/* Thumbnail */}
                  <div className="blog-thumb flex-shrink-0 rounded-none relative">
                    <span className="blog-thumb-text">{post.initials}</span>
                    {/* Trending indicator for high-view posts */}
                    {parseInt(post.views.replace(/,/g, "")) > 2000 && (
                      <div className="absolute top-3 right-3 flex items-center gap-1 text-[10px] font-semibold text-white px-2 py-1 rounded-full"
                        style={{ background: "hsl(16 90% 55% / 0.9)" }}>
                        <TrendingUp size={9} />
                        Popüler
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-grow gap-3">
                    {/* Meta */}
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs rounded-full px-2.5 py-0.5 font-medium">
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-[10px] text-[hsl(216,20%,52%)]">
                        <Calendar size={10} />
                        {post.date}
                      </div>
                    </div>

                    {/* Title */}
                    <Link
                      to={`/blog/${post.slug}`}
                      state={{ post }}
                      className="font-bold text-[hsl(216,100%,12%)] text-sm leading-snug hover:text-[hsl(216,80%,28%)] transition-colors"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {post.title}
                    </Link>

                    {/* Excerpt */}
                    <p className="text-[hsl(216,20%,48%)] text-xs leading-relaxed line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {post.tags.slice(0, 3).map((tag, ti) => (
                        <span key={ti}
                          className="text-[9px] font-medium px-1.5 py-0.5 rounded"
                          style={{ background: "hsl(216 100% 12% / 0.06)", color: "hsl(216 70% 30%)" }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer meta */}
                    <div className="flex items-center justify-between pt-3 border-t border-[hsl(213,20%,92%)] mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0"
                          style={{ background: "linear-gradient(135deg, hsl(216 100% 12%), hsl(216 80% 22%))" }}>
                          {post.author.split(" ").map(w => w[0]).join("").slice(0, 2)}
                        </div>
                        <div>
                          <div className="text-[10px] font-semibold text-[hsl(216,50%,28%)]">
                            {post.author.split(" ").slice(0, 2).join(" ")}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-[10px] text-[hsl(216,20%,54%)]">
                        <div className="flex items-center gap-1"><Clock size={10} />{post.readTime}</div>
                        <div className="flex items-center gap-1"><Eye size={10} />{post.views}</div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-10">
              <button
                id="blog-load-more"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold border-[1.5px] border-[hsl(216,100%,12%,0.2)] text-[hsl(216,100%,12%)] hover:bg-[hsl(216,100%,12%,0.04)] hover:border-[hsl(216,100%,12%,0.4)] transition-all duration-200"
              >
                Daha Fazla Makale Yükle
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-5" id="blog-sidebar">

            {/* Popular Posts */}
            <div className="sidebar-card">
              <div className="px-5 py-4 border-b border-[hsl(213,20%,92%)] flex items-center gap-2">
                <TrendingUp size={14} className="text-[hsl(216,100%,12%)]" />
                <h2 className="font-bold text-[hsl(216,100%,12%)] text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Popüler Makaleler
                </h2>
              </div>
              <div className="p-4 space-y-4">
                {popularPosts.map((p, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: "linear-gradient(135deg, hsl(216 100% 12%), hsl(216 80% 22%))", minWidth: 36 }}
                    >
                      0{i + 1}
                    </div>
                    <div>
                      <Link to="#" className="font-semibold text-[hsl(216,100%,12%)] text-xs hover:text-[hsl(216,70%,32%)] transition-colors line-clamp-2 leading-snug"
                        style={{ fontFamily: "'Syne', sans-serif" }}>
                        {p.title}
                      </Link>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1 text-[10px] text-[hsl(216,20%,54%)]">
                          <Calendar size={9} />{p.date}
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-[hsl(216,20%,54%)]">
                          <Eye size={9} />{p.views}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="sidebar-card">
              <div className="px-5 py-4 border-b border-[hsl(213,20%,92%)]">
                <h2 className="font-bold text-[hsl(216,100%,12%)] text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Kategoriler
                </h2>
              </div>
              <div className="p-4 space-y-0.5">
                {categories.map((cat, i) => (
                  <div key={i} className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[hsl(216,100%,12%,0.04)] transition-colors cursor-pointer group">
                    <span className="text-xs text-[hsl(216,20%,45%)] group-hover:text-[hsl(216,100%,12%)] transition-colors leading-snug">
                      {cat.name}
                    </span>
                    <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full flex-shrink-0 ml-2"
                      style={{ background: "hsl(216 100% 12% / 0.07)", color: "hsl(216 70% 32%)" }}>
                      {cat.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags Cloud */}
            <div className="sidebar-card">
              <div className="px-5 py-4 border-b border-[hsl(213,20%,92%)]">
                <h2 className="font-bold text-[hsl(216,100%,12%)] text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Etiketler
                </h2>
              </div>
              <div className="p-4 flex flex-wrap gap-2">
                {allTags.map((tag, i) => (
                  <span key={i}
                    className="text-[10px] font-medium px-2.5 py-1 rounded-full cursor-pointer transition-all duration-150 hover:-translate-y-0.5"
                    style={{ background: "hsl(216 100% 12% / 0.06)", color: "hsl(216 60% 32%)", border: "1px solid hsl(216 100% 12% / 0.1)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "hsl(216 100% 12% / 0.12)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "hsl(216 100% 12% / 0.06)"; }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div
              className="rounded-xl p-6 relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, hsl(216 100% 11%), hsl(216 80% 18%))" }}
            >
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: "linear-gradient(hsl(214 50% 65% / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(214 50% 65% / 0.08) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }} aria-hidden="true" />
              <div className="relative z-10">
                <h3 className="font-bold text-white text-sm mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Haftalık Teknoloji Bülteni
                </h3>
                <p className="text-blue-200/65 text-xs mb-4 leading-relaxed">
                  Microsoft Azure, AI ve dijital dönüşüm konularındaki yeni makalelerden ilk siz haberdar olun.
                </p>
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="w-full px-4 py-2.5 rounded-xl text-sm mb-3 outline-none"
                  style={{ background: "hsl(0 0% 100% / 0.12)", color: "white", border: "1px solid hsl(0 0% 100% / 0.15)" }}
                  aria-label="E-posta aboneliği"
                />
                <button
                  id="newsletter-subscribe"
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-[hsl(216,100%,12%)] bg-white transition-all hover:shadow-md"
                >
                  Ücretsiz Abone Ol
                </button>
                <p className="text-blue-200/40 text-[10px] text-center mt-2">
                  Spam yok. Dilediğiniz zaman iptal edebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---- CTA ---- */}
        <section className="mt-20 cta-banner px-8 py-16 text-center" id="blog-cta">
          <div className="relative z-10 max-w-xl mx-auto">
            <div className="tech-chip tech-chip-inverted inline-flex mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
              Ücretsiz Danışmanlık
            </div>
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Teknoloji Danışmanlığı İhtiyacınız Var mı?
            </h2>
            <p className="text-blue-100/70 mb-10 text-lg">
              Blog yazılarımızdan ilham aldınız ve bu teknolojileri işletmenizde uygulamak istiyorsunuz?
              Uzman ekibimizle ücretsiz danışmanlık alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/iletisim"
                id="blog-cta-contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-[hsl(216,100%,12%)] bg-white transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
                style={{ boxShadow: "0 4px 16px hsl(0 0% 0% / 0.15)" }}
              >
                Ücretsiz Danışmanlık
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/hizmetler"
                id="blog-cta-services"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                style={{ background: "hsl(0 0% 100% / 0.1)", border: "1.5px solid hsl(0 0% 100% / 0.25)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "hsl(0 0% 100% / 0.18)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "hsl(0 0% 100% / 0.1)"; }}
              >
                Hizmetlerimizi İnceleyin
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;