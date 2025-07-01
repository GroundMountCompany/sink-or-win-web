import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Why Choose Sink or Win"
    description="Experience the most exciting floating par-3 challenge with the chance to win big."
  >
    <VerticalFeatureRow
      title="Floating Par-3 Experience"
      description="Our unique floating green creates an unforgettable golf experience that challenges even the best players. The excitement of hitting to a floating target is unmatched."
      image="/assets/images/feature.svg"
      imageAlt="Floating par-3 green illustration"
    />
    <VerticalFeatureRow
      title="$10,000 Hole-in-One Challenge"
      description="Take on the ultimate challenge with a $10,000 hole-in-one prize. Our challenge creates excitement and brings out the competitive spirit in every golfer."
      image="/assets/images/feature2.svg"
      imageAlt="Prize money illustration"
      reverse
    />
    <VerticalFeatureRow
      title="Premier Golf Locations"
      description="Experience the challenge at top-rated golf courses across Texas. Each location offers the same exciting opportunity to test your skills and win big."
      image="/assets/images/feature3.svg"
      imageAlt="Golf course locations illustration"
    />
  </Section>
);

export { VerticalFeatures };
