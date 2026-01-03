import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RolesPage from "./pages/RolesPage";
import ExpertiesPage from "./pages/ExpertiesPage";
import DemandsPage from "./pages/DemandsPage";
import AboutPage from "./pages/AboutPage";
import NetworkPage from "./pages/NetworkPage";
import TalentPage from "./pages/TalentPage";
import ApplyPage from "./pages/ApplyPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/roles" element={<RolesPage />} />
          <Route path="/experties" element={<ExpertiesPage />} />
          <Route path="/demands" element={<DemandsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/network" element={<NetworkPage />} />
          <Route path="/talent" element={<TalentPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
