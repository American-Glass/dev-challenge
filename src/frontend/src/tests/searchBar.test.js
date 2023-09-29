import { screen, render } from '@testing-library/react';

import { SearchBar } from '../components';

describe('Test render Header Component', () => {
  it('Render Header Component', () => {
    render(
      <SearchBar />
    )

    const input = screen.getByPlaceholderText('Digite o produto a ser encontrado')
    expect(input).toBeInTheDocument();

    const btn = screen.getByAltText('lupa')
    expect(btn).toBeInTheDocument();
  });
});