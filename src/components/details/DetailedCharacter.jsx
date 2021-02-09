import React from 'react';
import propTypes from 'prop-types';
import styles from './detailedcharacter.css';

const DetailedCharacter = ({ name, image, id }) => {
    
  return (
    <div id={id} className={styles.Detailed}>
      <figure data-testid="one-character">
        <img src={image} />
        <figcaption>{name}</figcaption>
      </figure>
    </div>
  );
};

DetailedCharacter.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  image:propTypes.string.isRequired
};

export default DetailedCharacter;
