import React from 'react';

import { Main } from 'components/layouts/Main';
import { HeroSection } from 'components/sections/HeroSection';
import { FeaturesSection } from 'components/sections/FeaturesSection';
import { ServicesSection } from 'components/sections/ServicesSection';
import { BeforeTheSessionSection } from 'components/sections/BeforeTheSessionSection';
import { ReviewsSection } from 'components/sections/ReviewsSection';
import { FAQsSection } from 'components/sections/FAQsSection';

function IndexPage() {
  return (
    <Main>
      <>
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <BeforeTheSessionSection />
        <ReviewsSection />
        <FAQsSection />
      </>
    </Main>
  );
}

export default IndexPage;
