import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/uptexxlogo.png" alt="Uptexx Logo" className="h-16 w-auto" />
              <span className="font-bold text-xl">Uptexx</span>
            </div>
            <p className="text-primary-foreground/80">
              İstanbul merkezli Microsoft uzmanlığı ile yapay zeka danışmanlığı,
              Azure çözümleri ve dijital dönüşüm hizmetlerinde tüm Türkiye'nin
              güvenilir teknoloji ortağınız.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/hakkimizda"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  to="/hizmetler"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Hizmetler
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/urunler"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Ürünler
                </Link>
              </li> */}
              <li>
                <Link
                  to="/blog"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/iletisim"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Microsoft Uzmanlığı Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">Microsoft Copilot ve Yapay Zeka</li>
              <li className="text-primary-foreground/80">Microsoft Azure Danışmanlığı</li>
              <li className="text-primary-foreground/80">Power Platform Geliştirme</li>
              <li className="text-primary-foreground/80">Microsoft 365 ve Teams</li>
              <li className="text-primary-foreground/80">Web Yazılım Geliştirme</li>
              <li className="text-primary-foreground/80">Kurumsal Lisans Yönetimi</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div className="text-primary-foreground/80 space-y-2">
                  <div>
                    <span className="font-semibold block">Merkez Ofis:</span>
                    Cumhuriyet Mah. Kazım Karabekir Cad. No:2/28 61800 Beşikdüzü/Trabzon
                  </div>
                  <div>
                    <span className="font-semibold block">İstanbul Şube:</span>
                    Fatih Sultan Mehmet Mah. Depoyolu Sk. No:16 İç Kapı no:58, One Block Plaza 34774 Ümraniye/İstanbul
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-primary-foreground/80">info@uptexx.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-primary-foreground/80">0543 871 61 31</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 Uptexx. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;