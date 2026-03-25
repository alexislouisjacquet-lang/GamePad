import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/home";
import Categories from "@/pages/categories";
import CategoryDetail from "@/pages/category-detail";
import GameDetail from "@/pages/game-detail";
import TopGames from "@/pages/top-games";
import Contact from "@/pages/contact";
import SearchResults from "@/pages/search";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
      retry: 1,
    }
  }
});

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/categories" component={Categories} />
      <Route path="/categories/:slug" component={CategoryDetail} />
      <Route path="/games/:id" component={GameDetail} />
      <Route path="/top-games" component={TopGames} />
      <Route path="/contact" component={Contact} />
      <Route path="/search" component={SearchResults} />
      <Route component={NotFound} />
    </Switch>

  );
}

export default App;
