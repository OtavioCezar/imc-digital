import Button from "@/components/Button";
import Card from "@/components/Card";
import Title from "@/components/Title";
import { ArrowClockwiseIcon, CalculatorIcon } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1C181C] text-white">
      {/* Card */}
      
      <Card>
        {/* Esquerda */}
        <section className="flex flex-col items-center p-10 w-1/2">
          {/* Titulo */}
          <div className="text-center mb-8">
            <Title size="3xl" color="text-white" row={true}>
              Calculadora{" "}
              <Title size="3xl" color="text-[#D4944C]">
                IMC
              </Title>
            </Title>

            <p className="text-sm text-gray-500 mt-1">
              Índice de Massa Corporal
            </p>
          </div>

          {/* Circulo IMC */}
          <div className="relative flex items-center justify-center mb-6">
            <svg width="180" height="180" viewBox="0 0 180 180">
              <circle
                cx="90"
                cy="90"
                r="78"
                fill="none"
                stroke="#2A2A32"
                strokeWidth="8"
              />
              <circle
                cx="90"
                cy="90"
                r="78"
                fill="none"
                stroke="#4A4A52"
                strokeWidth="8"
                strokeDasharray="490"
                strokeDashoffset="245"
                strokeLinecap="round"
                transform="rotate(-90 90 90)"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-2xl font-bold text-gray-400">—</span>
              <span className="text-sm text-gray-500 mt-1">IMC</span>
            </div>
          </div>

          {/* Status */}
          <p className="text-gray-500 mb-8">—</p>

          {/* Legenda */}
          <div className="w-full space-y-4 mt-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-sky-400"></span>
                <p className="text-sm">Abaixo do peso</p>
              </div>
              <p className="text-sm text-gray-400">{"<"} 18.5</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <p className="text-sm">Peso normal</p>
              </div>
              <p className="text-sm text-gray-400">18.5 — 24.9</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <p className="text-sm">Sobrepeso</p>
              </div>
              <p className="text-sm text-gray-400">25.0 — 29.9</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <p className="text-sm">Obesidade</p>
              </div>
              <p className="text-sm text-gray-400">≥ 30.0</p>
            </div>
          </div>
        </section>

        {/* Direita */}
        <section className="flex flex-col justify-center p-10 w-1/2">
          <h2 className="text-xl font-bold mb-1">Seus dados</h2>
          <p className="text-sm text-gray-500 mb-8">
            Informe peso e altura para calcular
          </p>

          {/* Peso */}
          <div className="mb-6">
            <label className="text-sm font-semibold mb-2 block">
              Peso (kg)
            </label>
            <input
              type="text"
              placeholder="Ex: 70"
              className="w-full bg-[#2A2A32] border border-gray-600 rounded-full px-5 py-3 text-sm text-gray-300 placeholder-gray-500 outline-none focus:border-[#D4944C] transition"
            />
          </div>

          {/* Altura */}
          <div className="mb-8">
            <label className="text-sm font-semibold mb-2 block">
              Altura (cm)
            </label>
            <input
              type="text"
              placeholder="Ex: 175"
              className="w-full bg-[#2A2A32] border border-gray-600 rounded-full px-5 py-3 text-sm text-gray-300 placeholder-gray-500 outline-none focus:border-[#D4944C] transition"
            />
          </div>

          {/* Botoes */}
          <div className="flex items-center gap-3">
            <Button>
              <CalculatorIcon size={24} color="#fcfcfc" />
              Calcular
            </Button>

            <Button>
              <ArrowClockwiseIcon size={24} color="#fcfcfc" />
            </Button>

          </div>
        </section>
      </Card>
    </div>
  );
}
