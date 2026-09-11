import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { C } from "../theme";
import { Eyebrow, Words, body } from "../components/Type";

const HOTSPOTS = [
  { x: 180, y: 90, label: "Gas Filter" },
  { x: 380, y: 40, label: "Pressure Regulator" },
  { x: 570, y: 130, label: "Flow Control Valve" },
  { x: 760, y: 60, label: "Gas Air Mixer" },
  { x: 300, y: 300, label: "Shut-off Valve" },
  { x: 620, y: 330, label: "Knock Sensor" },
  { x: 850, y: 270, label: "EGT Sensor" },
];

export const Schematic: React.FC = () => {
  const frame = useCurrentFrame();
  const draw = interpolate(frame, [10, 120], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const pathLen = 2600;
  return (
    <AbsoluteFill style={{ padding: "0 120px", justifyContent: "center" }}>
      <Eyebrow delay={4}>Inside the kit</Eyebrow>
      <div style={{ height: 24 }} />
      <Words text="ENGINEERED, SENSED, CONTROLLED" delay={12} size={72} />
      <div style={{ height: 40 }} />
      <div style={{ position: "relative", width: 1080, height: 420 }}>
        <svg width={1080} height={420} style={{ position: "absolute", inset: 0 }}>
          <rect
            x={120}
            y={140}
            width={520}
            height={200}
            rx={22}
            fill="rgba(16,185,129,0.06)"
            stroke="rgba(245,250,247,0.18)"
            strokeDasharray={pathLen}
            strokeDashoffset={pathLen * (1 - draw)}
          />
          <path
            d="M60 240 H120 M640 200 H860 M860 200 V80 M180 140 V60 M380 140 V60 M560 340 V400"
            stroke={C.green}
            strokeWidth={3}
            fill="none"
            strokeDasharray={900}
            strokeDashoffset={900 * (1 - draw)}
          />
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x={165 + i * 120}
              y={175 - Math.sin((frame + i * 20) / 12) * 12}
              width={70}
              height={110}
              rx={10}
              fill="rgba(0,229,153,0.16)"
              stroke="rgba(0,229,153,0.5)"
              opacity={draw}
            />
          ))}
        </svg>
        {HOTSPOTS.map((h, i) => {
          const d = 110 + i * 16;
          const o = interpolate(frame - d, [0, 18], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          const pulse = 1 + Math.sin((frame + i * 12) / 10) * 0.18;
          return (
            <div
              key={h.label}
              style={{
                position: "absolute",
                left: h.x,
                top: h.y,
                display: "flex",
                alignItems: "center",
                gap: 12,
                opacity: o,
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 7,
                  background: C.neon,
                  boxShadow: `0 0 0 ${8 * pulse}px rgba(0,229,153,0.16)`,
                }}
              />
              <span style={{ fontFamily: body, color: C.white, fontSize: 22, letterSpacing: 1 }}>{h.label}</span>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
