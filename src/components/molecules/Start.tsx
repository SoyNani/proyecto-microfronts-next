'use client';

import Image from 'next/image';
import YellowButton from '../atoms/Button';

export default function Start() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20">
        {/* Texto a la izquierda */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            ¡Bienvenido a la Pokédex Interactiva!
          </h1>
          <p className="text-lg md:text-xl">
            Explora el mundo de los Pokémon, descubre sus historias y habilidades únicas.
          </p>
          <YellowButton text="Ver Carrusel de Pokémon"/>
        </div>

        {/* Imagen a la derecha */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/pokemons.jpeg" 
            alt="Todos los Pokémon"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </> 
    );
} 