import React, { useEffect, useState } from 'react';
import sweep from './assets/sweep.svg';
import sweep1 from './assets/sweep1.svg';
import sweep2 from './assets/sweep2.svg';
import sweep3 from './assets/sweep3.svg';
import sweepMob from './assets/sweepmob.svg';
import left from './assets/left.svg';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            background: 'background1',
            title: 'Hair Transplant',
            description: 'Natural, permanent and reliable results to the problems of baldness, performed by highly experienced team.',
            image: sweep,
            imageMob: sweepMob
        },
        {
            background: 'background2',
            title: 'Medical Aesthetic',
            description: 'With the development of technology, it is now possible to be beautiful without going under the knife!',
            image: sweep1
        },
        {
            background: 'background3',
            title: 'Plastic Surgery',
            description: 'It is the correction of congenital and acquired deformities and dysfunctions.',
            image: sweep2
        },
        {
            background: 'background4',
            title: 'Cosmetic Dental',
            description: 'Transform your smile and boost your self-assurance with our expert cosmetic dentistry services.',
            image: sweep3
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 6000); // Change slide every 6 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <img src={slides[currentSlide].image} className='centered z-50 hidden md:block' alt="" />
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`w-full fade-in h-[80vh] ${slide.background} px-4 md:px-20 relative ${index === currentSlide ? '' : 'hidden'}`}
                >
                    {slide.imageMob && <img src={slide.imageMob} className='centered block md:hidden z-10' alt="" />}
                    <span className='absolute bottom-20 text-[#624004] space-y-1 z-10 md:space-y-6'>
                        <p className='font-Jost text-2xl md:text-6xl font-medium text-[#624004]'>{slide.title}</p>
                        <p className='font-Jost font-normal md:w-[400px] text-sm md:text-xl'>{slide.description}</p>
                        <button className='flex items-center justify-center space-x-1'>
                            <p className='font-Jost font-medium text-base md:text-2xl'>Learn more</p>
                            <img src={left} className='h-6 w-6 md:w-auto md:h-auto' alt="" />
                        </button>
                    </span>
                </div>
            ))}
        </div>
    );
}

export default Hero;
