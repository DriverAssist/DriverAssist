"use client";
import Link from 'next/link'; 
import { Veiculo } from '@/types';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

export default function AddVeiculo() {
  const [formData, setFormData] = useState<Veiculo>({
    idVeiculo:0,
    anoFabricacao: '',
    modelo: '',
    marca: ''
  });
  const [idCarro,setIdCarro] = useState()
  const [carros, setCarros] = useState<Veiculo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const fetchCars = async () => {
    try {
      const response = await fetch('http://localhost:8080/veiculo');
      if (!response.ok) throw new Error('Erro ao carregar os veículos.');
      const data = await response.json();
      setCarros(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validarAno = (ano: number): string | null => {
    const anoAtual = new Date().getFullYear();
    if (ano < 1969) {
      return 'O ano não pode ser menor que 1969.';
    } else if (ano > anoAtual + 1) {
      return 'O ano não pode ser maior que o ano atual mais dois.';
    }
    return null;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const ano = parseInt(formData.anoFabricacao, 10);
    const erro = validarAno(ano);
  
    if (erro) {
      setError(erro);
      return;
    }
  
    setError(null);
  
    try {
      let response;
      if (editingIndex !== null) {
        response = await fetch(`http://localhost:8080/veiculo/${formData.idVeiculo}`, {
          method: 'PUT',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      } else {
        response = await fetch('http://localhost:8080/veiculo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      }
  
      if (!response.ok) {
        const message = await response.text(); // ou response.json() se seu servidor responder com JSON
        throw new Error(`Erro ao ${editingIndex !== null ? 'atualizar' : 'adicionar'} o veículo: ${message}`);
      }
  
      fetchCars();
      setFormData({
        idVeiculo:0,
        modelo: '',
        anoFabricacao: '',
        marca: ''
      });
      setEditingIndex(null);
    } catch (err) {
      console.error('Erro ao processar a requisição:', err);
    }
  };
  

  const EditarCarro = (index: number) => {
    const carToEdit = carros[index];
  
    // Verificar se carToEdit está definido antes de acessar suas propriedades
    if (!carToEdit) {
      console.error('Carro não encontrado no índice:', index);
      return;
    }
  
    console.log('Editando carro:', carToEdit); // Log para depurar
  
    setFormData({
      idVeiculo: carToEdit.idVeiculo,
      modelo: carToEdit.modelo,
      anoFabricacao: carToEdit.anoFabricacao ? carToEdit.anoFabricacao.toString() : '', // Verifica se anoFabricacao está definido
      marca: carToEdit.marca
    });
  
    setEditingIndex(index);
  };
  
  

  const DeletarCarro = async (index: number) => {
    const carToDelete = carros[index];
    try {
      const response = await fetch(`http://localhost:8080/veiculo/${carToDelete.idVeiculo}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Erro ao deletar o veículo.');

      fetchCars();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="w-11/12 max-w-4xl mx-auto bg-blue-900 rounded-lg shadow-lg my-20 p-6">
      <div className="w-full flex justify-center bg-blue-300 p-4 rounded-t-lg">
        <h2 className="text-2xl font-bold text-white">
          {editingIndex !== null ? 'Editar Carro' : 'Adicionar Carro'}
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1">
            <label htmlFor="marca" className="block text-sm font-medium text-white mb-1">Marca</label>
            <input type="text" id="marca" name="marca" value={formData.marca} onChange={handleChange} required className="w-full border border-gray-300 rounded-md p-2 bg-gray-100" />
          </div>
          <div className="flex-1">
            <label htmlFor="modelo" className="block text-sm font-medium text-white mb-1">Modelo</label>
            <input type="text" id="modelo" name="modelo" value={formData.modelo} onChange={handleChange} required className="w-full border border-gray-300 rounded-md p-2 bg-gray-100" />
          </div>
        </div>
        <div>
          <label htmlFor="anoFabricacao" className="block text-sm font-medium text-white mb-1">Ano de Fabricação</label>
          <input type="number" id="anoFabricacao" name="anoFabricacao" value={formData.anoFabricacao} onChange={handleChange} required className="w-full border border-gray-300 rounded-md p-2 bg-gray-100" />
        </div>
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
          {editingIndex !== null ? 'Salvar Alterações' : 'Adicionar Carro'}
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-white mb-4">Lista de Carros</h3>
        <ul className="space-y-4 bg-gray-200 p-4 rounded-md max-h-64 overflow-y-auto">
          {carros.map((carro, index) => (
            <li key={index} className="p-4 border border-gray-300 rounded-md bg-white shadow">
              <h4 className="font-semibold text-lg">{carro.modelo} ({carro.anoFabricacao})</h4>
              <p className="text-black"><strong>Marca:</strong> {carro.marca}</p>
              <div className="mt-2 flex space-x-2">
                <button onClick={() => EditarCarro(index)} className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600 transition">Editar</button>
                <button onClick={() => setIdCarro(carro.idVeiculo)} className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition">Deletar</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center mt-6">
        <Link href="/menu" className="bg-gray-300 text-black py-4 px-8 rounded-md text-xl md:text-2xl hover:bg-gray-500 transition">
          Voltar
        </Link>
      </div>
    </section>
  );
}
