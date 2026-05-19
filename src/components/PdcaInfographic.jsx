import deunaSymbol from '../assets/deuna-symbol.svg'

const beforeItems = [
  'Operaciones improvisadas',
  'Equipos reactivos',
  'Procesos desordenados',
]

const afterItems = [
  'Sistemas medibles',
  'Equipos supervisables',
  'Operaciones escalables',
]

function StepNode({ letter, label, position }) {
  const positions = {
    top: 'left-1/2 top-[14px] -translate-x-1/2',
    right: 'right-[10px] top-1/2 -translate-y-1/2',
    bottom: 'left-1/2 bottom-[14px] -translate-x-1/2',
    left: 'left-[10px] top-1/2 -translate-y-1/2',
  }

  const labelOrder = {
    top: 'mb-2',
    right: 'mt-2',
    bottom: 'mt-2',
    left: 'mt-2',
  }

  return (
    <div
      className={`absolute z-20 flex flex-col items-center ${positions[position]}`}
    >
      {position === 'top' && (
        <p
          className={`text-center text-[0.95rem] font-medium text-white ${labelOrder[position]}`}
        >
          {label}
        </p>
      )}

      <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(0,0,0,0.18)] md:h-[58px] md:w-[58px]">
        <span className="text-[2rem] font-black leading-none text-[#8c40f5]">
          {letter}
        </span>
      </div>

      {position !== 'top' && (
        <p
          className={`text-center text-[0.95rem] font-medium text-white ${labelOrder[position]}`}
        >
          {label}
        </p>
      )}
    </div>
  )
}

export default function PdcaInfographic() {
  return (
    <div className="w-full rounded-[2rem] border border-white/10 bg-[#0b0b0b] p-4 md:p-6 lg:p-8">
      <div className="grid gap-10 xl:grid-cols-[1fr_430px] xl:items-center">
        {/* BLOQUE IZQUIERDO */}
        <div>
          <p className="mb-6 text-sm font-black uppercase tracking-[0.3em] text-[#8c40f5]">
            PDCA DE UNA SYSTEM
          </p>

          <p className="max-w-md text-base leading-8 text-white/78">
            Transformamos operaciones improvisadas en una arquitectura medible.
            Un ciclo continuo que diseña, ejecuta y supervisa cada parte de una
            marca.
          </p>

          <div className="mt-10 grid grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-8">
            {/* ANTES */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[3px] w-9 rounded-full bg-[#8c40f5]" />
                <p className="text-lg font-black text-[#8c40f5]">Antes</p>
              </div>

              <div className="space-y-4">
                {beforeItems.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[92px] items-center justify-center rounded-[1.2rem] bg-[#e8e8eb] px-4 text-center text-[0.95rem] font-black leading-6 text-black"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* FLECHA */}
            <div className="flex h-full items-center justify-center self-center">
              <span className="text-[2.2rem] font-black leading-none text-[#8c40f5] md:text-[3rem]">
                →
              </span>
            </div>

            {/* DESPUÉS */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[3px] w-9 rounded-full bg-[#8c40f5]" />
                <p className="text-lg font-black text-[#8c40f5]">Después</p>
              </div>

              <div className="space-y-4">
                {afterItems.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[92px] items-center justify-center rounded-[1.2rem] bg-[#8c40f5] px-4 text-center text-[0.95rem] font-black leading-6 text-white shadow-[0_10px_30px_rgba(140,64,245,0.18)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BLOQUE DERECHO / PDCA */}
        <div className="mx-auto w-full max-w-[430px]">
          <div className="relative mx-auto h-[380px] w-[320px] sm:h-[410px] sm:w-[360px] md:h-[430px] md:w-[400px]">
            {/* CIRCULO EXTERIOR */}
            <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[4px] border-[#8c40f5] sm:h-[250px] sm:w-[250px] md:h-[280px] md:w-[280px]" />

            {/* CENTRO */}
            <div className="absolute left-1/2 top-1/2 z-10 flex h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#8c40f5] sm:h-[135px] sm:w-[135px] md:h-[150px] md:w-[150px]">
              <img
                src={deunaSymbol}
                alt="DE UNA"
                className="h-[56px] w-auto brightness-0 invert sm:h-[64px] md:h-[72px]"
              />

              <p className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-white sm:text-[0.76rem] md:text-[0.8rem]">
                SYSTEM
              </p>
            </div>

            {/* NODOS + LABELS */}
            <StepNode letter="P" label="Planificar" position="top" />
            <StepNode letter="D" label="Organizar" position="left" />
            <StepNode letter="A" label="Reportar" position="right" />
            <StepNode letter="C" label="Ejecutar" position="bottom" />
          </div>
        </div>
      </div>
    </div>
  )
}