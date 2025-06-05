import Link from 'next/link';

interface YellowButtonProps {
  text: string;
  href?: string;
}

const YellowButton = ({ text, href = '/carousel' }: YellowButtonProps) => {
  return (
    <Link 
        href={href}
        className="inline-block bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 mt-4 rounded transition duration-300">
        {text}
    </Link>
  );
};

export default YellowButton;

