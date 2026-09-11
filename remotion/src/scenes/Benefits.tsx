import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { C } from "../theme";
import { Eyebrow, Words, body } from "../components/Type";

const ITEMS = [
  "Up to 70% gaseous fuel",
  "Lower operating fuel cost",
  "No engine replacement",
  "Same power level",
  "Dual mode flexibility",
  "Quick installation",
  "Lower maintenance",
  "Reduced particulates",
];

export const Benefits: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill style={{ padding: "0 140px", justifyContent: "center" }}>
      <Eyebrow delay={4}>Why dual fuel</Eyebrow>
      <div style={{ height: 28 }} />
      <Words text="EIGHT REASONS TO RETROFIT" delay={12} size={80} />
      <div style={{ height: 56 }} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 22 }}>
        {ITEMS.map((it, i) => {
          const d = 70 + i * 11;
          const sp = spring({ frame: frame - d, fps, config: { damping: 20, stiffness: 190 } });
          return (
            <div
              key={it}
              style={{
                padding: "30px 28px",
                borderRadius: 18,
                border: "1px solid rgba(16,185,129,0.25)",
                background: "rgba(15,23,42,0.55)",
                opacity: sp,
                transform: `translateY(${interpolate(sp, [0, 1], [40, 0])}px)`,
              }}
            >
              <div style={{ width: 10, height: 10, borderRadius: 5, background: C.neon }} />
              <div style={{ height: 18 }} />
              <div style={{ fontFamily: body, color: C.white, fontSize: 28, lineHeight: 1.2 }}>{it}</div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
