import Image from "next/image";

interface PokemonCardProps {
  name: string;
  description: string;
  imageSrc: string;
  alt: string;
}

const PokemonCard = ({ name, description, imageSrc, alt }: PokemonCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col h-full">
      <Image
        src={imageSrc}
        alt={alt}
        width={150}
        height={150}
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default PokemonCard;
