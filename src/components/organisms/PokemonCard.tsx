import Image from "next/image";
import PokemonCard from "../molecules/PokemonCard";


const pokemonData = [
  {
    name: "Pikachu",
    description:
      "Pikachu es el Pokémon insignia de la franquicia, conocido por su energía eléctrica y su entrañable personalidad.",
    imageSrc: "/pikachu.svg",
    alt: "Pikachu",
  },
  {
    name: "Charizard",
    description:
      "Charizard es la evolución final de Charmander, famoso por su poderosas habilidades de fuego y su imponente presencia.",
    imageSrc: "/charizardd.svg",
    alt: "Charizard",
  },
  {
    name: "Mewtwo",
    description:
      "Mewtwo es un Pokémon legendario creado genéticamente, conocido por su increíble poder psíquico.",
    imageSrc: "/mewtwo.jpeg",
    alt: "Mewtwo",
  },
  {
    name: "Eevee",
    description:
      "Eevee es conocido por su capacidad única de evolucionar en múltiples formas, adaptándose a diferentes entornos.",
    imageSrc: "/eevee.jpeg",
    alt: "Eevee",
  },
  {
    name: "Bulbasaur",
    description:
      "Bulbasaur es uno de los Pokémon iniciales más queridos, conocido por su planta en la espalda que crece al absorber energía solar.",
    imageSrc: "/bulbasaur.png",
    alt: "Bulbasaur",
  },
];
export default function PokemonsCard() {
  return (
    <section className="py-16 px-8 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12">
        Los 5 Pokémon más famosos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {pokemonData.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            description={pokemon.description}
            imageSrc={pokemon.imageSrc}
            alt={pokemon.alt}
          />
        ))}
      </div>
    </section>
  );
};
