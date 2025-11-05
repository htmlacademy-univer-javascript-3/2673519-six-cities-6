import { Offer } from '@types';
import PlaceCard from '@components/place-card/place-card';
import { CardType } from '@consts';

type NearbyOffersListProps = {
  offers: Offer[] | undefined;
};

export default function NearbyOffersList({ offers }: NearbyOffersListProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers && offers.length > 0 ? (
          offers.map((offer) => (
            <PlaceCard
              key={offer.id}
              offer={offer}
              onCursorEnter={() => {}}
              onCursorLeave={() => {}}
              cardType={CardType.Nearest}
            />
          ))
        ) : (
          <p style={{ textAlign: 'center', fontSize: '32px' }}>No places in the neighbourhood available</p>
        )}
      </div>
    </section>
  );
}
