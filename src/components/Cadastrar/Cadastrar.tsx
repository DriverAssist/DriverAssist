"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 
interface CadastroProps {
  namePlaceholder?: string;
  emailPlaceholder?: string;
  passwordPlaceholder?: string;
  cpfPlaceholder?: string;
  telefonePlaceholder?: string;
  dataNascimentoPlaceholder?: string;
  buttonText?: string;
  onRegister: (formData: { nome: string; email: string; senha: string; cpf: string; telefone: string; dataNascimento: string }) => void;
}

export default function Cadastrar({
  namePlaceholder = "Nome completo:",
  emailPlaceholder = "E-Mail:",
  passwordPlaceholder = "Senha:",
  cpfPlaceholder = "CPF:",
  telefonePlaceholder = "Telefone:",
  dataNascimentoPlaceholder = "Data de Nascimento:",
  buttonText = "Cadastre-se",
  onRegister
}: CadastroProps) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const router = useRouter(); // Usando o hook useRouter do Next.js

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister({ nome, email, senha, cpf, telefone, dataNascimento });
    router.push('/menu'); // Certifique-se de que '/menu' seja uma rota válida
  };

  return (
    <div className="flex justify-center items-center h-[90vh] bg-[#2C3E50]">
      <div className="bg-[#1A5276] p-8 rounded-lg w-[320px] shadow-lg text-center">
        <h2 className="text-white text-2xl mb-6">Cadastrar</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder={namePlaceholder}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full p-2 rounded-md border border-gray-300 text-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder={emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded-md border border-gray-300 text-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder={passwordPlaceholder}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full p-2 rounded-md border border-gray-300 text-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder={cpfPlaceholder}
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              className="w-full p-2 rounded-md border border-gray-300 text-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              placeholder={telefonePlaceholder}
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="w-full p-2 rounded-md border border-gray-300 text-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="date"
              placeholder={dataNascimentoPlaceholder}
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
              className="w-full p-2 rounded-md border border-gray-300 text-lg"
            />
          </div>
          <button type="submit" className="w-full p-3 bg-[#2980B9] text-white rounded-md hover:bg-[#1A73E8] transition-colors text-lg">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
