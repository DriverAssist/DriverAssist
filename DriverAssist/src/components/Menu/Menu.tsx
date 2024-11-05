import Link from 'next/link';

export default function Menu() {
  return (
    <div className="bg-blue-900 flex flex-col justify-center items-center h-screen text-center">
      <h1 className="text-white text-3xl md:text-4xl font-bold mb-8">MENU</h1>
      <div className="flex flex-col gap-6 md:gap-8">
        <Link href="/turma" className="bg-gray-300 text-black py-4 px-8 rounded-md text-xl md:text-2xl hover:bg-gray-500 transition">
          Equipe
        </Link>
        <Link href="/adicionar" className="bg-gray-300 text-black py-4 px-8 rounded-md text-xl md:text-2xl hover:bg-gray-500 transition">
          Adicionar Carro
        </Link>
        <Link href="/sobre" className="bg-gray-300 text-black py-4 px-8 rounded-md text-xl md:text-2xl hover:bg-gray-500 transition">
          Sobre Nós
        </Link>
        <Link href="/" className="bg-gray-300 text-black py-4 px-8 rounded-md text-xl md:text-2xl hover:bg-gray-500 transition">
          Voltar
        </Link>
      </div>
    </div>
  );
}
