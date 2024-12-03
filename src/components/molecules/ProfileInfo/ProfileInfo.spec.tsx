import { render, screen } from "@testing-library/react";
import ProfileInfo from ".";
import { faker } from "@faker-js/faker";

describe('Profile Info Molecules', () => {
  it('Should display the full name and position passed in the parameters.', () => {
    const name = faker.person.fullName();
    const position = faker.person.jobTitle();
    render(<ProfileInfo name={name} position={position} />);
    const profileName = screen.getByRole('name');
    const profilePosition = screen.getByRole('position');
    expect(profileName.textContent).toBe(name);
    expect(profilePosition.textContent).toBe(position);
  });
  it('Should display the "Usuário" if the name is not provided', () => {
    const position = faker.person.jobTitle();
    render(<ProfileInfo name="" position={position} />);
    const profileName = screen.getByRole('name');
    const profilePosition = screen.getByRole('position');
    expect(profileName.textContent).toBe("Usuário");
    expect(profilePosition.textContent).toBe(position);
  });
  it('Should display "membro" if position is not provided', () => {
    const name = faker.person.fullName();
    render(<ProfileInfo name={name} position="" />);
    const profileName = screen.getByRole('name');
    const profilePosition = screen.getByRole('position');
    expect(profileName.textContent).toBe(name);
    expect(profilePosition.textContent).toBe("membro");
  });
})