import * as React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Star, Download, Monitor } from "lucide-react";
import { Badge } from "./ui/badge";
import type { Game } from "@workspace/api-client-react";

export function GameCard({ game, index = 0 }: { game: Game, index?: number }) {
  // Use unsplash placeholders if image is missing
  const imageUrl = game.imageUrl || `https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop&q=80&sig=${game.id}`;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link 
        href={`/games/${game.id}`}
        className="group block relative rounded-xl overflow-hidden bg-card border border-white/10 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_-5px_rgba(157,78,221,0.4)]"
      >
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {game.isFree && <Badge variant="free">GRATUIT</Badge>}
          {game.isNew && <Badge variant="neon">NOUVEAU</Badge>}
        </div>
        
        <div className="absolute top-3 right-3 z-10">
          <Badge variant="outline" className="bg-black/60 backdrop-blur-md border-white/20">
            {game.category}
          </Badge>
        </div>

        <div className="aspect-[4/3] overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-0 opacity-80 group-hover:opacity-60 transition-opacity" />
          <img 
            src={imageUrl} 
            alt={game.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <div className="p-5 relative z-10">
          <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {game.title}
          </h3>
          
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2 font-sans">
            {game.shortDescription || game.description}
          </p>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-1.5 bg-black/30 rounded-md px-2 py-1 border border-white/5">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="font-mono text-sm font-medium">{game.rating?.toFixed(1) || "N/A"}</span>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <Monitor className="w-4 h-4" />
              <span className="text-xs font-mono">{game.platform}</span>
            </div>
          </div>
          
          <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent group-hover:via-primary/50 transition-colors" />
          
          <div className="mt-4 flex items-center justify-between text-sm font-display font-semibold uppercase tracking-wider text-primary group-hover:text-glow transition-all">
            <span>Détails</span>
            <Download className="w-4 h-4 transform group-hover:translate-y-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
