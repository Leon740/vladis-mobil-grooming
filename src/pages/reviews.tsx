import React from 'react';

import { Main } from 'components/layouts/Main';
import { PlaybarSection } from 'components/sections/PlaybarSection/PlaybarSection';
import { ReviewsSection } from 'components/sections/ReviewsSection';

function ReviewsPage() {
  return (
    <Main>
      <>
        <PlaybarSection />
        <ReviewsSection />
      </>
    </Main>
  );
}
export default ReviewsPage;
