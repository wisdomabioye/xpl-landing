import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Services } from "@/pages/Services";
import { Portfolio } from "@/pages/Portfolio";
import { Work } from "@/pages/Work";
import { SystemShowcase } from "@/pages/SystemShowcase";
import { Contact } from "@/pages/Contact";
import { Privacy } from "@/pages/Privacy";
import { Terms } from "@/pages/Terms";
import { ProductRescue } from "@/pages/ProductRescue";
import { AgencyPartner } from "@/pages/AgencyPartner";
import { Engagements } from "@/pages/Engagements";
import { CaseStudyPage } from "@/pages/CaseStudy";
import { NotFound } from "@/pages/NotFound";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/work", element: <Work /> },
      { path: "/work/:slug", element: <CaseStudyPage /> },
      { path: "/systems/:slug", element: <SystemShowcase /> },
      { path: "/product-rescue", element: <ProductRescue /> },
      { path: "/agency-partner", element: <AgencyPartner /> },
      { path: "/engagements", element: <Engagements /> },
      { path: "/contact", element: <Contact /> },
      { path: "/privacy", element: <Privacy /> },
      { path: "/terms", element: <Terms /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
