import Offer from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import { useState } from 'react';

type OffersListProps = {
  offers: Offer[];
};

function OffersList({ offers }: OffersListProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<number>();
  // eslint-disable-next-line no-console
  console.log(activeOfferId);

  const offersList = offers.map((element) => {
    const keyValue = `${element.id}-${element.title}`;
    return <OfferCard key={keyValue.toString()} offer={element} onMouseOver={() => setActiveOfferId(element.id)} />;
  });

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersList}
    </div>
  );
}

export default OffersList;
