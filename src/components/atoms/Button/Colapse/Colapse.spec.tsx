import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import Colapse from '.';

describe('Colapse atoms', () => {
  it('Should render the correct icon based on isCollapsed', () => {
     render(<Colapse isCollapsed={false} setIsCollapsed={() => {}} />);
    const left = screen.getByTitle('chevron-left');
    const right = screen.queryByTitle('chevron-right');

    expect(left).toBeInTheDocument();
    expect(right).not.toBeInTheDocument();
  });
  it('Should toggle isCollapsed on button click', () => {
    const setCollapsed = jest.fn();
    render(<Colapse isCollapsed={false} setIsCollapsed={setCollapsed} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(setCollapsed).toHaveBeenCalledWith(true);
  });
  it('Should display right arrow in case of receiving true in is collapsed', () => {
    render(<Colapse isCollapsed={true} setIsCollapsed={() => {}} />);
    const left = screen.queryByTitle('chevron-left');
    const right = screen.getByTitle('chevron-right');

    expect(left).not.toBeInTheDocument();
    expect(right).toBeInTheDocument();
  });
});
