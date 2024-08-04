import Link from "next/link";
import { RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiDribbbleLine, RiBehanceLine, RiPinterestLine, RiGithubLine, RiTwitterXLine } from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href="https://www.youtube.com" className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>
      <Link href="https://www.instagram.com" className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href="https://www.facebook.com" className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href="https://www.X.com" className="hover:text-accent transition-all duration-300">
        <RiTwitterXLine />
      </Link>
      <Link href="https://www.github.com" className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href="https://www.pinterest.com" className="hover:text-accent transition-all duration-300">
        <RiPinterestLine />
      </Link>
    </div>
  );
};

export default Socials;
