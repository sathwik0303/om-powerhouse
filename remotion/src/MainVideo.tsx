import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";
import { Bg } from "./components/Bg";
import { Intro } from "./scenes/Intro";
import { Problem } from "./scenes/Problem";
import { Flow } from "./scenes/Flow";
import { Benefits } from "./scenes/Benefits";
import { Schematic } from "./scenes/Schematic";
import { Impact } from "./scenes/Impact";
import { Outro } from "./scenes/Outro";

const T = 20;

export const MainVideo: React.FC = () => (
  <AbsoluteFill>
    <Bg />
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={240}>
        <Intro />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={wipe({ direction: "from-bottom" })}
        timing={springTiming({ config: { damping: 200 }, durationInFrames: T })}
      />
      <TransitionSeries.Sequence durationInFrames={230}>
        <Problem />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />
      <TransitionSeries.Sequence durationInFrames={340}>
        <Flow />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={wipe({ direction: "from-left" })}
        timing={springTiming({ config: { damping: 200 }, durationInFrames: T })}
      />
      <TransitionSeries.Sequence durationInFrames={280}>
        <Benefits />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />
      <TransitionSeries.Sequence durationInFrames={280}>
        <Schematic />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={wipe({ direction: "from-bottom" })}
        timing={springTiming({ config: { damping: 200 }, durationInFrames: T })}
      />
      <TransitionSeries.Sequence durationInFrames={260}>
        <Impact />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: T })} />
      <TransitionSeries.Sequence durationInFrames={290}>
        <Outro />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  </AbsoluteFill>
);
