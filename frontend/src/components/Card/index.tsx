import React from 'react';
import './Card.scss';

interface CardProps {
  user: object;
}

const Card = (props: CardProps): JSX.Element => {
  return <div className="Card">Hello</div>;
};

export default Card;