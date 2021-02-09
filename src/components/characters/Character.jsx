import React from 'react';
import propTypes from 'prop-types';
import styles from './character.css';

const Character = ({ name, photoUrl }) => {
    
  return (
    <figure className={styles.Character}>
      <img src={photoUrl} />
      <figcaption>{name}</figcaption>
    </figure>
  );
};

Character.propTypes = {
  name: propTypes.string.isRequired,
  photoUrl: propTypes.string.isRequired
};

export default Character;
