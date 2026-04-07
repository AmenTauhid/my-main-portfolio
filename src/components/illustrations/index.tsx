import RetailPulseArt from "./RetailPulseArt";
import DocuMindArt from "./DocuMindArt";
import ForkableArt from "./ForkableArt";
import ChronoscopeArt from "./ChronoscopeArt";
import TrackThatStreetArt from "./TrackThatStreetArt";
import PharmaTrackArt from "./PharmaTrackArt";
import GithubPortfolioArt from "./GithubPortfolioArt";
import LinkCleanerArt from "./LinkCleanerArt";

export const projectIllustrations: Record<string, React.ComponentType<{ className?: string }>> = {
  retailpulse: RetailPulseArt,
  documind: DocuMindArt,
  forkable: ForkableArt,
  chronoscope: ChronoscopeArt,
  trackthatstreet: TrackThatStreetArt,
  pharmatrack: PharmaTrackArt,
  "github-portfolio": GithubPortfolioArt,
  linkcleaner: LinkCleanerArt,
};
