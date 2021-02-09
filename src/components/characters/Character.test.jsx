
import React from 'react';
import { render } from '@testing-library/react';
import Character from './Character';

describe('Character Snapshot', () => {
  it('matches a snapshot', () => {
    const { asFragment } = render(<Character 
      photoUrl="http://image.com"
      name="Billy"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
