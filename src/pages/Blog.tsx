import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Eye, Clock } from "lucide-react";
import SEO from "@/components/SEO";

const Blog = () => {
  // Helper function to create a slug from a title
  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric chars
      .replace(/\s+/g, '-')        // Replace spaces with - 
      .replace(/-+/g, '-');       // Replace multiple - with single - 
  };

  const featuredPost = {
    title: "Microsoft Copilot ve AI Agents ile Dijital Dönüşüm: Başarı Hikayesi",
    excerpt: "Trabzon'da Microsoft Copilot implementasyonu ile %40 verimlilik artışı sağlayan işletmelerin deneyimleri. Yapay zeka danışmanlığı süreçleri ve Microsoft Azure entegrasyonu başarı hikayeleri.",
    author: "Ahmet Kaya - Microsoft Certified Expert",
    date: "15 Aralık 2024",
    category: "Microsoft Copilot ve Yapay Zeka",
    readTime: "8 dk",
    views: "1,245",
    image: "AI",
    slug: createSlug("Microsoft Copilot ve AI Agents ile Dijital Dönüşüm: Başarı Hikayesi")
  };

  const blogPosts = [
    {
      title: "Power Platform Geliştirme: PowerApps ve Power Automate ile Kurumsal Otomasyon",
      excerpt: "Microsoft Power Platform, PowerApps ve Power Automate kullanarak kurumsal iş süreçlerini otomatikleştirme rehberi. Low-code/no-code çözümlerle verimlilik artışı sağlayın.",
      author: "Elif Demir - Power Platform Specialist",
      date: "12 Aralık 2024",
      category: "Power Platform ve PowerApps",
      readTime: "6 dk",
      views: "892",
      image: "PA",
      slug: createSlug("Power Platform Geliştirme: PowerApps ve Power Automate ile Kurumsal Otomasyon")
    },
    {
      title: "Microsoft Azure Danışmanlığı: Bulut Bilişim Geçişinde 10 Kritik Başarı Faktörü",
      excerpt: "Microsoft Azure bulut bilişim çözümlerine geçiş sürecinde dikkat edilmesi gereken kritik noktalar. Azure danışmanlığı ile hibrit altyapı kurulumu en iyi pratikleri.",
      author: "Mehmet Şahin - Azure Solutions Architect",
      date: "10 Aralık 2024",
      category: "Microsoft Azure ve Bulut Teknolojileri",
      readTime: "10 dk",
      views: "1,156",
      image: "CL",
      slug: createSlug("Microsoft Azure Danışmanlığı: Bulut Bilişim Geçişinde 10 Kritik Başarı Faktörü")
    },
    {
      title: "Trabzon Mobil Uygulama Geliştirme: React Native vs Flutter Karşılaştırması",
      excerpt: "Mobil uygulama geliştirme framework seçiminde React Native ve Flutter detaylı karşılaştırması. Cross-platform mobil çözümler için uzman önerileri.",
      author: "Zeynep Yılmaz - Mobile Developer",
      date: "8 Aralık 2024",
      category: "Web Yazılım Geliştirme",
      readTime: "7 dk",
      views: "743",
      image: "RN",
      slug: createSlug("Trabzon Mobil Uygulama Geliştirme: React Native vs Flutter Karşılaştırması")
    },
    {
      title: "Siber Güvenlik Yazılımı ve Microsoft Defender: KOBİ'ler İçin Koruma Stratejileri",
      excerpt: "Trabzon ve Karadeniz bölgesi KOBİ'leri için siber güvenlik yazılımı çözümleri ve Microsoft Defender implementasyonu. Azure Security Center ile kurumsal güvenlik.",
      author: "Can Özkan - Cybersecurity Specialist",
      date: "5 Aralık 2024",
      category: "Siber Güvenlik Yazılımı",
      readTime: "5 dk",
      views: "658",
      image: "CS",
      slug: createSlug("Siber Güvenlik Yazılımı ve Microsoft Defender: KOBİ'ler İçin Koruma Stratejileri")
    },
    {
      title: "Power BI ve Veri Analizi: Raporlama Sistemleri ile İş Zekası Çözümleri",
      excerpt: "Microsoft Power BI ile veri analizi yazılımı ve raporlama sistemlerinin kurumsal kullanımı. İş zekası (Business Intelligence) uygulamaları ve veri yönetimi stratejileri.",
      author: "Fatma Arslan - BI Consultant",
      date: "3 Aralık 2024",
      category: "Power BI ve Veri Analizi",
      readTime: "9 dk",
      views: "1,023",
      image: "PB",
      slug: createSlug("Power BI ile Veri Görselleştirme: İleri Teknikler")
    },
    {
      title: "E-ticaret Sitesi SEO Optimizasyonu: Kapsamlı Rehber",
      excerpt: "E-ticaret sitenizin arama motorlarında üst sıralarda yer alması için uygulamanız gereken stratejiler.",
      author: "Ahmet Kaya",
      date: "1 Aralık 2024",
      category: "SEO",
      readTime: "12 dk",
      views: "1,389",
      image: "SE",
      slug: createSlug("E-ticaret Sitesi SEO Optimizasyonu: Kapsamlı Rehber")
    }
  ];

  const categories = [
    { name: "Microsoft Copilot ve Yapay Zeka", count: 15 },
    { name: "Microsoft Azure ve Bulut Teknolojileri", count: 12 },
    { name: "Power Platform ve PowerApps", count: 14 },
    { name: "Microsoft Teams ve Office", count: 13 },
    { name: "Power BI ve Veri Analizi", count: 8 },
    { name: "Web Yazılım Geliştirme", count: 11 },
    { name: "Siber Güvenlik Yazılımı", count: 6 },
    { name: "Power Automate ve Otomasyon", count: 9 },
    { name: "Başarı Hikayeleri", count: 7 },
    { name: "Sertifikalar ve Yetkinlikler", count: 4 },
    { name: "Kurumsal SEO Danışmanlığı", count: 5 }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <SEO
          title="Teknoloji Blogu - Uptexx | Microsoft ve AI Makaleleri"
          description="Microsoft teknolojileri, yapay zeka, dijital dönüşüm ve yazılım dünyasındaki en son gelişmeler, rehberler ve başarı hikayeleri Uptexx Blog'da."
          keywords="teknoloji blogu, microsoft makaleleri, yapay zeka haberleri, yazılım rehberleri, dijital dönüşüm blog, uptexx blog"
          canonical="/blog"
        />
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Microsoft Teknolojileri ve Yapay Zeka Blog - Bizden Haberler
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Microsoft Azure, Copilot, Power Platform, yapay zeka ve dijital dönüşüm konularında uzman görüşleri.
            Başarı hikayeleri, sertifikalarımız ve yetkinliklerimizle desteklenen teknik rehberler ve E-Book içerikleri.
          </p>
        </div>

        {/* Featured Post */}
        <section className="mb-16">
          <Card className="shadow-corporate overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="bg-gradient-primary flex items-center justify-center p-12">
                <div className="text-center text-primary-foreground">
                  <div className="w-24 h-24 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold">{featuredPost.image}</span>
                  </div>
                  <Badge className="bg-primary-foreground text-primary mb-4">
                    Öne Çıkan Yazı
                  </Badge>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge variant="secondary">{featuredPost.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {featuredPost.date}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {featuredPost.views}
                    </div>
                  </div>
                  <Button asChild>
                    <Link to={`/blog/${featuredPost.slug}`} state={{ post: featuredPost }}>
                      Devamını Oku
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="shadow-card hover:shadow-corporate transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-full h-32 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                      <span className="text-primary-foreground font-bold text-2xl">{post.image}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <CardTitle className="text-primary hover:text-primary/80 transition-colors">
                      <Link to={`/blog/${post.slug}`} state={{ post }}>
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Eye className="h-4 w-4 mr-1" />
                        {post.views}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Daha Fazla Yazı Yükle
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Categories */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Kategoriler</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                      <Link
                        to="#"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {category.name}
                      </Link>
                      <Badge variant="outline" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Popüler Yazılar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Example popular posts - replace with actual data */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-secondary rounded-lg flex-shrink-0">
                      {/* Image or icon */}
                    </div>
                    <div>
                      <Link to="#" className="font-medium text-primary hover:text-primary/80 transition-colors line-clamp-2">
                        Yapay Zeka Destekli Siber Güvenlik Çözümleri
                      </Link>
                      <div className="text-sm text-muted-foreground flex items-center mt-1">
                        <Calendar className="h-3 w-3 mr-1" /> 28 Kasım 2024
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-secondary rounded-lg flex-shrink-0">
                      {/* Image or icon */}
                    </div>
                    <div>
                      <Link to="#" className="font-medium text-primary hover:text-primary/80 transition-colors line-clamp-2">
                        Microsoft Azure ile Maliyet Optimizasyonu Stratejileri
                      </Link>
                      <div className="text-sm text-muted-foreground flex items-center mt-1">
                        <Calendar className="h-3 w-3 mr-1" /> 20 Kasım 2024
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-secondary rounded-lg flex-shrink-0">
                      {/* Image or icon */}
                    </div>
                    <div>
                      <Link to="#" className="font-medium text-primary hover:text-primary/80 transition-colors line-clamp-2">
                        Dijital Pazarlamada Yeni Nesil Yaklaşımlar
                      </Link>
                      <div className="text-sm text-muted-foreground flex items-center mt-1">
                        <Calendar className="h-3 w-3 mr-1" /> 10 Kasım 2024
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="shadow-card bg-gradient-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Blog Güncellemeleri</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Yeni yazılarımızdan haberdar olun
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="E-posta adresiniz"
                    className="w-full p-3 rounded-lg bg-primary-foreground text-primary placeholder:text-primary/60"
                  />
                  <Button variant="secondary" className="w-full">
                    Abone Ol
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <section className="mt-20 text-center bg-secondary rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Teknoloji Danışmanlığı İhtiyacınız Var mı?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Blog yazılarımızdan ilham aldınız ve bu teknolojileri işletmenizde uygulamak istiyorsunuz?
            Uzman ekibimizle ücretsiz danışmanlık alın.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link to="/iletisim">
                Ücretsiz Danışmanlık
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/hizmetler">Hizmetlerimizi İnceleyin</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;