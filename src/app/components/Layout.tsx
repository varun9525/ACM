import { Outlet, useLocation } from "react-router";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SiteLoader from "./SiteLoader";

// Module-level flag — persists across route changes, reset on hard refresh only
let hasLoaded = false;

export default function Layout() {
  const { pathname } = useLocation();
  // Only show loader if we haven't loaded yet AND we are on the homepage.
  const [isLoaderDone, setIsLoaderDone] = useState(hasLoaded || pathname !== "/");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#050510]">
      {/* Site Loader — only shown on initial page load of the homepage */}
      {!isLoaderDone && (
        <SiteLoader
          isInitial={true}
          onComplete={() => {
            hasLoaded = true;
            setIsLoaderDone(true);
          }}
        />
      )}

      {/* Main site content */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
