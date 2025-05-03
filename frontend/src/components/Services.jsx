


import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        // Clean up on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
};

const Services = () => {
    const width = useWindowWidth()
    const cards1 = [
        {
            src1: "https://framerusercontent.com/images/SeuW0isdZzw7ePfHrmB80aMIkCY.png?scale-down-to=512",
            src2: "https://framerusercontent.com/images/xATSMM57Qc2TO0b7o17CYyYFU44.png?scale-down-to=512",
            text: "Websites",
            variant: "left",
        },
        {
            src1: "https://framerusercontent.com/images/Ks2p7YVzeGaDqaLzdqsw2RSQWI.png?scale-down-to=512",
            src2: "https://framerusercontent.com/images/Le7PeOz3D7n0uV3GIgttGnZjJY.png?scale-down-to=512",
            text: "Mobile Apps",
            variant: "right",
        },
        {
            src1: "https://framerusercontent.com/images/ob0dCgfsg9ocAleLISvIQk0q0k.png?scale-down-to=512",
            src2: "https://framerusercontent.com/images/HUfWN8pBJhiulJH6ipsixZPFRPY.png?scale-down-to=512",
            text: "Product Design",
            variant: "right",
        },
    ];

    const data1 = [{

        src1: "https://framerusercontent.com/images/oijX2EtWW08ClHvw2hzAv0UThk.png?scale-down-to=512",
        src2: "https://framerusercontent.com/images/KGzdVd8I8t7IqvziZ21nGhSqI.png?scale-down-to=512",
        text: "Branding",
        variant: "right",
    },
    {
        src1: "https://framerusercontent.com/images/r0fjqfxQy0NIKSBbG2Cgf1lUbTQ.png?scale-down-to=512",
        src2: "https://framerusercontent.com/images/BgkBT4XseuiDUvSzkNcThveM.png?scale-down-to=512",
        text: "Logo Design",
        variant: "left",
    },]

    




    return (
        <div className={`w-[70%] lg:w-[90%] xl:w-[70%] flex flex-col gap-2 -mt-[5rem]  ${width == '430' ? "-mt-[25rem]" : ""}  md:-mt-36 lg:-mt-10 xl:-mt-36 3xl:-mt-100 3xl:w-[46%]`}>

            <div className="w-[100%] px-4 py-12 flex flex-col gap-[4rem] items-center lg:flex-row lg:gap-[4rem] 2xl:gap-0   justify-between">
                {cards1.map((card, index) => (
                    <Card
                        key={index}
                        src1={card.src1}
                        src2={card.src2}
                        text={card.text}
                        variant={card.variant}
                    />
                ))}A
            </div>
            <div className="w-[100%] px-4 py-12 flex flex-col gap-4 items-center lg:flex-row lg:gap-[4rem] 3xl:gap-0  justify-center">
                {data1.map((card, index) => (
                    <Card
                        key={index}
                        src1={card.src1}
                        src2={card.src2}
                        text={card.text}
                        variant={card.variant}
                    />
                ))}
            </div>
        </div>
    );
};

const Card = ({ src1, src2, text, variant }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);

    const isLeft = variant === "left";

    return (
        <div className="flex flex-col items-center gap-8 relative w-full sm:w-[45%] md:w-[30%]">
            <AnimatePresence>
                {(isHovered || isHovered1) && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.5 }}
                        className="p-2 bg-white w-[280px] absolute -top-36 z-20 pointer-events-none rounded shadow-xl"
                    >
                        <img src={isHovered ? src1 : isHovered1 ? src2 : ""} alt="" />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative flex items-center justify-center h-[180px] w-[190px]">
                <img
                    src={src1}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`absolute rounded-xl w-[100%] z-10 transition-all duration-300   translate-y-[3px] ${isLeft ? "-rotate-10 translate-x-[-32px]" : "rotate-10 translate-x-[30px]"
                        }`}
                    alt=""
                />
                <img
                    src={src2}
                    onMouseEnter={() => setIsHovered1(true)}
                    onMouseLeave={() => setIsHovered1(false)}
                    className={`rounded-xl w-[100%] z-0 transition-all duration-300   ${isLeft ? "rotate-10 translate-x-[27px]" : "-rotate-10 translate-x-[-15px]"
                        }`}
                    alt=""
                />
            </div>

            <p
                className="px-2 text-[22px] w-full text-center font-bold bg-clip-text text-transparent"
                style={{
                    backgroundImage:
                        "radial-gradient(98.0344% 98.0344% at 1.35135% 3.04878%, rgb(49, 46, 129) 0%, rgb(3, 7, 18) 100%)",
                }}
            >
                {text}
            </p>
        </div>
    );
};

export default Services;

