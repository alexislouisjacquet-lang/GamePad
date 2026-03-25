import * as React from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { ChevronRight, Gamepad2, Zap, Flame } from "lucide-react";

export default function Home() {

  const fakeGames = [
    { id: 1, title: "Cyberpunk 2077", category: "Action" },
    { id: 2, title: "Elden Ring", category: "RPG" },
    { id: 3, title: "GTA V", category: "Open World" },
    { id: 4, title: "Call of Duty", category: "FPS" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">
          GAME PORTAL
        </h1>
        <p>Bienvenue sur ton site de jeux 🔥</p>
      </section>

      {/* Games */}
      <section className="py-10">
        <h2 className="text-2xl mb-6">Jeux</h2>

        <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px"}}>
          {fakeGames.map((game) => (
            <div key={game.id} style={{padding: 20, border: "1px solid gray"}}>
              <h3>{game.title}</h3>
              <p>{game.category}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}