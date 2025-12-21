import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import InvestmentPlans from '../InvestmentPlans';
import { BalanceProvider } from '../../context/BalanceContext';
import api from '../../services/api';

vi.mock('../../services/api', () => ({
  post: vi.fn(),
  get: vi.fn()
}));

describe('InvestmentPlans component', () => {
  it('shows confirm modal and calls server to create investment', async () => {
    api.post.mockResolvedValueOnce({ status: 201, data: { investment: { id: 1, plan: 'bronze', amount: 100 }, balance: 900 } });

    render(
      <BalanceProvider>
        <InvestmentPlans />
      </BalanceProvider>
    );

    // Find an Invest button (there are multiple, pick first)
    const investBtn = screen.getAllByText('Invest')[0];
    await userEvent.click(investBtn);

    // Confirm modal should appear
    expect(screen.getByText(/Confirm investment/i)).toBeInTheDocument();

    const confirmBtn = screen.getByText('Confirm');
    await userEvent.click(confirmBtn);

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith('/investments', expect.any(Object));
    });
  });
});
