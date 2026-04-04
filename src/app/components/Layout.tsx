import { Outlet, useLocation } from "react-router";
import { useEffect, useState, lazy, Suspense } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SiteLoader from "./SiteLoader";
const ParticleField = lazy(() => import("./ParticleField"));

// Module-level flag — persists across route changes, reset on hard refresh only
let hasLoaded = false;

export default function Layout() {
  const { pathname } = useLocation();
  const alreadyLoaded = hasLoaded || pathname !== "/";
  // isLoaderDone: when to unmount the SiteLoader component
  const [isLoaderDone, setIsLoaderDone] = useState(alreadyLoaded);
  // isContentVisible: when to show site content (happens earlier — as soon as diamond starts zooming)
  const [isContentVisible, setIsContentVisible] = useState(alreadyLoaded);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#050a1a] overflow-x-hidden w-full">
      {/* Site Loader — only shown on initial page load of the homepage */}
      {!isLoaderDone && (
        <SiteLoader
          isInitial={true}
          onReveal={() => setIsContentVisible(true)}
          onComplete={() => {
            hasLoaded = true;
            setIsLoaderDone(true);
          }}
        />
      )}

      {/* Site content hidden (not unmounted) while loader plays — keeps DOM
          alive for image/font tracking but stops GPU from painting Home.tsx's
          heavy particle field and blur orbs at the same time as the loader */}
      <div
        className="flex flex-col min-h-screen"
        style={{ visibility: isContentVisible ? "visible" : "hidden" }}
      >
        <Navbar />
        <main className="flex-1 relative">
          <Suspense fallback={null}>
            <ParticleField />
          </Suspense>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
