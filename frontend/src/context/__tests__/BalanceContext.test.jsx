import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import React from 'react';
import { BalanceProvider, useBalance } from '../BalanceContext';

const TestComponent = () => {
  const { investments, investPlan, PLANS } = useBalance();

  return (
    <div>
      <button onClick={() => investPlan('bronze', PLANS.bronze.min)}>Invest Bronze</button>
      <div data-testid="count">{investments.length}</div>
    </div>
  );
};

describe('BalanceContext', () => {
  it('adds an investment when investPlan is used with valid amount', async () => {
    render(
      <BalanceProvider>
        <TestComponent />
      </BalanceProvider>
    );

    const button = screen.getByText('Invest Bronze');
    await userEvent.click(button);

    const count = screen.getByTestId('count');
    expect(Number(count.textContent)).toBe(1);
  });
});
