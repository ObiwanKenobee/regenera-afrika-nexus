
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/hooks/use-theme";

// Pages
import AuthPage from "./pages/AuthPage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ResidentDashboard from "./pages/ResidentDashboard";
import NgoDashboard from "./pages/NgoDashboard";
import GovernmentDashboard from "./pages/GovernmentDashboard";
import AdminDashboard from "./pages/AdminDashboard";

// Create QueryClient outside of the component
const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="light">
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route 
                path="/dashboard" 
                element={
                  <Navigate 
                    to={`/${localStorage.getItem('userRole') || 'resident'}-dashboard`} 
                    replace 
                  />
                } 
              />
              <Route path="/resident-dashboard" element={<ResidentDashboard />} />
              <Route path="/ngo-dashboard" element={<NgoDashboard />} />
              <Route path="/government-dashboard" element={<GovernmentDashboard />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
