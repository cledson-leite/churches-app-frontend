import '@testing-library/jest-dom'

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import {faker} from '@faker-js/faker'
import Header from "./";

describe('Header ', () => {
  const children = faker.lorem.word()
  beforeEach(() => {
    render(<Header>{children}</Header>);
  })
  it('should render header', () => {
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  })

  it('should render icon button', () => {
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  })

  it('should call state when clicked', async () => {
    const button = screen.getByRole('button');
    expect(screen.getByRole('iconRight')).toBeInTheDocument();
    expect(screen.queryByRole('iconLeft')).not.toBeInTheDocument();
    userEvent.click(button)
    await waitFor(() => expect(screen.getByRole('iconLeft')).toBeInTheDocument());
   expect(screen.queryByRole('iconRight')).not.toBeInTheDocument();
  })

  it('should render title with received title', () => {
    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe(children);
  });
})