import React from 'react';

import { Main } from 'components/layouts/Main';
import { Wave } from 'components/general/Wave';
import { HeroSection } from 'components/sections/HeroSection';
import { FeaturesSection } from 'components/sections/FeaturesSection';
import { ServicesSection } from 'components/sections/ServicesSection';
import { BeforeTheSessionSection } from 'components/sections/BeforeTheSessionSection';
import { ReviewsSection } from 'components/sections/ReviewsSection';
import { FAQsSection } from 'components/sections/FAQsSection';

function IndexPage() {
  return (
    <Main>
      <HeroSection />

      <Wave>
        <FeaturesSection />
      </Wave>

      <ServicesSection />

      <Wave>
        <BeforeTheSessionSection />
      </Wave>

      <ReviewsSection />

      <Wave>
        <FAQsSection />
      </Wave>
    </Main>
  );
}

export default IndexPage;
