import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { C } from "../theme";

export const Bg: React.FC = () => {
  const frame = useCurrentFrame();
  const drift = Math.sin(frame / 90) * 60;
  const drift2 = Math.cos(frame / 120) * 80;
  return (
    <AbsoluteFill style={{ backgroundColor: C.forest }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(900px 700px at ${960 + drift}px ${420 + drift2}px, rgba(16,185,129,0.20), transparent 70%),
            radial-gradient(1100px 800px at ${300 - drift2}px ${900 + drift}px, rgba(15,23,42,0.85), transparent 70%),
            linear-gradient(160deg, ${C.forest} 0%, ${C.forest2} 55%, ${C.slate} 100%)`,
        }}
      />
      <AbsoluteFill
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,250,247,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(245,250,247,0.045) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
          transform: `translateY(${(frame % 96) * -1}px)`,
          opacity: 0.6,
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,31,24,0.55), transparent 30%, transparent 70%, rgba(10,31,24,0.75))",
          opacity: interpolate(frame, [0, 30], [1, 0.9], { extrapolateRight: "clamp" }),
        }}
      />
    </AbsoluteFill>
  );
};
