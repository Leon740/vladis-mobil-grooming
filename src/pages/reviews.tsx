import React from 'react';

import { Main } from 'components/layouts/Main';
import { Wave } from 'components/general/Wave';
import { PlaybarSection } from 'components/sections/PlaybarSection/PlaybarSection';
import { ReviewsSection } from 'components/sections/ReviewsSection';

function ReviewsPage() {
  return (
    <Main>
      <PlaybarSection />
      <Wave>
        <ReviewsSection />
      </Wave>
    </Main>
  );
}
export default ReviewsPage;
