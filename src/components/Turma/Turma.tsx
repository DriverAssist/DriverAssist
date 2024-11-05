import React from 'react';
import Mariana from "@/img/Mariana.jpeg";
import Fernando from "@/img/Fernando.jpeg";
import Ramon from "@/img/Ramon.jpeg";
import Link from 'next/link'; 
import Image from 'next/image';

export default function Turma() {
  const users = [
    { name: 'Marina Robert Neri', rm: '556284', github: 'https://github.com/marianaroberti', imgSrc: Mariana },
    { name: 'Felipe Nogueira Ramon', rm: '555335', github: 'https://github.com/ramonfn', imgSrc: Ramon },
    { name: 'Fernando Hitoshi Hirashima', rm: '558730', github: 'https://github.com/FernandoHirashima', imgSrc: Fernando },
  ];

  return (
    <div className="bg-[#003366] p-5 text-center w-full h-screen">
      <h1 className="text-white text-4xl mb-8">1TDSPH</h1>
      <div className="flex justify-center gap-8 mb-8 flex-wrap">
        {users.map((user, index) => (
          <div key={index} className="bg-[#61a4f1] p-6 rounded-lg w-[220px] md:w-[300px] text-center">
            <Image className="w-full h-[150px] object-cover rounded-md" src={user.imgSrc} alt={user.name} />
            <div className="mt-4">
              <p className="font-bold text-white text-lg">{user.name}</p>
              <p className="text-white text-sm">RM: {user.rm}</p>
            </div>
            <a
              className="bg-white text-black mt-4 inline-block px-4 py-2 rounded-lg text-sm hover:bg-gray-700 hover:text-white"
              href={user.github}
            >
              GitHub
            </a>
          </div>
        ))}
      </div>
      <Link
        className="bg-white text-black py-3 px-6 rounded-lg hover:bg-gray-600 hover:text-black text-md"
        href="/menu"
      >
        Menu
      </Link>
    </div>
  );
}