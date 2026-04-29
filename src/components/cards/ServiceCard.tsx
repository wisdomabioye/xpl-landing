import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import type { Service } from "@/config/content";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card withTopRule style={{ padding: 28, minHeight: 220 }}>
      <div
        style={{
          width: 36,
          height: 36,
          border: "1px solid var(--color-hairline-strong)",
          display: "grid",
          placeItems: "center",
          color: "var(--color-accent)",
          marginBottom: 20,
        }}
      >
        <Icon name={service.icon} size={18} />
      </div>
      <div className="font-display-tight" style={{ fontSize: 22, marginBottom: 8 }}>
        {service.name}
      </div>
      <p style={{ color: "var(--color-muted)", fontSize: 14, margin: 0 }}>{service.shortDesc}</p>
    </Card>
  );
}
