import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/config/navigation";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/cn";

export function Navbar() {
  const scrolled = useScrolled(12);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  return (
    <>
      <header className={cn("nav", scrolled && "scrolled")}>
        <div className="wrap nav-inner">
          <Logo />
          <nav className="nav-links" aria-label="Primary">
            {primaryNav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) => cn("nav-link", isActive && "active")}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="nav-cta">
            <span className="desktop-cta">
              <Button to="/contact" variant="primary">
                <span>Start a project</span>
                <Icon name="arrow-right" size={16} className="arrow" />
              </Button>
            </span>
            <button
              type="button"
              className={cn("hamburger", open && "open")}
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpenPath(open ? null : pathname)}
            >
              <span /> <span /> <span />
            </button>
          </div>
        </div>
      </header>

      <div className={cn("mobile-overlay", open && "open")} aria-hidden={!open}>
        {primaryNav.map((item) => (
          <a
            key={item.to}
            href={item.to}
            onClick={(e) => {
              e.preventDefault();
              navigate(item.to);
              setOpenPath(null);
            }}
          >
            {item.label}
          </a>
        ))}
        <div className="mobile-menu-cta">
          <Button to="/contact" variant="primary" onClick={() => setOpenPath(null)}>
            <span>Start a project</span>
            <Icon name="arrow-right" size={16} className="arrow" />
          </Button>
        </div>
      </div>
    </>
  );
}
