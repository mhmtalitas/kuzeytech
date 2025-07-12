import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Eye, Clock } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "2024'te Yapay Zeka Trendleri: İşletmeler İçin Fırsatlar",
    excerpt: "Yapay zeka teknolojilerinin işletmelerdeki uygulamaları ve 2024 yılında beklenen gelişmeler hakkında kapsamlı bir analiz.",
    author: "Ahmet Kaya",
    date: "15 Aralık 2024",
    category: "Yapay Zeka",
    readTime: "8 dk",
    views: "1,245",
    image: "AI"
  };

  const blogPosts = [
    {
      title: "Power Platform ile İş Süreçlerinizi Nasıl Otomatikleştirirsiniz?",
      excerpt: "Microsoft Power Platform araçlarını kullanarak manuel iş süreçlerinizi otomatikleştirmenin yolları.",
      author: "Elif Demir",
      date: "12 Aralık 2024",
      category: "Otomasyon",
      readTime: "6 dk",
      views: "892",
      image: "PA"
    },
    {
      title: "Bulut Geçişinde Dikkat Edilmesi Gereken 10 Kritik Nokta",
      excerpt: "Azure veya AWS'ye geçiş yaparken dikkat etmeniz gereken önemli faktörler ve en iyi pratikler.",
      author: "Mehmet Şahin",
      date: "10 Aralık 2024",
      category: "Bulut Teknolojileri",
      readTime: "10 dk",
      views: "1,156",
      image: "CL"
    },
    {
      title: "React Native vs Flutter: 2024'te Hangi Framework'ü Seçmelisiniz?",
      excerpt: "Mobil uygulama geliştirmede iki popüler framework'ün detaylı karşılaştırması.",
      author: "Zeynep Yılmaz",
      date: "8 Aralık 2024",
      category: "Mobil Geliştirme",
      readTime: "7 dk",
      views: "743",
      image: "RN"
    },
    {
      title: "Siber Güvenlik: KOBİ'ler İçin Temel Önlemler",
      excerpt: "Küçük ve orta ölçekli işletmelerin siber tehditlere karşı alması gereken temel güvenlik önlemleri.",
      author: "Can Özkan",
      date: "5 Aralık 2024",
      category: "Siber Güvenlik",
      readTime: "5 dk",
      views: "658",
      image: "CS"
    },
    {
      title: "Power BI ile Veri Görselleştirme: İleri Teknikler",
      excerpt: "Power BI'da etkileyici ve anlamlı veri görselleştirmeleri oluşturmak için uzman ipuçları.",
      author: "Fatma Arslan",
      date: "3 Aralık 2024",
      category: "Veri Analizi",
      readTime: "9 dk",
      views: "1,023",
      image: "PB"
    },
    {
      title: "E-ticaret Sitesi SEO Optimizasyonu: Kapsamlı Rehber",
      excerpt: "E-ticaret sitenizin arama motorlarında üst sıralarda yer alması için uygulamanız gereken stratejiler.",
      author: "Ahmet Kaya",
      date: "1 Aralık 2024",
      category: "SEO",
      readTime: "12 dk",
      views: "1,389",
      image: "SE"
    }
  ];

  const categories = [
    { name: "Yapay Zeka", count: 15 },
    { name: "Bulut Teknolojileri", count: 12 },
    { name: "Mobil Geliştirme", count: 10 },
    { name: "Veri Analizi", count: 8 },
    { name: "Siber Güvenlik", count: 6 },
    { name: "Otomasyon", count: 9 },
    { name: "SEO", count: 5 },
    { name: "Web Geliştirme", count: 11 }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Teknoloji Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Teknoloji dünyasındaki en güncel gelişmeler, uzman görüşleri ve pratik ipuçları. 
            Dijital dönüşüm yolculuğunuzda size rehberlik edecek içerikler.
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
                    <Link to="#">
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
                      <Link to="#" className="line-clamp-2">
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4 line-clamp-3">
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
                  {blogPosts.slice(0, 3).map((post, index) => (
                    <div key={index} className="border-b border-border last:border-0 pb-4 last:pb-0">
                      <h4 className="font-medium text-sm text-primary hover:text-primary/80 transition-colors mb-2">
                        <Link to="#" className="line-clamp-2">
                          {post.title}
                        </Link>
                      </h4>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                        <span className="mx-2">•</span>
                        <Eye className="h-3 w-3 mr-1" />
                        {post.views}
                      </div>
                    </div>
                  ))}
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