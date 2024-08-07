import React from 'react';

import { Main } from 'components/layouts/Main';
import { Wave } from 'components/general/Wave';
import { PlaybarSection } from 'components/sections/PlaybarSection/PlaybarSection';
import { BeforeTheSessionSection } from 'components/sections/BeforeTheSessionSection';

function BeforeTheSessionPage() {
  return (
    <Main>
      <PlaybarSection />
      <Wave>
        <BeforeTheSessionSection />
      </Wave>
    </Main>
  );
}
export default BeforeTheSessionPage;
