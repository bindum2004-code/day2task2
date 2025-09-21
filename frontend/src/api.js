// src/api.js

// Use Vite env variable
const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000/api';

function getAuthHeaders() {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function signup(data) {
  const res = await fetch(`${API_BASE}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const body = await res.json().catch(() => ({}));
  return { status: res.status, body };
}

export async function signin(data) {
  const res = await fetch(`${API_BASE}/auth/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const body = await res.json().catch(() => ({}));
  return { status: res.status, body };
}

export async function getProfile() {
  const res = await fetch(`${API_BASE}/users/me`, {
    method: 'GET',
    headers: { ...getAuthHeaders(), 'Content-Type': 'application/json' },
  });
  const body = await res.json().catch(() => ({}));
  return { status: res.status, body };
}
