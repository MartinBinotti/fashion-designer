import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import SiteFooter from "./components/SiteFooter";
import { ThemeProvider } from "./context/ThemeContext";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ImagesPage from "./pages/ImagesPage";
import ImagePostDetailPage from "./pages/ImagePostDetailPage";
import MetodoCreativoDetailPage from "./pages/MetodoCreativoDetailPage";
import MetodoCreativoPage from "./pages/MetodoCreativoPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectsPage from "./pages/ProjectsPage";

function PortfolioApp() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen text-[color:var(--as-text)]">
      <Navbar isOverlay={isHomePage} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proyectos" element={<ProjectsPage />} />
        <Route path="/imagenes" element={<ImagesPage />} />
        <Route path="/imagenes/:postId" element={<ImagePostDetailPage />} />
        <Route path="/metodo-creativo" element={<MetodoCreativoPage />} />
        <Route
          path="/metodo-creativo/:sectionId"
          element={<MetodoCreativoDetailPage />}
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/posts" element={<Navigate to="/imagenes" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <SiteFooter />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <PortfolioApp />
      </BrowserRouter>
    </ThemeProvider>
  );
}
