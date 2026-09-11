import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { C } from "../theme";
import { Eyebrow, Words, body, display } from "../components/Type";

const STATS = [
  { v: 320, suffix: " kVA", label: "KOEL genset on diesel + PNG" },
  { v: 65, suffix: "%", label: "Diesel replacement achieved" },
  { v: 34, suffix: "%", label: "Reported fuel-cost saving" },
];

export const Impact: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ padding: "0 140px", justifyContent: "center" }}>
      <Eyebrow delay={4}>Verified in the field</Eyebrow>
      <div style={{ height: 26 }} />
      <Words text="REAL INSTALLATIONS. REAL NUMBERS." delay={12} size={78} />
      <div style={{ height: 60 }} />
      <div style={{ display: "flex", gap: 70 }}>
        {STATS.map((s, i) => {
          const d = 70 + i * 22;
          const p = interpolate(frame - d, [0, 55], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          const eased = 1 - Math.pow(1 - p, 3);
          return (
            <div key={s.label} style={{ opacity: interpolate(p, [0, 0.15], [0, 1]) }}>
              <div style={{ fontFamily: display, fontWeight: 800, fontSize: 116, color: C.neon, lineHeight: 1 }}>
                {Math.round(s.v * eased)}
                {s.suffix}
              </div>
              <div style={{ height: 16 }} />
              <div style={{ fontFamily: body, color: C.muted, fontSize: 26, maxWidth: 330, lineHeight: 1.35 }}>
                {s.label}
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ height: 60 }} />
      <div
        style={{
          fontFamily: body,
          fontSize: 24,
          letterSpacing: 3,
          color: "rgba(245,250,247,0.5)",
          opacity: interpolate(frame, [170, 200], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        }}
      >
        BIRLA TISYA, BENGALURU · NEVATIA STEEL &amp; ALLOYS · AND MORE
      </div>
    </AbsoluteFill>
  );
};
