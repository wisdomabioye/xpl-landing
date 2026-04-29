import { Link } from "react-router-dom";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import { primaryNav } from "@/config/navigation";
import { site } from "@/config/site";
import type { IconName } from "@/config/content";

const socialLinks: Array<{ key: keyof typeof site.social; icon: IconName; label: string }> = [
  { key: "linkedin", icon: "linkedin", label: "LinkedIn" },
  { key: "x", icon: "x", label: "X" },
  { key: "instagram", icon: "instagram", label: "Instagram" },
  { key: "tiktok", icon: "tiktok", label: "TikTok" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const visibleSocial = socialLinks.filter((s) => site.social[s.key]);

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Logo />
            <p style={{ color: "var(--color-muted)", maxWidth: 280, marginTop: 18, fontSize: 14 }}>
              {site.tagline} — A software agency engineering web, mobile, and Web3 products
              for ambitious teams worldwide.
            </p>
          </div>
          <div>
            <div className="eyebrow-label" style={{ marginBottom: 16 }}>
              Sitemap
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px 24px",
                maxWidth: 320,
              }}
            >
              {primaryNav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  style={{ color: "var(--color-muted)", fontSize: 14 }}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            {visibleSocial.length > 0 && (
              <>
                <div className="eyebrow-label" style={{ marginBottom: 16 }}>
                  Connect
                </div>
                <div style={{ display: "flex", gap: 14 }}>
                  {visibleSocial.map((s) => (
                    <a
                      key={s.key}
                      href={site.social[s.key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      style={{
                        width: 38,
                        height: 38,
                        border: "1px solid var(--color-rule)",
                        display: "grid",
                        placeItems: "center",
                        color: "var(--color-muted)",
                        transition: "color 200ms, border-color 200ms",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--color-accent)";
                        e.currentTarget.style.borderColor = "var(--color-accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--color-muted)";
                        e.currentTarget.style.borderColor = "var(--color-rule)";
                      }}
                    >
                      <Icon name={s.icon} size={16} />
                    </a>
                  ))}
                </div>
              </>
            )}
            {site.contact.email && (
              <div
                style={{
                  marginTop: visibleSocial.length ? 24 : 0,
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-muted)",
                }}
              >
                {site.contact.email}
              </div>
            )}
          </div>
        </div>
        <div className="footer-bot">
          <span>© {year} XPL DEVELOPERS</span>
          <span>NIGERIAN ROOTS · AVAILABLE WORLDWIDE</span>
        </div>
      </div>
    </footer>
  );
}
