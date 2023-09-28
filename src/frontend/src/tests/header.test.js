import { screen, render } from '@testing-library/react';

import Header from '../components/Header'

describe('Test render Header Component', () => {
  it('Render Header Component', () => {
    render(
      <Header />
    )

    const nameText = screen.getByAltText('logo')
    expect(nameText).toBeInTheDocument();
  });
});