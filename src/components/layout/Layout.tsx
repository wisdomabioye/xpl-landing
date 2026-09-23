import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { RouteMetadata } from "./RouteMetadata";

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <RouteMetadata />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
