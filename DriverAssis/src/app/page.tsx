"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface LoginProps {
  emailPlaceholder?: string;
  passwordPlaceholder?: string;
  buttonText?: string;
  onLogin: (email: string, password: string) => void;
}

export default function Login({
  emailPlaceholder = "E-Mail",
  passwordPlaceholder = "Senha",
  onLogin
}: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onLogin(email, password);

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900">
      <div className="bg-blue-600 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="input-group">
            <input
              type="email"
              placeholder={emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-blue-400 bg-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder={passwordPlaceholder}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-blue-400 bg-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div >
            <button
              type="submit" 
              className="w-full bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition font-bold"
            >
              <p>Login</p>
              <Link href='/menu'/>
            </button>
          </div>
        </form>
        <div className="mt-4 text-center text-white">
          <p className="mb-2">Não é cadastrado?</p>
          <Link href="/cadastrar" className="text-blue-300 hover:text-blue-400 underline">
            Cadastre-se aqui
          </Link>
        </div>
      </div>
    </div>
  );
}
