import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { loadFont as loadDisplay } from "@remotion/google-fonts/Archivo";
import { loadFont as loadBody } from "@remotion/google-fonts/Barlow";
import { C } from "../theme";

export const display = loadDisplay("normal", { weights: ["700", "800"], subsets: ["latin"] }).fontFamily;
export const body = loadBody("normal", { weights: ["400", "500"], subsets: ["latin"] }).fontFamily;

export const Eyebrow: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame - delay, [0, 18], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const w = interpolate(frame - delay, [0, 30], [0, 64], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 18, opacity: o }}>
      <div style={{ height: 2, width: w, background: C.neon }} />
      <span
        style={{
          fontFamily: body,
          letterSpacing: 6,
          fontSize: 20,
          textTransform: "uppercase",
          color: C.neon,
          fontWeight: 500,
        }}
      >
        {children}
      </span>
    </div>
  );
};

export const Words: React.FC<{
  text: string;
  delay?: number;
  size?: number;
  color?: string;
  maxWidth?: number;
  lineHeight?: number;
}> = ({ text, delay = 0, size = 92, color = C.white, maxWidth = 1300, lineHeight = 1.02 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const words = text.split(" ");
  return (
    <div style={{ display: "flex", flexWrap: "wrap", maxWidth, gap: `0 ${size * 0.22}px` }}>
      {words.map((word, i) => {
        const d = delay + i * 3;
        const s = spring({ frame: frame - d, fps, config: { damping: 200 } });
        return (
          <span
            key={i}
            style={{
              fontFamily: display,
              fontWeight: 800,
              fontSize: size,
              lineHeight,
              color,
              letterSpacing: -size * 0.02,
              display: "inline-block",
              opacity: s,
              filter: `blur(${interpolate(s, [0, 1], [14, 0])}px)`,
              transform: `translateY(${interpolate(s, [0, 1], [size * 0.5, 0])}px)`,
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

export const Sub: React.FC<{ children: React.ReactNode; delay?: number; size?: number }> = ({
  children,
  delay = 0,
  size = 30,
}) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame - delay, [0, 24], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const y = interpolate(frame - delay, [0, 24], [22, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <p
      style={{
        fontFamily: body,
        fontSize: size,
        color: C.muted,
        maxWidth: 900,
        lineHeight: 1.45,
        opacity: o,
        transform: `translateY(${y}px)`,
        margin: 0,
      }}
    >
      {children}
    </p>
  );
};
