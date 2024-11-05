"use client";
import Cadastrar from "@/components/Cadastrar/Cadastrar";

export default function Cadastro() {
    const handleRegister = (formData: { nome: string; email: string; senha: string; cpf: string; telefone: string; dataNascimento: string }) => {
        console.log('Form data submitted:', formData);
    };

    return (
        <>
            <Cadastrar onRegister={handleRegister} />
        </>
    );
}
