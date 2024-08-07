import React from 'react';

import { Main } from 'components/layouts/Main';
import { Wave } from 'components/general/Wave';
import { PlaybarSection } from 'components/sections/PlaybarSection/PlaybarSection';
import { FAQsSection } from 'components/sections/FAQsSection';

function FaqsPage() {
  return (
    <Main>
      <PlaybarSection />
      <Wave>
        <FAQsSection displayAllFaqs />
      </Wave>
    </Main>
  );
}
export default FaqsPage;
