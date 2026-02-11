import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
// import Products from "./pages/Products"; // Geçici olarak askıya alındı
// import References from "./pages/References"; // Geçici olarak askıya alındı
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
// import ProductDetail from "./pages/ProductDetail"; // Geçici olarak askıya alındı
import NotFound from "./pages/NotFound";
import BlogDetail from "./pages/BlogDetail";
import { useEffect } from "react";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    // Try to scroll the window first with a slight delay
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0; // For html element
      document.body.scrollTop = 0; // For body element (legacy browsers)
    }, 0); // Execute immediately after current task queue
  }, [location.pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <ScrollToTop />
            <Navigation />
            <main className="pt-16 flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hakkimizda" element={<About />} />
                <Route path="/hizmetler" element={<Services />} />
                {/* <Route path="/urunler" element={<Products />} /> */}
                {/* <Route path="/urun-detay/:slug" element={<ProductDetail />} /> */}
                {/* <Route path="/referanslar" element={<References />} /> */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogDetail />} />
                <Route path="/iletisim" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
