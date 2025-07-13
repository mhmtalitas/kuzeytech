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
              <img src="/kuzeytechlogo.png" alt="Kuzey Tech Logo" className="h-16 w-auto" />
              <span className="font-bold text-xl">KuzeyTech</span>
            </div>
            <p className="text-primary-foreground/80">
              Geleceği şekillendiren teknoloji çözümlerinde uzman ekibimizle
              işletmenizin dijital dönüşümüne öncülük ediyoruz.
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
              <li>
                <Link
                  to="/urunler"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Ürünler
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">Yapay Zeka Çözümleri</li>
              <li className="text-primary-foreground/80">Power Platform</li>
              <li className="text-primary-foreground/80">Bulut Çözümleri</li>
              <li className="text-primary-foreground/80">Web Geliştirme</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-primary-foreground/80">Beşikdüzü, Trabzon</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-primary-foreground/80">info@kuzeytech.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-primary-foreground/80">+90 534 052 00 00</span>
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
            © 2025 KuzeyTech. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;