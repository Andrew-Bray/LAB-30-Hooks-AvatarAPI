
import React from 'react';
import { render } from '@testing-library/react';
import DetailedCharacter from './DetailedCharacter';

describe('DetailedCharacter Snapshot', () => {
  it('matches a snapshot', () => {
    const { asFragment } = render(<DetailedCharacter   image="http://image.com"
      name="Billy"
      id="fnrivnvkfmnfgknvdfn436"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
