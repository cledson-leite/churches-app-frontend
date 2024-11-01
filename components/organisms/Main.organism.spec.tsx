import '@testing-library/jest-dom'

import { render, screen } from "@testing-library/react";
import MainOrganism from "./";

describe('Main Organism', () => {
  beforeEach(() => {
    render(
      <MainOrganism>Organismo</MainOrganism>
    );
  })
  it("should render header", () => {
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  })

  it("should render main", () => {
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  })
 })