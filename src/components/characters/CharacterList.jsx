import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';
// import styles from './characterlist.css';

const CharacterList = ({ characters }) => {
  const characterElements = characters.map(character => (
    <li id={character._id}
      // className={styles.MyList} 
      key={character._id}>
      <Link to={`/character/${character._id}`}>
        <Character {...character} />
      </Link>
    </li>
  ));

  return (
    <ul data-testid="characters">
      {characterElements}
    </ul>  
    
  );
};

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired
};

export default CharacterList;
