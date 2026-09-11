import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { C } from "../theme";
import { Eyebrow, Sub, Words, body } from "../components/Type";

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 240], [1.06, 1]);
  const ringR = interpolate(frame, [0, 120], [0, 520], { extrapolateRight: "clamp" });
  const ringO = interpolate(frame, [0, 120], [0.5, 0], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ transform: `scale(${scale})` }}>
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            width: ringR,
            height: ringR,
            borderRadius: "50%",
            border: `2px solid ${C.neon}`,
            opacity: ringO,
          }}
        />
      </AbsoluteFill>
      <AbsoluteFill style={{ padding: "0 140px", justifyContent: "center" }}>
        <Eyebrow delay={6}>OM Solutions · Est. 2021 · Pune, India</Eyebrow>
        <div style={{ height: 34 }} />
        <Words text="POWERING A CLEANER INDIA," delay={22} size={104} />
        <Words text="ONE ENGINE AT A TIME." delay={44} size={104} color={C.neon} />
        <div style={{ height: 34 }} />
        <Sub delay={90}>Smarter power. Lower fuel cost. Cleaner performance.</Sub>
      </AbsoluteFill>
      <AbsoluteFill style={{ justifyContent: "flex-end", padding: 90 }}>
        <span
          style={{
            fontFamily: body,
            color: C.muted,
            letterSpacing: 5,
            fontSize: 18,
            textTransform: "uppercase",
            opacity: interpolate(frame, [120, 150], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
          }}
        >
          Dual fuel kit technology
        </span>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
