import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Facebook, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Hata",
        description: "Lütfen zorunlu alanları doldurun.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Mesajınız Gönderildi!",
      description: "En kısa sürede size geri dönüş yapacağız.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adres",
      details: ["Beşikdüzü, Trabzon", "Türkiye"]
    },
    {
      icon: Phone,
      title: "Telefon",
      details: ["+90 462 XXX XX XX", "+90 5XX XXX XX XX"]
    },
    {
      icon: Mail,
      title: "E-posta",
      details: ["info@kuzeytech.com", "destek@kuzeytech.com"]
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      details: ["Pazartesi - Cuma: 09:00 - 18:00", "Cumartesi: 09:00 - 13:00"]
    }
  ];

  const services = [
    "Yapay Zeka Çözümleri",
    "Power Platform & Otomasyon",
    "Bulut Çözümleri",
    "Web Geliştirme",
    "Mobil Uygulama Geliştirme",
    "Veri Analizi ve Raporlama",
    "Siber Güvenlik",
    "Diğer"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            İletişim
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Projeleriniz, sorularınız veya işbirliği önerileriniz için bizimle iletişime geçin. 
            Uzman ekibimiz size en kısa sürede geri dönüş yapacaktır.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-corporate h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Bize Mesaj Gönderin
                </CardTitle>
                <CardDescription>
                  Aşağıdaki formu doldurarak bize ulaşabilirsiniz. * ile işaretli alanlar zorunludur.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Ad Soyad *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Adınız ve soyadınız"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-posta *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="ornek@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Şirket Adı</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Şirket adınız (opsiyonel)"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Konu</Label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Konu seçin</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Mesajınız *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Projeniz hakkında detaylı bilgi verin..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Mesaj Gönder
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center text-lg">
                    <info.icon className="mr-2 h-5 w-5" />
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <section className="mb-16">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-primary flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Ofis Konumumuz
              </CardTitle>
              <CardDescription>
                Beşikdüzü, Trabzon merkezinde yer alan ofisimizde sizleri ağırlamaktan mutluluk duyarız.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-primary rounded-lg p-8 text-primary-foreground text-center">
                <div className="w-24 h-24 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Kuzey Tech Ofisi</h3>
                <p className="text-primary-foreground/80 mb-4">
                  Beşikdüzü, Trabzon<br />
                  Türkiye
                </p>
                <p className="text-sm text-primary-foreground/60">
                  * Detaylı adres bilgisi randevu alındıktan sonra paylaşılacaktır.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-muted-foreground">
              En çok merak edilen sorular ve cevapları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary text-lg">
                  Proje süresi ne kadar?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Proje süresi, projenin kapsamına ve karmaşıklığına bağlı olarak 2 hafta ile 6 ay arasında değişebilir. 
                  Detaylı analiz sonrası kesin süre belirlenir.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary text-lg">
                  Ödeme nasıl yapılır?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Projeler genellikle %30 ön ödeme, %40 proje ortası ve %30 teslimat olmak üzere 
                  3 taksit halinde ödenebilir. Küçük projeler için tek ödeme seçeneği de mevcuttur.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary text-lg">
                  Destek hizmeti var mı?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Evet, tüm projelerimizde 6 ay ücretsiz destek hizmeti veriyoruz. 
                  Sonrasında aylık veya yıllık destek paketlerimiz mevcuttur.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary text-lg">
                  Uzaktan çalışma yapıyor musunuz?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Evet, Türkiye'nin her yerinden uzaktan projeler gerçekleştiriyoruz. 
                  Online toplantılar ve iş takip sistemleri ile sorunsuz çalışıyoruz.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-primary rounded-lg p-8 md:p-12 text-primary-foreground">
          <h2 className="text-3xl font-bold mb-4">
            Hemen Başlayalım!
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Projenizle ilgili konuşmak için bize ulaşın. İlk danışmanlık tamamen ücretsiz!
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" variant="secondary">
              <a href="tel:+90462XXXXXXX">
                <Phone className="mr-2 h-4 w-4" />
                Hemen Arayın
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="mailto:info@kuzeytech.com">
                <Mail className="mr-2 h-4 w-4" />
                E-posta Gönderin
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;