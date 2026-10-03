import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import ResetPassword from '../src/pages/Auth/ResetPassword';

describe('ResetPassword Component', () => {
  it('shows an error and does not submit when passwords do not match', async () => {
    const user = userEvent.setup();
    const onResetPassword = vi.fn();

    render(<ResetPassword onResetPassword={onResetPassword} />);
    await user.type(screen.getByLabelText(/email/i), 'user@example.com');
    await user.type(screen.getByLabelText(/old password/i), 'old-password');
    await user.type(screen.getByLabelText(/new password/i), 'new-password');
    await user.type(screen.getByLabelText(/confirm password/i), 'different-password');
    await user.click(screen.getByRole('button', { name: /reset password/i }));

    expect(onResetPassword).not.toHaveBeenCalled();
    expect(screen.getByRole('alert')).toHaveTextContent(/must match/i);
  });

  it('calls the callback and shows a success message after a valid reset', async () => {
    const user = userEvent.setup();
    const onResetPassword = vi.fn();

    render(<ResetPassword onResetPassword={onResetPassword} />);
    await user.type(screen.getByLabelText(/email/i), 'user@example.com');
    await user.type(screen.getByLabelText(/old password/i), 'old-password');
    await user.type(screen.getByLabelText(/new password/i), 'new-password');
    await user.type(screen.getByLabelText(/confirm password/i), 'new-password');
    await user.click(screen.getByRole('button', { name: /reset password/i }));

    expect(onResetPassword).toHaveBeenCalledWith({
      email: 'user@example.com',
      oldPassword: 'old-password',
      newPassword: 'new-password',
      confirmPassword: 'new-password',
    });
    expect(screen.getByRole('status')).toHaveTextContent(/successful/i);
  });
});
