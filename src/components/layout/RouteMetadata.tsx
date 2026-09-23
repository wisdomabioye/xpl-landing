import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { resolvePageMetadata } from "@/config/metadata";
import { site } from "@/config/site";

function setNamedMeta(name: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.name = name;
    document.head.appendChild(element);
  }
  element.content = content;
}

function setPropertyMeta(property: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }
  element.content = content;
}

function removeNamedMeta(name: string) {
  document.head.querySelector(`meta[name="${name}"]`)?.remove();
}

function removePropertyMeta(property: string) {
  document.head.querySelector(`meta[property="${property}"]`)?.remove();
}

function setCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="canonical"]`);
  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }
  element.href = href;
}

export function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = resolvePageMetadata(pathname);
    const origin = site.url || window.location.origin;
    const canonical = new URL(metadata.path, origin).toString();
    const image = metadata.image ? new URL(metadata.image, origin).toString() : undefined;

    document.title = metadata.title;
    setNamedMeta("description", metadata.description);
    setNamedMeta("robots", metadata.robots ?? "index, follow");
    setNamedMeta("twitter:card", image ? "summary_large_image" : "summary");
    setNamedMeta("twitter:title", metadata.title);
    setNamedMeta("twitter:description", metadata.description);
    setPropertyMeta("og:title", metadata.title);
    setPropertyMeta("og:description", metadata.description);
    setPropertyMeta("og:type", "website");
    setPropertyMeta("og:url", canonical);
    setPropertyMeta("og:site_name", site.name);
    setPropertyMeta("og:locale", "en_US");
    setCanonical(canonical);

    if (image) {
      setNamedMeta("twitter:image", image);
      setPropertyMeta("og:image", image);
    } else {
      removeNamedMeta("twitter:image");
      removePropertyMeta("og:image");
    }
  }, [pathname]);

  return null;
}
