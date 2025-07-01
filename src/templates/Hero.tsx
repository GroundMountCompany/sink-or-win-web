import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-dark">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={<>{'Can You Stick the Green?'}</>}
        description="$5 a shot. Land it on the green? You get a free one. Stick two in a row and you're firing for $10,000."
        button={
          <Link href="#pricing">
            <Button xl>Choose Your Shot Pack</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
