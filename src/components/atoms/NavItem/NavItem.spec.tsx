import { useColapseStore } from '@/viewmodels/stores';
import { act, render, renderHook, screen } from '@testing-library/react';
import NavItem from '.';

describe('NavItem atoms', () => {
  it('Should display default components for is collapsed true', () => {
    const { result } = renderHook(() => useColapseStore());
    render(<NavItem icon="Setting" label="Configuração" href="/settings" />);
    const icon = screen.getByRole('icon');
    const label = screen.queryByRole('label');
    const tips = screen.getByRole('tips');

    expect(result.current.isCollapsed).toBeTruthy();
    expect(icon).toBeInTheDocument();
    expect(label).toBeNull();
    expect(tips).toBeInTheDocument();
  });
  it('Should display default components for is collapsed false', () => {
    const { result } = renderHook(() => useColapseStore());
    render(<NavItem icon="Setting" label="Configuração" href="/settings" />);
    let icon = screen.getByRole('icon');
    let label = screen.queryByRole('label');
    let tips = screen.queryByRole('tips');

    act(() => {
      result.current.setIsCollapsed(false);
    });

    icon = screen.getByRole('icon');
    label = screen.queryByRole('label');
    tips = screen.queryByRole('tips');

    expect(result.current.isCollapsed).toBeFalsy();
    expect(icon).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(tips).toBeNull();
  });
});
