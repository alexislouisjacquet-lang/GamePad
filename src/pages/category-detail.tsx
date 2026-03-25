import * as React from "react";
import { useRoute } from "wouter";
import { Layout } from "@/components/layout";
import { GameCard } from "@/components/game-card";
import { motion } from "framer-motion";

export default function CategoryDetail() {
  const [, params] = useRoute("/categories/:slug");
  const slug = params?.slug || "";
  
  // Clean up slug for display
  const title = slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' ');

  const { data, isLoading } = useListGames({ category: slug, limit: 20 });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <div className="text-sm font-mono text-primary mb-2">Catégorie</div>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-glow">{title}</h1>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-[3/4] bg-white/5 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : data?.games && data.games.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.games.map((game, i) => (
              <GameCard key={game.id} game={game} index={i} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center glass-panel rounded-2xl">
            <h3 className="text-2xl font-display text-muted-foreground mb-4">Aucun jeu trouvé</h3>
            <p className="font-sans text-sm text-white/40">Essayez une autre catégorie.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
