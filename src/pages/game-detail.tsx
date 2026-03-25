import * as React from "react";
import { useRoute } from "wouter";
import { Layout } from "@/components/layout";

export default function GameDetail() {
  const [, params] = useRoute("/games/:id");
  const id = params?.id;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">Détail du jeu</h1>

        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <p className="text-lg">ID du jeu : {id}</p>
          <p className="text-sm text-gray-400 mt-2">
            (Page temporaire — contenu à améliorer)
          </p>
        </div>
      </div>
    </Layout>
  );
}