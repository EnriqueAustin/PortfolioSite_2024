// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Sarah Collins',
    position: 'Customer',
    message:
      '"The professionalism and dedication shine through in every project. Consistently delivers top-notch results, exceeding our expectations."',
  },
  {
    image: '/t-avt-2.png',
    name: 'Nomvula Mkhize',
    position: 'Customer',
    message:
      '"Working with this developer was a game-changer for our business. The technical expertise and innovative approach brought our project to life."',
  },
  {
    image: '/t-avt-3.png',
    name: 'Michael Turner',
    position: 'Customer',
    message:
      '"The ability to merge creativity with technology was unmatched, transforming our vision into reality with precision and flair."',
  },
];

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from "swiper";

import { FaQuoteLeft } from 'react-icons/fa';
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable:true
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {
        testimonialData.map((person, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
                {/* avatar name position */}
                <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                  <div className="flex flex-col justify-center text-center">
                    {/* avatar */}
                    <div className="mb-2 mx-auto">
                      <Image src={person.image} width={100} height={100} alt=""/>
                    </div>
                    {/* name */}
                    <div className="text-lg">{person.name}</div>
                    {/* position */}
                    <div className="text-[12px] uppercase font-extralight tracking-widest">{person.position}</div>
                  </div>
                </div>
                {/* quotes & message */}
                <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                    {/* quote icon */}
                    <div className="mb-4">
                      <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"/>
                    </div>
                    {/* message */}
                    <div className="xl:text-lg text-center md:text-left">{person.message}</div>
                </div>
              </div>
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
};

export default TestimonialSlider;


