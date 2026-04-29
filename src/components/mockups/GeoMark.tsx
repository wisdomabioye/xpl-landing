export function GeoMark({ size = 320, animated = true }: { size?: number; animated?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 320 320" style={{ display: "block" }}>
      <defs>
        <pattern id="dotgrid" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.6" fill="rgba(255,255,255,0.18)" />
        </pattern>
      </defs>
      <rect x="20" y="20" width="280" height="280" fill="none" stroke="rgba(251,146,60,0.4)" strokeWidth="1" />
      <rect x="40" y="40" width="240" height="240" fill="url(#dotgrid)" />
      <g stroke="var(--color-accent)" strokeWidth="1.5" fill="none">
        <line x1="60" y1="60" x2="260" y2="260">
          {animated && <animate attributeName="stroke-dasharray" from="0,400" to="400,0" dur="1.4s" fill="freeze" />}
        </line>
        <line x1="260" y1="60" x2="60" y2="260">
          {animated && (
            <animate attributeName="stroke-dasharray" from="0,400" to="400,0" dur="1.4s" begin="0.2s" fill="freeze" />
          )}
        </line>
      </g>
      {([
        [40, 40, "M0 8V0h8"],
        [280, 40, "M0 0h8v8"],
        [40, 280, "M0 0v8h8"],
        [280, 280, "M0 8h8V0"],
      ] as const).map(([x, y, d], i) => (
        <g key={i} transform={`translate(${x - 4},${y - 4})`}>
          <path d={d} stroke="var(--color-accent)" fill="none" strokeWidth="1.5" />
        </g>
      ))}
      <circle cx="160" cy="160" r="60" fill="none" stroke="rgba(251,146,60,0.5)" strokeDasharray="2 6" />
      <circle cx="160" cy="160" r="42" fill="none" stroke="rgba(255,255,255,0.15)" />
      <circle cx="160" cy="160" r="4" fill="var(--color-accent)" />
      <text x="20" y="14" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#6b7280" letterSpacing="2">0,0</text>
      <text x="266" y="316" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#6b7280" letterSpacing="2">280,280</text>
      <text x="160" y="180" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--color-accent)" textAnchor="middle" letterSpacing="2">XPL</text>
    </svg>
  );
}
