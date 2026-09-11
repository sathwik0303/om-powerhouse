import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { C } from "../theme";
import { Eyebrow, Words } from "../components/Type";
import { body } from "../components/Type";

const CHIPS = ["RETROFIT.", "TRANSFORM.", "RUN CLEANER."];

export const Problem: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ padding: "0 140px", justifyContent: "center" }}>
      <Eyebrow delay={4}>The problem &amp; the mission</Eyebrow>
      <div style={{ height: 40 }} />
      <Words text="INDIA DOESN'T NEED TO REPLACE EVERY ENGINE." delay={16} size={96} maxWidth={1500} />
      <div style={{ height: 60 }} />
      <div style={{ display: "flex", gap: 26 }}>
        {CHIPS.map((chip, i) => {
          const d = 96 + i * 16;
          const o = interpolate(frame - d, [0, 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          const x = interpolate(frame - d, [0, 20], [-40, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div
              key={chip}
              style={{
                opacity: o,
                transform: `translateX(${x}px)`,
                padding: "20px 38px",
                border: `1px solid rgba(16,185,129,0.45)`,
                borderRadius: 999,
                background: "rgba(16,185,129,0.08)",
                fontFamily: body,
                fontSize: 30,
                letterSpacing: 3,
                color: C.neon,
              }}
            >
              {chip}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
