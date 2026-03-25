import * as React from "react";
import { Link, useLocation } from "wouter";
import { Gamepad2, Search, Menu, X, Github, Twitter, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { motion, AnimatePresence } from "framer-motion";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setLocation(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "Catégories", href: "/categories" },
    { label: "Top Jeux", href: "/top-games" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full glass-panel border-b border-border/40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Gamepad2 className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
            <span className="font-display font-bold text-2xl tracking-widest text-glow">
              GAME<span className="text-primary">PAD</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "font-display text-lg uppercase tracking-wide transition-colors hover:text-primary",
                  location === link.href ? "text-primary text-glow" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <form onSubmit={handleSearch} className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un jeu..." 
                className="w-64 pl-9 bg-black/40 border-white/10 focus:border-primary/50 transition-all font-mono text-sm"
              />
            </form>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass-panel border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher un jeu..." 
                  className="w-full pl-9"
                />
              </form>
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-xl uppercase tracking-wide py-2 border-b border-white/5 text-foreground hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 w-full bg-grid-pattern relative">
        <div className="absolute inset-0 bg-background/80 pointer-events-none -z-10" />
        {children}
      </main>

      <footer className="border-t border-border/40 bg-card py-12 mt-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Gamepad2 className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-xl tracking-widest">
                GAME<span className="text-primary">PORTAL</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm font-sans text-sm leading-relaxed">
              Le meilleur portail pour découvrir et télécharger des jeux vidéo légalement. Plongez dans des univers extraordinaires.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-foreground">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link href="/categories" className="hover:text-primary transition-colors">Catégories</Link></li>
              <li><Link href="/top-games" className="hover:text-primary transition-colors">Top Jeux</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-foreground">Réseaux</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-border hover:border-secondary hover:text-secondary transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-all">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/5 text-center text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} GamePortal. Tous droits réservés. Ne propose que des liens légaux.
        </div>
      </footer>
    </div>
  );
}
