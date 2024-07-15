import React from 'react';

import { Main } from 'components/layouts/Main';
import { PlaybarSection } from 'components/sections/PlaybarSection/PlaybarSection';
import { BeforeTheSessionSection } from 'components/sections/BeforeTheSessionSection';

function BeforeTheSessionPage() {
  return (
    <Main>
      <>
        <PlaybarSection />
        <BeforeTheSessionSection />
      </>
    </Main>
  );
}
export default BeforeTheSessionPage;
