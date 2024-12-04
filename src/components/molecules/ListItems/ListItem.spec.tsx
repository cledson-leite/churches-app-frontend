import { render, screen } from '@testing-library/react';
import ListItems from '.';

describe('ListItem Molecules', () => {
  it('Should display the components correctly', () => {
    render(<ListItems />);
    const children = screen.getAllByRole('listitem');
    expect(children).toHaveLength(4);
  });
});
