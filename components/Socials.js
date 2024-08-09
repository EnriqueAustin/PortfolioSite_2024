import Link from "next/link";
import { RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiDribbbleLine, RiBehanceLine, RiPinterestLine, RiGithubLine, RiTwitterXLine, RiLinkedinLine } from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href="https://www.youtube.com" className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>
      <Link href="https://www.instagram.com/" className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      {/* <Link href="https://www.facebook.com" className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link> */}
      <Link href="https://twitter.com/" className="hover:text-accent transition-all duration-300">
        <RiTwitterXLine />
      </Link>
      <Link href="https://github.com/EnriqueAustin" className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      {/* <Link href="https://www.pinterest.com" className="hover:text-accent transition-all duration-300">
        <RiPinterestLine />
      </Link> */}
      <Link href="https://www.linkedin.com/in/enrique-austin-953a71156/" className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
    </div>
  );
};

export default Socials;