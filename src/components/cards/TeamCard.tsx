import type { TeamMember } from "@/config/content";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div
      style={{
        position: "relative",
        border: "1px solid var(--color-rule)",
        background: "var(--color-bg-card)",
      }}
    >
      <div
        style={{
          aspectRatio: "1/1.1",
          background: member.photo
            ? `url(${member.photo}) center/cover no-repeat`
            : "repeating-linear-gradient(45deg, rgba(251,146,60,0.06) 0 1px, transparent 1px 12px), #2a1810",
          display: "grid",
          placeItems: "center",
          color: "var(--color-muted-2)",
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.18em",
        }}
      >
        {!member.photo && "PORTRAIT"}
      </div>
      <div style={{ padding: "16px 20px", borderTop: "1px solid var(--color-rule)" }}>
        <div style={{ fontWeight: 500, fontSize: 15 }}>{member.name}</div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--color-muted)",
            fontSize: 10,
            marginTop: 4,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          {member.role}
        </div>
      </div>
    </div>
  );
}
