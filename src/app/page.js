import { CircleIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1C181C]">
      {/* Card */}
      <main className="bg-[#1B1C22] border border-gray-600 rounded-2xl">
        {/* Esquerda */}
        <section>
          {/* Topo */}
          <div>
            <h1>Calculadora IMC</h1>
            <p>Índice de Massa Corporal</p>

            <h2>0</h2>
            <p>IMC</p>

            <p>Peso normal</p>
          </div>

          {/* Fim */}
          <div>
            <CircleIcon size={32} weight="fill" />
            <p>Abaixo do peso</p>

            <p>{"<"} 18.5</p>
          </div>
        </section>

        {/* Direita */}
        <section></section>
      </main>
    </div>
  );
}
