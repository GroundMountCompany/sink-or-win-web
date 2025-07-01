import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { About } from './About';
import { Banner } from './Banner';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { HowItWorks } from './HowItWorks';
import { MoneyShot } from './MoneyShot';
import { Pricing } from './Pricing';
import { Sponsors } from './Sponsors';
import { Testimonials } from './Testimonials';
import { VerticalFeatures } from './VerticalFeatures';
import { VideoHero } from './VideoHero';

const Base = () => (
  <div className="bg-white text-brand antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <VideoHero />
    <About />
    <HowItWorks />
    <MoneyShot />
    <Pricing />
    <Testimonials />
    <Sponsors />
    <VerticalFeatures />
    <Banner />
    <Contact />
    <Footer />
  </div>
);

export { Base };
