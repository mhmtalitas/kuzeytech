import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Facebook, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import SEO from "@/components/SEO";

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

  const handleSubmit = async (e: React.FormEvent) => {
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

    try {
      // EmailJS ile mail gönderme
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
        to_email: "info@uptexx.com"
      };

      // EmailJS ayarları - Bu değerleri EmailJS dashboard'dan alın
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const userId = import.meta.env.VITE_EMAILJS_USER_ID || "YOUR_USER_ID";

      await emailjs.send(serviceId, templateId, templateParams, userId);

      // Başarılı mesaj
      toast({
        title: "Mesajınız Gönderildi! ✅",
        description: "En kısa sürede size geri dönüş yapacağız.",
      });

      // Form sıfırlama
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: ""
      });

    } catch (error) {
      console.error("Mail gönderme hatası:", error);
      toast({
        title: "Hata ❌",
        description: "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz.",
        variant: "destructive"
      });
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adres",
      details: ["Maslak Mah. Büyükdere Cad.", "No:123, 34398 Sarıyer/İstanbul"]
    },
    {
      icon: Phone,
      title: "Telefon",
      details: ["+90 534 052 00 00"]
    },
    {
      icon: Mail,
      title: "E-posta",
      details: ["info@uptexx.com"]
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      details: ["Pazartesi - Cuma: 10:00 - 17:00"]
    }
  ];

  const services = [
    "Microsoft Copilot ve Yapay Zeka Danışmanlığı",
    "Power Platform Geliştirme (PowerApps, Power Automate, Power BI)",
    "Microsoft Azure ve Bulut Bilişim Çözümleri",
    "Web Yazılım Geliştirme ve Kurumsal SEO",
    "Mobil Uygulama Geliştirme (React Native, Flutter)",
    "Veri Yönetimi ve Raporlama Sistemleri",
    "Microsoft 365 ve Teams Entegrasyonu",
    "Kurumsal Lisans Yönetimi",
    "Siber Güvenlik Yazılımı",
    "Diğer"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <SEO
          title="İletişim - Uptexx | İstanbul Merkezli, Tüm Türkiye'ye Hizmet"
          description="Microsoft Azure, Yapay Zeka ve Kurumsal Yazılım projeleriniz için Uptexx ile iletişime geçin. İstanbul Maslak ofisimizden tüm Türkiye'ye hizmet veriyoruz."
          keywords="uptexx iletişim, microsoft danışmanlık iletişim, istanbul yazılım firması iletişim, kurumsal teknoloji destek, türkiye geneli hizmet"
          canonical="/iletisim"
        />
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            İstanbul Microsoft Uzmanlığı ve Dijital Dönüşüm İletişim
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            İstanbul, Kocaeli, Bursa, Ankara, İzmir'de Microsoft Azure danışmanlığı, yapay zeka çözümleri,
            web yazılım geliştirme ve kurumsal teknoloji projeleriniz için bizimle iletişime geçin.
            Microsoft sertifikalı uzman ekibimiz Marmara bölgesinde size en kısa sürede geri dönüş yapacaktır.
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
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
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
                Ofisimizin bulunduğu konumu haritada görebilir ve kolay yol tarifi alabilirsiniz.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Google Maps Embed */}
              <div className="relative w-full h-96 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.9205562017346!2d29.0152!3d41.1114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5c7d0a6c6d9%3A0x7c7c7c7c7c7c7c7c!2sMaslak%2C%20Sar%C4%B1yer%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1635959999999!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Uptexx Ofis Konumu"
                ></iframe>
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
                  Kredi kartı ve banka havalesi ile ödeme kabul edilir.
                  Fatura ve gerekli belgeler proje başlangıcında düzenlenir.
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
                  Evet, tüm projelerimizde 1 ay ücretsiz destek hizmeti veriyoruz.
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
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-gray-900 hover:text-white">
              <a href="mailto:info@uptexx.com">
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