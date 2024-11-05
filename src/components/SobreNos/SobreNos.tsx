import Link from 'next/link';

interface SobreNosProps {
  title?: string;
  description: string;
  buttonText?: string;
  onBack: () => void;
}

export default function SobreNos({
  title = "Sobre Nós",
  description = `Olá, nós somos a DriverAssistent, seu especialista virtual em diagnóstico automotivo! Estamos aqui para simplificar o processo de manutenção do seu veículo, fornecendo diagnósticos precisos e orientações úteis sempre que precisar.
  Com a nossa tecnologia avançada de análise de dados e inteligência artificial, podemos ajudá-lo a identificar e entender os problemas do seu veículo de forma rápida e eficiente. Basta nos informar os sintomas que está enfrentando, e faremos uma análise abrangente para diagnosticar a causa raiz do problema.
  Nosso objetivo é proporcionar a você tranquilidade e segurança, sabendo que estamos sempre aqui para ajudar quando surge um problema. Com a DriverAssistent ao seu lado, você pode enfrentar os desafios da manutenção veicular com confiança e facilidade.
  Junte-se a nós e experimente a conveniência de ter um especialista em diagnóstico automotivo sempre disponível na palma da sua mão. Com a DriverAssistent, resolver problemas de veículos nunca foi tão simples. Vamos encontrar soluções juntos!`,
  buttonText = "Voltar",
  onBack
}: SobreNosProps) {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="bg-blue-800 p-8 rounded-lg shadow-lg w-full max-w-lg relative text-white text-center">
        <Link 
          className="absolute top-4 right-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition"
          href="/menu"
        >
          {buttonText}
        </Link>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>
        <div className="bg-gray-200 p-6 rounded-lg text-gray-800 text-justify">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
