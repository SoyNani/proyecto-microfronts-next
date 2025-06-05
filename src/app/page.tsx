'use client';

import Image from 'next/image';
import Start from '@/components/molecules/Start';
import Link from 'next/link';
import History from '@/components/molecules/history';
import PokemonCard from '@/components/molecules/PokemonCard';
import PokemonsCard from '@/components/organisms/PokemonCard';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
        {/* Sección Hero */}
        <Start></Start>

        {/* Sección de Trivia */}
        <History/>

        {/* Sección de Pokémon Populares */}
        <PokemonsCard/>
      </main>

    </>
  );
}
