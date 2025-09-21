import React, { useState } from 'react';
import { signup } from '../api';
import { useNavigate, Link } from 'react-router-dom';

export default function SignUp(){
  const [form, setForm] = useState({name:'', phone:'', email:'', password:''});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const onChange = e => setForm({...form, [e.target.name]: e.target.value});

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.name || !form.phone || !form.email || !form.password) return setError('All fields required');

    setLoading(true);
    const { status, body } = await signup(form);
    setLoading(false);

    if (status === 201) {
      localStorage.setItem('token', body.token);
      localStorage.setItem('user', JSON.stringify(body.user));
      nav('/');
    } else {
      setError(body.error || 'Signup failed');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={submit}>
        <input name="name" placeholder="Name" value={form.name} onChange={onChange} />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={onChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={onChange} />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={onChange} />
        <button type="submit" disabled={loading}>{loading ? 'Signing up...' : 'Sign Up'}</button>
      </form>
      {error && <p className="error">{error}</p>}
      <Link className="smalllink" to="/signin">Already have an account? Sign In</Link>
    </div>
  );
}
