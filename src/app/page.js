"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import Title from "@/components/Title";
import { ArrowClockwiseIcon, CalculatorIcon } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export default function Home() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [imc, setImc] = useState(null);

  function getCategory(value) {
    if (value < 18.5) return { label: "Abaixo do peso", color: "text-sky-400" };
    if (value < 25) return { label: "Peso normal", color: "text-green-500" };
    if (value < 30) return { label: "Sobrepeso", color: "text-yellow-400" };
    return { label: "Obesidade", color: "text-red-500" };
  }

  function getStrokeColor(value) {
    if (value < 18.5) return "#38bdf8";
    if (value < 25) return "#22c55e";
    if (value < 30) return "#facc15";
    return "#ef4444";
  }

  function calculateImc() {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (!w || !h || w <= 0 || h <= 0) return;
    const result = w / ((h / 100) ** 2);
    setImc(parseFloat(result.toFixed(2)));
  }

  function reset() {
    setImc(null);
    setWeight("");
    setHeight("");
  }

  const circumference = 2 * Math.PI * 78;
  const maxImc = 40;
  const progress = imc ? Math.min(imc / maxImc, 1) : 0;
  const dashOffset = circumference - progress * circumference;
  const category = imc ? getCategory(imc) : null;
  const strokeColor = imc ? getStrokeColor(imc) : "#4A4A52";

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
                stroke={strokeColor}
                strokeWidth="8"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                transform="rotate(-90 90 90)"
                className="transition-all duration-700 ease-in-out"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className={`text-2xl font-bold ${imc ? category.color : "text-gray-400"}`}>
                {imc ?? "—"}
              </span>
              <span className="text-sm text-gray-500 mt-1">IMC</span>
            </div>
          </div>

          {/* Status */}
          <p className={`mb-8 font-semibold ${category ? category.color : "text-gray-500"}`}>
            {category ? category.label : "—"}
          </p>

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
            onChange={(ev) => setWeight(ev.target.value)}
              type="number"
              value={weight}
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
              onChange={(ev) => setHeight(ev.target.value)}
              type="number"
              value={height}
              placeholder="Ex: 175"
              className="w-full bg-[#2A2A32] border border-gray-600 rounded-full px-5 py-3 text-sm text-gray-300 placeholder-gray-500 outline-none focus:border-[#D4944C] transition"
            />
          </div>

          {/* Botoes */}
          <div className="flex items-center gap-3">
            <Button onClick={() => calculateImc()}>
              <CalculatorIcon size={24} color="#fcfcfc" />
              Calcular
            </Button>

            <Button onClick={() => reset()}>
              <ArrowClockwiseIcon size={24} color="#fcfcfc" />
            </Button>

          </div>
        </section>
      </Card>
    </div>
  );
}
