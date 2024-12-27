import { ReviewsList } from 'components/ReviewsList/ReviewsList';

export const ReviewsHorizontalList = ({ data }: { data: App.Review[] }) => (
  <ReviewsList reviews={data} horizontal />
);
