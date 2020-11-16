import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const Card = ({
  type,
  price,
  storage,
  user,
  sendUp,
}) => (
  <div className="card">
    <p className="card__type">{type}</p>
    <SwitchTransition>
      <CSSTransition
        key={price}
        classNames="my-node"
        addEndListener={(node, done) => {
          node.addEventListener('transitionend', done, false);
        }}
      >
        <h2 className="card__price"><span>$</span>{price}</h2>
      </CSSTransition>
    </SwitchTransition>

    <ul className="card__details">
      <li> <span>{storage}</span> Storage</li>
      <li>{user} users allowed</li>
      <li>Send up to <span>{sendUp} gb</span></li>
    </ul>
    <input type="button" value="Learn more" className="card__button" />
  </div>
);

Card.propTypes = {
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  storage: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  sendUp: PropTypes.string.isRequired,
};

export default Card;
