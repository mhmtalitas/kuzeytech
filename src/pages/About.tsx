import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Misyonumuz",
      description: "İşletmelerin dijital dönüşümünde güvenilir teknoloji ortağı olmak ve yenilikçi çözümlerle değer yaratmak."
    },
    {
      icon: Award,
      title: "Vizyonumuz", 
      description: "Teknoloji alanında öncü bir şirket olarak, Türkiye'nin dijital geleceğine öncülük etmek."
    },
    {
      icon: Heart,
      title: "Değerlerimiz",
      description: "Müşteri odaklılık, kalite, güvenilirlik ve sürekli gelişim ilkelerini benimser, etik değerlere bağlı kalırız."
    },
    {
      icon: Users,
      title: "Ekibimiz",
      description: "Alanında uzman, deneyimli ve sürekli kendini geliştiren profesyonel ekibimizle hizmet veriyoruz."
    }
  ];

  const team = [
    {
      name: "Ahmet Kaya",
      position: "Kurucu & CEO",
      description: "15 yıllık yazılım geliştirme deneyimi",
      image: "AK"
    },
    {
      name: "Elif Demir",
      position: "CTO",
      description: "Yapay zeka ve makine öğrenmesi uzmanı",
      image: "ED"
    },
    {
      name: "Mehmet Şahin",
      position: "Proje Müdürü",
      description: "Bulut teknolojileri ve DevOps uzmanı",
      image: "MŞ"
    },
    {
      name: "Zeynep Yılmaz",
      position: "UX/UI Designer",
      description: "Kullanıcı deneyimi ve tasarım uzmanı",
      image: "ZY"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Kuzey Tech Hakkında
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            2019 yılında Trabzon'da kurulan Kuzey Tech, teknoloji alanında yenilikçi çözümler üreten 
            dinamik bir şirkettir. Müşterilerimizin dijital dönüşüm yolculuğunda güvenilir ortağı olmanın 
            gururunu yaşıyoruz.
          </p>
        </div>

        {/* Company Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Hikayemiz</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Kuzey Tech, teknolojinin hızla geliştiği bir dönemde, işletmelerin bu değişime 
                  ayak uydurmasına yardımcı olmak amacıyla kuruldu. Trabzon'un güçlü teknoloji 
                  ekosisteminden yola çıkarak, önce yerel sonra ulusal ölçekte hizmet vermeye başladık.
                </p>
                <p>
                  Bugün, yapay zekadan bulut çözümlerine, web geliştirmeden mobil uygulamalara 
                  kadar geniş bir yelpazede hizmet sunuyoruz. Her projede müşteri memnuniyetini 
                  ön planda tutarak, uzun vadeli iş ortaklıkları kurmayı hedefliyoruz.
                </p>
                <p>
                  Sürekli öğrenme ve gelişim kültürümüzle, sektördeki en güncel teknolojileri 
                  takip ediyor ve müşterilerimize en iyi çözümleri sunuyoruz.
                </p>
              </div>
            </div>
            <div className="bg-gradient-primary rounded-lg p-8 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Başarılarımız</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Tamamlanan Projeler</span>
                  <span className="font-bold text-2xl">100+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Aktif Müşteriler</span>
                  <span className="font-bold text-2xl">50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Ekip Üyeleri</span>
                  <span className="font-bold text-2xl">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Müşteri Memnuniyeti</span>
                  <span className="font-bold text-2xl">98%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Değerlerimiz ve Yaklaşımımız
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Çalışmalarımızı yönlendiren temel değerler ve iş yapış şeklimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-card hover:shadow-corporate transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-primary">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Ekibimiz
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Alanlarında uzman, deneyimli ve tutkulu profesyonellerden oluşan ekibimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-corporate transition-all duration-300">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-lg">{member.image}</span>
                  </div>
                  <CardTitle className="text-primary">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-accent">
                    {member.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mt-20 bg-secondary rounded-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Neden Kuzey Tech?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="font-medium mb-2">Yıllık Deneyim</div>
              <p className="text-sm text-muted-foreground">
                Sektördeki derin deneyimimizle güvenilir çözümler sunuyoruz
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="font-medium mb-2">Teknik Destek</div>
              <p className="text-sm text-muted-foreground">
                Kesintisiz teknik destek ile projelerinizin sürekliliğini sağlıyoruz
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="font-medium mb-2">Müşteri Odaklılık</div>
              <p className="text-sm text-muted-foreground">
                Her projede müşteri ihtiyaçlarını önceleyerek özel çözümler geliştiriyoruz
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;