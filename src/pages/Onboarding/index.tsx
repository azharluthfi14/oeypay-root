import { useState } from 'react';

import { useNavigate } from "react-router-dom"
import { animated, useSprings } from 'react-spring';

import { Button, OnBoarding1, OnBoarding2, OnBoarding3 } from "@/components"
import { colors } from '@/constants';



const slides = [
    { id: 1, content: <OnBoarding1 /> },
    { id: 2, content: <OnBoarding2 /> },
    { id: 3, content: <OnBoarding3 /> },
];

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate()

    const offset = (i: number) => (i - index) * 100;

    const springs = useSprings(
        slides.length,
        slides.map((_, i) => ({
            transform: `translateX(${offset(i)}%)`,
            opacity: i === index ? 1 : 0,
            config: { mass: 1, tension: 170, friction: 26 },
        }))
    );
    const dotSprings = useSprings(
        slides.length,
        slides.map((_, i) => (
            i === index ? {
                opacity: '1',
                display: 'inline-block',
                width: '40px',
                height: '10px',
                margin: '0 5px',
                cursor: 'pointer',
                borderRadius: '2vw',
                background: colors.Yellow,
                config: { mass: 1, tension: 170, friction: 26 },
            } : {
                opacity: '0.5',
                display: 'inline-block',
                width: '10px',
                height: '10px',
                margin: '0 5px',
                cursor: 'pointer',
                borderRadius: '2vw',
                background: colors.Yellow,
                config: { mass: 1, tension: 170, friction: 26 },
            }))
    );

    const handleClick = (direction: string) => {
        if (index < 2) {
            const nextIndex = direction === 'next' ? index + 1 : index - 1;
            setIndex((prevIndex) => (nextIndex < 0 ? slides.length - 1 : nextIndex % slides.length));
        } else {
            localStorage.setItem('onboard', 'true'), navigate('/home', {
                replace: true
            })
        }
    };

    return (
        <div className='flex flex-col w-full space-y-4 mt-20'>
            <div className='h-[60vh] w-full flex justify-center overflow-hidden'>
                {springs.map((props, i) => (
                    <animated.div
                        key={slides[i].id}
                        style={{
                            position: 'absolute',
                            width: 'auto',
                            height: 'auto',
                            willChange: 'transform, opacity',
                            ...props,
                        }}
                    >
                        {slides[i].content}
                    </animated.div>
                ))}
            </div>
            <div style={{ bottom: '10px', width: '100%', textAlign: 'center' }}>
                {dotSprings.map((props, i) => (
                    <animated.span
                        key={i}
                        onClick={() => setIndex(i)}
                        style={{
                            ...props
                        }}
                    />
                ))}
            </div>
            <div className='flex flex-col'>
                <Button className='w-4/5 mx-auto' onClick={() => handleClick('next')}>Next</Button>
                <Button variant={'ghost'} onClick={() => [localStorage.setItem('onboard', 'true'), navigate('/home', {
                    replace: true
                })]}>Skip</Button>
            </div>
        </div>
    );
};

export const OnBoarding = () => {
    return (
        <>
            <main className="my-0 mx-auto min-h-full max-w-screen-sm">
                <div className="my-0 mx-auto min-h-screen max-w-[480px] overflow-x-hidden overflow-hidden  bg-white2 pb-[66px]">
                    <Carousel />
                </div>
            </main>
        </>
    )
}