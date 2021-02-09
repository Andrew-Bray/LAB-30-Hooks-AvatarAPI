import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DetailPage from './DetailPage';

describe('Detail container', () => {
  it('should display one Character', async() => {
    // eslint-disable-next-line max-len
    render(<DetailPage match={{ params: { id: '5cf5679a915ecad153ab68f7' } }} />);

    const figure = await screen.findByTestId('one-character');

    return waitFor(() => {
      expect(figure).not.toBeEmptyDOMElement();
    });
  });
});
