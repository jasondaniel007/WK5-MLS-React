import { useState } from "react";
import "./Auth.css";

const initialForm = {
  email: "",
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

function ResetPassword({ onResetPassword }) {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);

  const handleChange = ({ target }) => {
    setForm((currentForm) => ({
      ...currentForm,
      [target.name]: target.value,
    }));
    setError("");
    setIsSuccessful(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (form.newPassword !== form.confirmPassword) {
      setError("New password and confirm password must match.");
      setIsSuccessful(false);
      return;
    }

    setError("");
    onResetPassword(form);
    setIsSuccessful(true);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="reset-email">Email</label>
          <input
            id="reset-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />

          <label htmlFor="old-password">Old Password</label>
          <input
            id="old-password"
            name="oldPassword"
            type="password"
            value={form.oldPassword}
            onChange={handleChange}
            placeholder="Old Password"
            required
          />

          <label htmlFor="new-password">New Password</label>
          <input
            id="new-password"
            name="newPassword"
            type="password"
            value={form.newPassword}
            onChange={handleChange}
            placeholder="New Password"
            required
          />

          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
          />

          <button type="submit">Reset Password</button>
        </form>
        {error && <p className="auth-message auth-error" role="alert">{error}</p>}
        {isSuccessful && (
          <p className="auth-message auth-success" role="status">
            Password reset successful.
          </p>
        )}
      </div>
    </div>
  );
}

export default ResetPassword;
