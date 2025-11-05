import { Offer } from '@types';
import PlaceCard from '@components/place-card/place-card.js';
import { useState, useEffect } from 'react';

type OffersListProps = {
    offers: Offer[];
    onActiveOfferChange: (offerId: string | null) => void;
};

export default function OffersList({offers, onActiveOfferChange}: OffersListProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  useEffect(() => {
    onActiveOfferChange(activeOfferId);
  }, [activeOfferId, onActiveOfferChange]);

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
