import React from 'react';

import { Main } from 'components/layouts/Main';
import { Wave } from 'components/general/Wave';
import { PlaybarSection } from 'components/sections/PlaybarSection/PlaybarSection';
import { ServicesSection } from 'components/sections/ServicesSection';

function ServicesPage() {
  return (
    <Main>
      <PlaybarSection />
      <Wave>
        <ServicesSection displayAllServices />
      </Wave>
    </Main>
  );
}
export default ServicesPage;
