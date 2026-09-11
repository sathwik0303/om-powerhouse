import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { C } from "../theme";
import { Sub, Words, body } from "../components/Type";

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const sweep = interpolate(frame, [0, 70], [-1200, 0], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <AbsoluteFill style={{ overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: sweep,
            width: 600,
            height: "100%",
            background: "linear-gradient(90deg, transparent, rgba(0,229,153,0.10), transparent)",
          }}
        />
      </AbsoluteFill>
      <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Words text="EVERY ENGINE COUNTS." delay={6} size={72} color={C.neon} maxWidth={1200} />
        <div style={{ height: 26 }} />
        <Words text="READY TO POWER A CLEANER FUTURE?" delay={30} size={96} maxWidth={1500} />
        <div style={{ height: 40 }} />
        <Sub delay={90}>omsolns18@gmail.com · +91 95525 45042 · Pune, Maharashtra, India</Sub>
        <div style={{ height: 46 }} />
        <div
          style={{
            padding: "24px 56px",
            borderRadius: 999,
            background: C.green,
            color: "#05130E",
            fontFamily: body,
            fontWeight: 500,
            fontSize: 30,
            letterSpacing: 3,
            opacity: interpolate(frame, [110, 140], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
            transform: `translateY(${interpolate(frame, [110, 140], [24, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}px)`,
          }}
        >
          TALK TO OM SOLUTIONS →
        </div>
      </div>
    </AbsoluteFill>
  );
};
