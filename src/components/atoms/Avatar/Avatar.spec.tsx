import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import {faker} from '@faker-js/faker';


import Avatar from '.';

describe('Avatar atoms', () => {
  const img = faker.image.avatar();
  it('Should display a default image if imgsrc is not passed', () => {
    render(<Avatar />);
    const image = screen.getByRole('img');

    expect(image).toHaveAttribute(
      'src',
      '/_next/image?url=%2Fimg.jpg&w=128&q=75',
    );
  });
  it('Should display image provided by imgsrc', () => {
     render(<Avatar imgSrc={img} />);
    const image = screen.getByRole('img');
    const formatImg = img.replaceAll(':', '%3A').replaceAll('/', '%2F');
    expect(image).toHaveAttribute(
      'src',
      `/_next/image?url=${formatImg}&w=128&q=75`,
    );
  });
  it('Should display default image if imgsrc is invalid', () => {
    render(<Avatar imgSrc='anything' />);
    const image = screen.getByRole('img');

    expect(image).toHaveAttribute(
      'src',
      '/_next/image?url=%2Fimg.jpg&w=128&q=75',
    );
  });
});
