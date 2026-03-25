import * as React from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout";

const categories = [
  { name: "Action", slug: "action" },
  { name: "FPS", slug: "fps" },
  { name: "RPG", slug: "rpg" },
];

export default function Categories() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-10">Catégories</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/categories/${cat.slug}`}>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer transition">
                <h2 className="text-xl font-bold">{cat.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}