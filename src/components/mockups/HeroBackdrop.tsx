export function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        style={{ position: "absolute", inset: 0 }}
      >
        <defs>
          <linearGradient id="floorFade" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="rgba(251,146,60,0)" />
            <stop offset="1" stopColor="rgba(251,146,60,0.18)" />
          </linearGradient>
        </defs>
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1="0"
            x2="100%"
            y1={`${50 + i * 5}%`}
            y2={`${50 + i * 5}%`}
            stroke="url(#floorFade)"
            strokeWidth="0.5"
          />
        ))}
        {Array.from({ length: 21 }).map((_, i) => {
          const x = i * 5;
          return (
            <line
              key={`v${i}`}
              x1={`${x}%`}
              y1="50%"
              x2={`${50 + (x - 50) * 1.6}%`}
              y2="100%"
              stroke="rgba(251,146,60,0.08)"
              strokeWidth="0.5"
            />
          );
        })}
      </svg>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 800,
          height: 800,
          transform: "translate(-50%,-30%)",
          background: "radial-gradient(circle, rgba(120,60,20,0.55), transparent 60%)",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}
