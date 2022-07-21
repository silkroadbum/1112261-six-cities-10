import Offer from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offer[];
};

function OffersList({ offers }: OffersListProps): JSX.Element {
  const offersList = offers.map((element) => {
    const keyValue = `${element.id}-${element.title}`;
    return <OfferCard key={keyValue.toString()} offer={element} />;
  });
  return (
    <div className="cities__places-list places__list tabs__content">
      {offersList}
    </div>
  );
}

export default OffersList;
