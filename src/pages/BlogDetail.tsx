import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, User, Clock, Eye, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import SEO from "@/components/SEO";

interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  views: string;
  image: string;
  // Full content would go here if available
}

const BlogDetail: React.FC = () => {
  const location = useLocation();
  const { post } = location.state as { post: BlogPost };

  if (!post) {
    return <div className="min-h-screen flex items-center justify-center text-xl text-muted-foreground">Yazı bulunamadı.</div>;
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <SEO
          title={`${post.title} - Uptexx Blog`}
          description={post.excerpt}
          keywords={`${post.category}, blog, teknoloji, ${post.author}`}
          canonical={`/blog/${location.pathname.split('/').pop()}`}
          type="article"
        />
        <Button asChild variant="outline" className="mb-8">
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Tüm Yazılar
          </Link>
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4 mb-4">
            <Badge variant="secondary">{post.category}</Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              {post.date}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Eye className="h-4 w-4 mr-1" />
              {post.views}
            </div>
          </div>
          <div className="flex items-center text-sm text-muted-foreground mb-8">
            <User className="h-4 w-4 mr-1" />
            {post.author}
          </div>
        </div>

        {/* Blog Post Image/Placeholder */}
        <div className="w-full h-64 bg-gradient-primary rounded-lg flex items-center justify-center mb-8">
          <span className="text-primary-foreground font-bold text-4xl">{post.image}</span>
        </div>

        {/* Blog Post Content (Placeholder for full content) */}
        <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
          <p className="text-lg leading-relaxed mb-6">
            {post.excerpt}
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Bu kısım blog yazısının tam metnini içerecektir. Şu anda sadece bir yer tutucudur.
            Gerçek blog içerikleri bir veri tabanından veya harici bir dosyadan yüklenebilir.
          </p>
          <p className="text-lg leading-relaxed">
            Daha fazla detay ve örneklerle bu bölümde makalenin tamamı yer alacaktır.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail; 