import React from 'react';
import { Main } from 'components/layouts/Main';
import { PlaybarSection } from 'components/sections/PlaybarSection/PlaybarSection';
import { ServicesSection } from 'components/sections/ServicesSection';

function OurServicesPage() {
  return (
    <Main>
      <>
        <PlaybarSection />
        <ServicesSection displayAllServices />
      </>
    </Main>
  );
}
export default OurServicesPage;
