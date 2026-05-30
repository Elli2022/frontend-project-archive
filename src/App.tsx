import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = lazy(() => import("./pages/Index.tsx"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Notes = lazy(() => import("./pages/Notes"));
const NoteDetail = lazy(() => import("./pages/NoteDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <ScrollToTop />
          <SiteLayout>
            <Suspense fallback={<AppShellFallback />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectDetail />} />
                <Route path="/notes" element={<Notes />} />
                <Route path="/notes/:slug" element={<NoteDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </SiteLayout>
        </HashRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

function AppShellFallback() {
  return (
    <div className="container-wide py-24">
      <p className="label-mono">Loading page</p>
      <div className="mt-6 h-24 rounded-2xl border border-border bg-secondary/60" />
      <div className="mt-4 h-24 rounded-2xl border border-border bg-secondary/40" />
    </div>
  );
}
