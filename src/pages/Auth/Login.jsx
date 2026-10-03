import React, { useState } from 'react';
import loginWorkspace from '../../assets/login-workspace.jpg';
import styles from './Login.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();   
    console.log({ email, password });
    alert('Login successful!');
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authShell}>
        <section className={styles.formPanel} aria-labelledby="login-title">
          <div className={styles.brandMark}>threadhive</div>
          <div className={styles.formContent}>
            <p className={styles.eyebrow}>Welcome back</p>
            <h1 id="login-title">Log in to your hive</h1>
            <p className={styles.intro}>
              Pick up where you left off and stay close to the conversations that matter.
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.srOnly} htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  autoComplete="email"
                  placeholder="Email address"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.srOnly} htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  autoComplete="current-password"
                  placeholder="Password"
                  required
                />
              </div>

              <button type="submit">Log in</button>
            </form>
          </div>
        </section>

        <aside className={styles.visualPanel} aria-label="ThreadHive community">
          <img src={loginWorkspace} alt="A bright, welcoming shared workspace" />
          <div className={styles.visualCaption}>
            <span>Make room for good ideas.</span>
            <p>Thoughtful conversations, gathered in one place.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Login;