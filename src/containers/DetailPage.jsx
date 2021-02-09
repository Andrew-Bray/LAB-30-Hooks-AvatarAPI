import React, { useState, useEffect } from 'react';
import { getOneCharacter } from '../services/fetchAPI';
import PropTypes from 'prop-types';
import DetailedCharacter from '../components/details/DetailedCharacter';

const DetailPage = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    getOneCharacter(match.params.id).then((character) => {
      setCharacter(character);
      setLoading(false);
    });
  }, []);

  if(loading) return <h1>Loading</h1>;

  return (
    <DetailedCharacter 
      id={character._id}
      image={character.photoUrl}
      name={character.name} />
  );
};

DetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default DetailPage;
