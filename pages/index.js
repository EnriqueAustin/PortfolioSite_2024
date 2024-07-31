import Image from 'next/image';

import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

import {motion} from 'framer-motion';

import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          {/* title */}
          <h1 className='h1'>
            Unleashing Potential <br /> Into{' '}
            <span className='text-accent'>Digital Innovation</span>
          </h1>
          {/* subtitle */}
          <p className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
          Discover a partnership that extends beyond ordinary – where creativity meets technology. At Maxuim Media, we blend artistic vision with technical expertise to deliver exceptional digital solutions.
          </p>
          {/* spinny button */}
          <div className='flex'>
            <ProjectsBtn />
          </div>
        </div>
      </div>
      {/* image */}
      <div>image</div>
    </div>
  );
};

export default Home;
