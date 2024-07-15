import React from 'react';

import { Main } from 'components/layouts/Main';
import { PlaybarSection } from 'components/sections/PlaybarSection/PlaybarSection';
import { FAQsSection } from 'components/sections/FAQsSection';

function FaqsPage() {
  return (
    <Main>
      <>
        <PlaybarSection />
        <FAQsSection displayAllFaqs />
      </>
    </Main>
  );
}
export default FaqsPage;
