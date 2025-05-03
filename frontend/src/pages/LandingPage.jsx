import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import { Card , Card2 , Card3 } from '../components/Card'
import Comparision from "../components/Comparision"
import Products from '../components/Products'
import PricingComponent from '../components/Pricing'
import { InfiniteMovingCardsDemo } from '../components/MovingCardsDemo'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'


const LandingPage = () => {
    return (
        <div className='h-[100%] flex flex-col items-center gap-[3rem] overflow-x-hidden'>

            <div className='w-[70%] m-auto flex flex-col items-center relative'>
                <Navbar />
            </div>

            <HeroSection />

            <Services />

            <div className='w-[100%] p-2 lg:w-[90%] flex flex-col gap-[1.5rem] items-center'>

                <h1 style={{ backgroundImage: "radial-gradient(98.0344% 98.0344% at 1.35135% 3.04878%, rgb(49, 46, 129) 0%, rgb(3, 7, 18) 100%)" }} className="text-3xl px-2 w-[80%] lg:w-full  md:text-6xl font-bold text-center bg-clip-text text-transparent">
                    Why Businesses Choose Us
                </h1>

                <motion.div
                initial={{opacity : 0 , y : 30}}
                whileInView={{opacity : 1 , y : 0}}
                exit={{opacity : 0 , y : -30}}
                viewport={{once : false}}
                transition={{duration : 1 , delay : 0.1}}
                 className='flex flex-col justify-center lg:flex-row lg:flex-wrap xl:flex-row xl:flex-nowrap w-[100%] m-auto items-center mb-4 gap-8 '>
                    <Card2 />
                    <Card3 />
                    <Card />
                </motion.div>



            </div>

            <Comparision />
            <Products />
            <PricingComponent />

            <div className='w-[100%] mt-2'>
                <h1 style={{ backgroundImage: "radial-gradient(98.0344% 98.0344% at 1.35135% 3.04878%, rgb(49, 46, 129) 0%, rgb(3, 7, 18) 100%)" }} className="text-4xl px-2 w-full w-full font-bold text-center bg-clip-text text-transparent">
                    See What Our Clients Are Saying
                </h1>

                <InfiniteMovingCardsDemo />

            </div>

            <div className='flex justify-center items-center w-[100%]'>
                <Footer />
            </div>



        </div>
    )
}

export default LandingPage
