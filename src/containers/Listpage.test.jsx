import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import ListPage from './ListPage';

describe('ListPage container', () => {
  it('should display characters in a list', async() => {
    render(
      <Router>
        <ListPage />
      </Router>);

    screen.getByText('Loading');

    const ul = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
