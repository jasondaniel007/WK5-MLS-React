import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Login from '../src/pages/Auth/Login';
import Register from '../src/pages/Auth/Register';

describe('Auth Components', () => {
  describe('Login Component', () => {
    it('renders the login form fields', () => {
      render(<Login />);

      expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    });

    it('reflects typed values in the email and password fields', async () => {
      const user = userEvent.setup();

      render(<Login />);
      const emailInput = screen.getByLabelText(/email address/i);
      const passwordInput = screen.getByLabelText(/password/i);

      await user.type(emailInput, 'user@example.com');
      await user.type(passwordInput, 'password123');

      expect(emailInput).toHaveValue('user@example.com');
      expect(passwordInput).toHaveValue('password123');
    });

    it('logs the submitted email and password', async () => {
      const user = userEvent.setup();
      const logSpy = vi.spyOn(console, 'log').mockImplementation(() => { });
      vi.spyOn(window, 'alert').mockImplementation(() => { });

      render(<Login />);
      await user.type(screen.getByLabelText(/email address/i), 'user@example.com');
      await user.type(screen.getByLabelText(/password/i), 'password123');
      await user.click(screen.getByRole('button', { name: /log in/i }));

      expect(logSpy).toHaveBeenCalledWith({
        email: 'user@example.com',
        password: 'password123',
      });

      vi.restoreAllMocks();
    });
  });

  describe('Register Component', () => {
    it('renders the register form fields', () => {
      render(<Register />);
      expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument();
    });

    it('logs the form data on submit', async () => {
      const logSpy = vi.spyOn(console, 'log').mockImplementation(() => { });

      render(<Register />);
      await userEvent.type(screen.getByLabelText(/name/i), 'JohnDoe');
      await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
      await userEvent.type(screen.getByLabelText(/password/i), 'password123');
      await userEvent.click(screen.getByRole('button', { name: /register/i }));

      expect(logSpy).toHaveBeenCalledWith('Register Attempt:', {
        name: 'JohnDoe',
        email: 'john@example.com',
        password: 'password123',
      });

      logSpy.mockRestore();
    });
  });
});