import React, { useEffect, useState } from 'react';
import { getProfile } from '../api';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [user, setUser] = useState(() => {
    const u = localStorage.getItem('user');
    return u ? JSON.parse(u) : null;
  });
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    async function fetchProfile() {
      const token = localStorage.getItem('token');
      if (!token) {
        nav('/signin'); // Redirect if no token
        return;
      }

      setLoading(true);
      try {
        const { status, body } = await getProfile();
        setLoading(false);

        if (status === 200 && body.user) {
          setUser(body.user);
          localStorage.setItem('user', JSON.stringify(body.user));
        } else {
          setErr(body.error || 'Could not fetch profile');
          nav('/signin'); // Redirect if token invalid
        }
      } catch (error) {
        setLoading(false);
        setErr('Server or network error');
        nav('/signin'); // Redirect on error
      }
    }

    fetchProfile();
  }, [nav]);

  const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    nav('/signin');
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Home</h2>
      {err && <p className="error">{err}</p>}
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
}
