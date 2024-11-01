import '@testing-library/jest-dom';

import Home from '@/app/page';
import { render, screen } from '@testing-library/react';
import BaseLayout from './';

describe('BaseLayout', () => {
  beforeEach(() => {
    render(
      <BaseLayout>
        <Home />
      </BaseLayout>,
    );
  });

  it('should render a container', () => {
    const container = screen.getByRole('container');
    expect(container).toBeInTheDocument();
  });
  
  it('should render a header', () => {
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('should render a footer', () => {
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });
  it('should render a navigation', () => {
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });
  it('should render a main', () => {
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
});
