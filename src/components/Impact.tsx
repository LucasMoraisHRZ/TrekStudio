import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface ImpactMetric {
  percentage: number;
  label: string;
}

const ImpactMetric = ({ percentage, label }: ImpactMetric) => (
  <div className="flex flex-col items-center">
    <div className="w-32 h-32 beni-progress-font">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          pathColor: '#00D781',
          textColor: '#FFFFFF',
          trailColor: '#FFFFFF40',
        })}
      />
    </div>
    <h4 className="mt-4 text-white font-bold uppercase">{label}</h4>
  </div>
);

const Impact = () => {
  const metrics = [
    { percentage: 85, label: "Aumento em Conversões" },
    { percentage: 92, label: "Satisfação do Cliente" },
    { percentage: 78, label: "Crescimento em Vendas" },
    { percentage: 95, label: "Retenção de Clientes" },
  ];

  return (
    <section className="section-spacing bg-[#013334]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h3 className="text-[#00D781] font-beni text-xl uppercase mb-4">Nosso Impacto</h3>
            <h2 className="text-white font-beni text-5xl font-bold mb-6">
              RESULTADOS E <span className="text-[#00D781]">PERFORMANCE</span>
            </h2>
            <p className="text-white/80 text-xl">
              Transformamos negócios através de estratégias digitais inovadoras e mensuráveis. 
              Nossos clientes experimentam crescimento significativo em suas métricas principais.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            {metrics.map((metric, index) => (
              <ImpactMetric
                key={index}
                percentage={metric.percentage}
                label={metric.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
