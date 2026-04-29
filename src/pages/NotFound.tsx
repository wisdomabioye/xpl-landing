import { Page } from "@/components/ui/Page";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function NotFound() {
  return (
    <Page>
      <section
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          paddingTop: 80,
          paddingBottom: 80,
        }}
      >
        <div className="wrap">
          <SectionLabel>404</SectionLabel>
          <h1
            className="font-display-tight"
            style={{ fontSize: "clamp(56px, 10vw, 144px)", margin: "0 0 28px" }}
          >
            Page not found.
          </h1>
          <p
            style={{
              color: "var(--color-muted)",
              fontSize: 18,
              maxWidth: 560,
              lineHeight: 1.6,
              marginBottom: 32,
            }}
          >
            The page you are looking for does not exist or has moved.
          </p>
          <Button to="/" variant="primary">
            <span>Back to home</span>
            <Icon name="arrow-right" size={16} className="arrow" />
          </Button>
        </div>
      </section>
    </Page>
  );
}
