import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { C } from "../theme";
import { Eyebrow, Words, body } from "../components/Type";

const STEPS = [
  { n: "01", t: "Diesel Engine", c: "Your existing engine, unchanged." },
  { n: "02", t: "Dual Fuel Kit", c: "Gas train, mixer, sensors, controller." },
  { n: "03", t: "Diesel + Gas", c: "Controlled gaseous injection & mixing." },
  { n: "04", t: "Cleaner Operation", c: "Same power. Lower cost. Less smoke." },
];

export const Flow: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill style={{ padding: "0 120px", justifyContent: "center" }}>
      <Eyebrow delay={4}>How it works</Eyebrow>
      <div style={{ height: 30 }} />
      <Words text="FROM DIESEL TO DUAL FUEL" delay={14} size={84} color={C.white} />
      <div style={{ height: 70 }} />
      <div style={{ display: "flex", alignItems: "stretch", gap: 0 }}>
        {STEPS.map((s, i) => {
          const d = 80 + i * 26;
          const sp = spring({ frame: frame - d, fps, config: { damping: 18, stiffness: 140 } });
          const lineW = interpolate(frame - (d + 14), [0, 20], [0, 56], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <div key={s.n} style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: 320,
                  padding: 34,
                  borderRadius: 22,
                  border: "1px solid rgba(245,250,247,0.12)",
                  background: "rgba(13,40,30,0.72)",
                  opacity: sp,
                  transform: `translateY(${interpolate(sp, [0, 1], [50, 0])}px) scale(${interpolate(sp, [0, 1], [0.94, 1])})`,
                  boxShadow: "0 30px 60px rgba(0,0,0,0.35)",
                }}
              >
                <div style={{ fontFamily: body, color: C.neon, letterSpacing: 4, fontSize: 20 }}>{s.n}</div>
                <div style={{ height: 14 }} />
                <div style={{ fontFamily: body, fontWeight: 500, color: C.white, fontSize: 34, lineHeight: 1.1 }}>
                  {s.t}
                </div>
                <div style={{ height: 12 }} />
                <div style={{ fontFamily: body, color: C.muted, fontSize: 22, lineHeight: 1.4 }}>{s.c}</div>
              </div>
              {i < STEPS.length - 1 ? (
                <div style={{ width: 56, display: "flex", alignItems: "center" }}>
                  <div style={{ height: 2, width: lineW, background: C.green }} />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
