import React, { useState } from 'react';
import { signin } from '../api';
import { useNavigate, Link } from 'react-router-dom';

export default function SignIn() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setError('');

    if (!form.email || !form.password) {
      return setError('Email and password required');
    }

    setLoading(true);
    try {
      const { status, body } = await signin(form);
      setLoading(false);

      if (status === 200) {
        localStorage.setItem('token', body.token);
        localStorage.setItem('user', JSON.stringify(body.user));
        nav('/home'); // Redirect to Home page
      } else {
        setError(body.error || 'Signin failed');
      }
    } catch (err) {
      setLoading(false);
      setError('Server error or network issue');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={submit}>
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={onChange}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      <Link className="smalllink" to="/signup">
        Don't have an account? Sign Up
      </Link>
    </div>
  );
}
