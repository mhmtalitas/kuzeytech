import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import SEO from "@/components/SEO";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Hata",
        description: "Lütfen zorunlu alanları doldurun.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
        to_email: "info@uptexx.com",
      };
      const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || "YOUR_SERVICE_ID";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const userId     = import.meta.env.VITE_EMAILJS_USER_ID      || "YOUR_USER_ID";
      await emailjs.send(serviceId, templateId, templateParams, userId);
      toast({ title: "Mesajınız Gönderildi! ✅", description: "En kısa sürede size geri dönüş yapacağız." });
      setFormData({ name: "", email: "", company: "", subject: "", message: "" });
    } catch (error) {
      console.error("Mail gönderme hatası:", error);
      toast({ title: "Hata ❌", description: "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: MapPin,
      title: "Adres",
      items: [
        { label: "Merkez Ofis", value: "Cumhuriyet Mah. Kazım Karabekir Cad. No:2/28 61800 Beşikdüzü/Trabzon" },
        { label: "İstanbul Şube", value: "Fatih Sultan Mehmet Mah. Depoyolu Sk. No:16 İç Kapı no:58, One Block Plaza 34774 Ümraniye/İstanbul" },
      ],
    },
    { icon: Phone, title: "Telefon",  items: [{ label: "", value: "0543 871 61 31" }] },
    { icon: Mail,  title: "E-posta", items: [{ label: "", value: "info@uptexx.com" }] },
    { icon: Clock, title: "Çalışma Saatleri", items: [{ label: "", value: "Pazartesi - Cuma: 10:00 - 17:00" }] },
  ];

  const subjectOptions = [
    "Microsoft Copilot ve Yapay Zeka Danışmanlığı",
    "Power Platform Geliştirme (PowerApps, Power Automate, Power BI)",
    "Microsoft Azure ve Bulut Bilişim Çözümleri",
    "Web Yazılım Geliştirme ve Kurumsal SEO",
    "Mobil Uygulama Geliştirme (React Native, Flutter)",
    "Veri Yönetimi ve Raporlama Sistemleri",
    "Microsoft 365 ve Teams Entegrasyonu",
    "Kurumsal Lisans Yönetimi",
    "Siber Güvenlik Yazılımı",
    "Diğer",
  ];

  const faqItems = [
    { q: "Proje süresi ne kadar?", a: "Proje süresi, projenin kapsamına ve karmaşıklığına bağlı olarak 2 hafta ile 6 ay arasında değişebilir. Detaylı analiz sonrası kesin süre belirlenir." },
    { q: "Ödeme nasıl yapılır?", a: "Kredi kartı ve banka havalesi ile ödeme kabul edilir. Fatura ve gerekli belgeler proje başlangıcında düzenlenir." },
    { q: "Destek hizmeti var mı?", a: "Evet, tüm projelerimizde 1 ay ücretsiz destek hizmeti veriyoruz. Sonrasında aylık veya yıllık destek paketlerimiz mevcuttur." },
    { q: "Uzaktan çalışma yapıyor musunuz?", a: "Evet, Türkiye'nin her yerinden uzaktan projeler gerçekleştiriyoruz. Online toplantılar ve iş takip sistemleri ile sorunsuz çalışıyoruz." },
  ];

  return (
    <div className="min-h-screen bg-[hsl(220,20%,97%)]">
      <SEO
        title="İletişim - Uptexx | İstanbul Merkezli, Tüm Türkiye'ye Hizmet"
        description="Microsoft Azure, Yapay Zeka ve Kurumsal Yazılım projeleriniz için Uptexx ile iletişime geçin. İstanbul Ümraniye ofisimizden tüm Türkiye'ye hizmet veriyoruz."
        keywords="uptexx iletişim, microsoft danışmanlık iletişim, istanbul yazılım firması iletişim, kurumsal teknoloji destek, türkiye geneli hizmet"
        canonical="/iletisim"
      />

      {/* ---- Hero ---- */}
      <section className="hero-bg pt-40 pb-24 relative overflow-hidden" id="contact-hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex mb-6 animate-fade-in-down">
            <span className="tech-chip tech-chip-inverted">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
              İletişim
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 max-w-4xl mx-auto animate-fade-in-up"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            İstanbul Microsoft Uzmanlığı ve Dijital Dönüşüm İletişim
          </h1>
          <p className="text-xl text-blue-100/75 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            İstanbul, Kocaeli, Bursa, Ankara, İzmir'de Microsoft Azure danışmanlığı, yapay zeka çözümleri,
            web yazılım geliştirme ve kurumsal teknoloji projeleriniz için bizimle iletişime geçin.
            Microsoft sertifikalı uzman ekibimiz Marmara bölgesinde size en kısa sürede geri dönüş yapacaktır.
          </p>
        </div>
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true" style={{ zIndex: 5 }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full" style={{ display: "block", height: 80 }}>
            <defs>
              <linearGradient id="waveGradContact" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(220, 20%, 97%)" stopOpacity="0" />
                <stop offset="100%" stopColor="hsl(220, 20%, 97%)" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,20 1440,50 L1440,80 L0,80 Z" fill="url(#waveGradContact)" />
            <path d="M0,55 C360,20 720,80 1080,40 C1260,20 1380,65 1440,60 L1440,80 L0,80 Z" fill="hsl(220, 20%, 97%)" fillOpacity="0.7" />
          </svg>
        </div>
      </section>

      <div className="container mx-auto px-6 py-24">

        {/* ---- Contact Cards Row ---- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {contactCards.map((card, i) => (
            <div
              key={i}
              className="card-pro p-6 animate-fade-in-up"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="service-icon-wrap mb-4" style={{ width: 44, height: 44, borderRadius: 12 }}>
                <card.icon size={18} className="text-white" />
              </div>
              <h3
                className="font-bold text-[hsl(216,100%,12%)] text-sm mb-3"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {card.title}
              </h3>
              <div className="space-y-2">
                {card.items.map((item, j) => (
                  <div key={j} className="text-xs text-[hsl(216,20%,48%)] leading-relaxed">
                    {item.label && (
                      <span className="font-semibold text-[hsl(216,50%,30%)] block text-xs uppercase tracking-wide mb-0.5">{item.label}</span>
                    )}
                    {item.value}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ---- Form + Map ---- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20" id="contact-form-section">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="card-pro p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="service-icon-wrap" style={{ width: 44, height: 44, borderRadius: 12 }}>
                  <MessageSquare size={18} className="text-white" />
                </div>
                <div>
                  <h2
                    className="font-bold text-[hsl(216,100%,12%)] text-lg"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    Bize Mesaj Gönderin
                  </h2>
                  <p className="text-xs text-[hsl(216,20%,48%)] mt-0.5">
                    Aşağıdaki formu doldurarak bize ulaşabilirsiniz. * ile işaretli alanlar zorunludur.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-xs font-semibold text-[hsl(216,50%,28%)] uppercase tracking-wide">Ad Soyad *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Adınız ve soyadınız"
                      required
                      className="contact-input h-11 text-sm rounded-xl border-[hsl(213,20%,88%)] focus:border-[hsl(216,100%,12%,0.5)] transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs font-semibold text-[hsl(216,50%,28%)] uppercase tracking-wide">E-posta *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="ornek@email.com"
                      required
                      className="contact-input h-11 text-sm rounded-xl border-[hsl(213,20%,88%)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="company" className="text-xs font-semibold text-[hsl(216,50%,28%)] uppercase tracking-wide">Şirket Adı</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Şirket adınız (opsiyonel)"
                      className="contact-input h-11 text-sm rounded-xl border-[hsl(213,20%,88%)]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="subject" className="text-xs font-semibold text-[hsl(216,50%,28%)] uppercase tracking-wide">Konu</Label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="contact-input flex h-11 w-full rounded-xl border border-[hsl(213,20%,88%)] bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-[hsl(216,100%,12%,0.15)] focus:border-[hsl(216,100%,12%,0.4)]"
                    >
                      <option value="">Konu seçin</option>
                      {subjectOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-xs font-semibold text-[hsl(216,50%,28%)] uppercase tracking-wide">Mesajınız *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Projeniz hakkında detaylı bilgi verin..."
                    rows={6}
                    required
                    className="contact-input text-sm rounded-xl border-[hsl(213,20%,88%)] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="contact-submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: "linear-gradient(135deg, hsl(216 100% 14%), hsl(216 90% 20%))",
                    boxShadow: "0 2px 10px hsl(216 100% 12% / 0.22)",
                  }}
                >
                  <Send size={15} />
                  {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <div className="card-pro overflow-hidden">
              <div className="p-5 border-b border-[hsl(213,20%,92%)] flex items-center gap-3">
                <div className="service-icon-wrap" style={{ width: 36, height: 36, borderRadius: 10 }}>
                  <MapPin size={15} className="text-white" />
                </div>
                <div>
                  <h3
                    className="font-bold text-[hsl(216,100%,12%)] text-sm"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    Ofis Konumumuz
                  </h3>
                  <p className="text-xs text-[hsl(216,20%,48%)] mt-0.5">Ofisimizi haritada görebilirsiniz</p>
                </div>
              </div>
              <div className="relative w-full h-72">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.027!2d29.1237914!3d41.0211197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac8db0775003f%3A0x81ddc9aafbc2dfd6!2sOneBlock!5e0!3m2!1str!2str!4v1740210000000!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Uptexx Ofis Konumu"
                />
              </div>
            </div>

            {/* Quick contact */}
            <div className="card-pro p-6 space-y-4">
              <h3
                className="font-bold text-[hsl(216,100%,12%)] text-sm"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Hızlı İletişim
              </h3>
              <a
                href="tel:+905438716131"
                className="flex items-center gap-3 p-3.5 rounded-xl transition-all duration-150 group"
                style={{ background: "hsl(216 100% 12% / 0.04)", border: "1px solid hsl(213,20%,90%)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "hsl(216 100% 12% / 0.08)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "hsl(216 100% 12% / 0.04)"; }}
              >
                <Phone size={16} className="text-[hsl(216,100%,12%)]" />
                <span className="text-sm font-medium text-[hsl(216,100%,12%)]">0543 871 61 31</span>
              </a>
              <a
                href="mailto:info@uptexx.com"
                className="flex items-center gap-3 p-3.5 rounded-xl transition-all duration-150"
                style={{ background: "hsl(216 100% 12% / 0.04)", border: "1px solid hsl(213,20%,90%)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "hsl(216 100% 12% / 0.08)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "hsl(216 100% 12% / 0.04)"; }}
              >
                <Mail size={16} className="text-[hsl(216,100%,12%)]" />
                <span className="text-sm font-medium text-[hsl(216,100%,12%)]">info@uptexx.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* ---- FAQ ---- */}
        <section id="faq">
          <div className="text-center mb-12">
            <div className="section-eyebrow justify-center mb-4">SSS</div>
            <h2
              className="text-3xl font-bold text-[hsl(216,100%,12%)] mb-3"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-[hsl(216,20%,48%)] text-sm">En çok merak edilen sorular ve cevapları</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            {faqItems.map((faq, i) => (
              <div
                key={i}
                className="faq-card p-7 animate-fade-in-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <h3
                  className="font-bold text-[hsl(216,100%,12%)] text-sm mb-3"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {faq.q}
                </h3>
                <p className="text-[hsl(216,20%,45%)] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---- CTA ---- */}
        <section className="cta-banner px-8 py-16 text-center" id="contact-cta">
          <div className="relative z-10 max-w-xl mx-auto">
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Hemen Başlayalım!
            </h2>
            <p className="text-blue-100/70 mb-10 text-lg">
              Projenizle ilgili konuşmak için bize ulaşın. İlk danışmanlık tamamen ücretsiz!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905438716131"
                id="contact-cta-call"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-[hsl(216,100%,12%)] bg-white transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
                style={{ boxShadow: "0 4px 16px hsl(0 0% 0% / 0.15)" }}
              >
                <Phone size={15} />
                Hemen Arayın
              </a>
              <a
                href="mailto:info@uptexx.com"
                id="contact-cta-email"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                style={{ background: "hsl(0 0% 100% / 0.1)", border: "1.5px solid hsl(0 0% 100% / 0.25)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "hsl(0 0% 100% / 0.18)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "hsl(0 0% 100% / 0.1)"; }}
              >
                <Mail size={15} />
                E-posta Gönderin
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;