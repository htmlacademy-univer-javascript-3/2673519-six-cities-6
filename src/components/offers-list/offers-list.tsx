import { Offer } from '@types';
import PlaceCard from '@components/place-card/place-card.js';
import { useState } from 'react';

type OffersListProps = {
    offers: Offer[];
};

export default function OffersList({offers}: OffersListProps): JSX.Element {
  const [, setActiveOfferId] = useState<string | null>(null);

  const handleCursorEnter = (offerId: string) => {
    setActiveOfferId(offerId);
  };

  const handleCursorLeave = () => {
    setActiveOfferId(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onCursorEnter={() => handleCursorEnter(offer.id)}
          onCursorLeave={handleCursorLeave}
        />))}
    </div>
  );
}
