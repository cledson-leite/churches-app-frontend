import { act, render, screen } from "@testing-library/react";
import Profile from ".";
import { renderHook } from "@testing-library/react-hooks";
import { useColapseStore } from "@/viewmodels/stores";

describe('Profile Molecules', () => {
  it('Should display the components correctly', () => {
    render(<Profile />);
    const avatar = screen.getByRole('img');
    const name = screen.getByRole('name');
    const position = screen.getByRole('position');
    const btn = screen.getByRole('button');
    expect(avatar).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(position).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });
  it('Should hide profileInfo if it is collapsed true', () => {
    const {result} = renderHook(() => useColapseStore())
    render(<Profile />);
    const name = screen.getByRole('name');
    const position = screen.getByRole('position');
    expect(result.current.isCollapsed).toBe(false);
    expect(name).toBeInTheDocument();
    expect(position).toBeInTheDocument();
    act(() => {
      result.current.setIsCollapsed(true);
    })
    expect(result.current.isCollapsed).toBe(true);
    expect(name).not.toBeInTheDocument();
    expect(position).not.toBeInTheDocument();
  });
})