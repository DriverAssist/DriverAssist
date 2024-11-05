import Link from "next/link";
import Cachorro from "@/img/Cachorro.jpeg";
import Image from "next/image";

export default function NotFound() {
    return (
        <section className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-3xl font-bold mb-6">VISH, SUA PÁGINA NÃO FOI ENCONTRADA!</h1>
            <Image src={Cachorro} alt="Erro" className="w-1/2 mb-6" />
            <Link href="/menu" className="relative text-lg font-semibold px-6 py-3 bg-red-500 text-white rounded-lg hover:before:opacity-100 before:absolute before:content-[''] before:bg-red-500 before:top-[-2px] before:left-[-2px] before:w-full before:h-full before:blur before:rounded-lg before:transition-opacity before:duration-300 before:opacity-0">
                Voltar para o Menu
            </Link>
        </section>
    );
}
