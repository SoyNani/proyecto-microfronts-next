'use client';

import Image from 'next/image';

export default function History() {
  return (
    <section className="bg-gradient-to-br from-blue-700 via-purple-700 to-pink-700 py-16 px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">
            ¿Sabías cómo nacieron los Pokémon?
        </h2>
        <p className="text-lg max-w-[850px] mx-auto text-justify">
            Satoshi Tajiri, nacido el 28 de agosto de 1965 en Machida, Tokio, es el creador de la franquicia Pokémon. Durante su infancia, desarrolló una profunda fascinación por coleccionar insectos, lo que le valió el apodo de "Dr. Bug" entre sus amigos. Esta pasión por la naturaleza y el coleccionismo sentó las bases para la creación de Pokémon.
        </p>
        <p className="text-lg max-w-[850px] mx-auto text-justify">
            La idea de Pokémon surgió cuando Tajiri observó cómo los niños utilizaban el cable link del Game Boy para conectarse. Imaginó criaturas que pudieran ser capturadas, entrenadas e intercambiadas entre jugadores, inspirándose en su afición por coleccionar insectos. Con el apoyo de Nintendo y la mentoría de Shigeru Miyamoto, desarrolló Pokémon Rojo y Verde, lanzados en Japón en 1996.
        </p>
        <p className="text-lg max-w-[850px] mx-auto text-justify">
            A pesar de las dificultades iniciales, la franquicia Pokémon se convirtió en un fenómeno global, expandiéndose a juegos de cartas, series de televisión, películas y más. Tajiri continúa involucrado en el desarrollo de la serie, supervisando y aprobando los textos de los juegos más recientes.
        </p>
        <div className="flex justify-center">
            <div className="rounded-full overflow-hidden">
            <Image
                src="/satoshi.jpg" 
                alt="Todos los Pokémon"
                width={500}
                height={500}
                className="rounded-full shadow-lg m-10 shadow-yellow-500 object-cover"
            />
            </div>
        </div>
    </section>
    );
} 