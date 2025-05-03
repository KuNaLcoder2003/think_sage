import React from 'react'
import { motion } from 'framer-motion'

const Products = () => {
    return (
        <div 
        
        className='w-[80%] md:w-[100%] xl:w-[80%] m-auto mb-10 flex flex-col gap-4 '>

            <h1 style={{ backgroundImage: "radial-gradient(98.0344% 98.0344% at 1.35135% 3.04878%, rgb(49, 46, 129) 0%, rgb(3, 7, 18) 100%)" }} className="text-4xl px-2 w-full md:w-full font-bold text-center bg-clip-text text-transparent">
                See How We Help Other's
            </h1>

            <div className='w-[100%] flex flex-col justify-center items-center gap-4'>
                {
                    products_arr.map((product , index)=>{
                        return (
                            <ProductCard obj={product} key={`${index}_${product.heading}`} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products

const ProductCard = ({ obj  }) => {
    return (
        <motion.div 
        initial={{opacity : 0 , y : 40}}
        whileInView={{opacity : 1 , y : 0}}
        exit={{opacity : 0 , y : -40}}
        viewport={{once : false}}
        transition={{duration : 1 , ease : "easeInOut"}}
        className={`flex ${obj.left ? "flex-col" : "flex-col"} lg:flex-row lg:px-8 lg:justify-around ${obj.left ? "lg:flex-row lg:items-center" : "lg:flex-row-reverse lg:items-center"} w-[100%] md:w-[70%] 3xl:w-[50%] lg:w-[100%] h-[600px] lg:h-[400px] shadow-lg rounded-4xl bg-white`}>

            <div className={`object-cover flex-1 flex justify-center items-center lg:block h-[60%] lg:h-[90%]`}>
                <img src={obj.img} className='rounded-4xl h-[90%]  lg:h-[100%]' />
            </div>

            <div className={`border-black flex-1 h-[70%] md:h-[90%] w-[100%] p-4 lg:p-2 flex flex-col justify-center md:justify-around lg:justify-between`}>
                <div className='border-black flex-1 h-[100%] w-[100%] p-2 flex flex-col gap-4'>
                    <h1 style={{ backgroundImage: "radial-gradient(98.0344% 98.0344% at 1.35135% 3.04878%, rgb(49, 46, 129) 0%, rgb(3, 7, 18) 100%)" }} className="text-3xl w-full md:w-full font-bold bg-clip-text text-transparent">
                        {obj.heading}
                    </h1>
                    <p className='font-md text-[#6b7280] w-[90%]'>{obj.desc}</p>
                    <div className='flex items-center gap-2'>
                       {
                        obj.tags.map((tag , index) => {
                            return (
                                <div key={`${tag}_${index}`} className='text-center py-1 px-4 border shadow-md border-gray-200 rounded-full font-semibold text-[#6b7280]'>{tag.desc}</div>
                            )
                        })
                       }
                    </div>
                </div>

                <div className='font-semibold text-[#6b7280]'>
                    <p>{obj.type}</p>
                </div>
            </div>



        </motion.div>
    )
}


const products_arr = [
    {
        img : "https://framerusercontent.com/images/d29CnpfyTPjz2QD93CqWDy3lW0.png",
        heading : "Cluely",
        desc : "We built Cluely’s site from scratch with engaging animation and a visually compelling design.",
        tags : [{desc : "SaaS"} , {desc : "AI"} ],
        type : "Web Design - Animation",
        left : true,
    },
    {
        img : "https://framerusercontent.com/images/QyxSfWbqpXIxJThv4PN3W09Xuoo.png",
        heading : "Helicon",
        desc : "We designed Helicon’s app and redesigned their site to improve usability and appeal.",
        tags : [{desc : "Agency"} , {desc : "App dev"} , {desc : "B2B"}],
        type : "Web Design - Copywriting - App Design",
        left : false,
    },
    {
        img : "https://framerusercontent.com/images/NG72MSdIwX2XKu3AGU6z09ZsTqE.png",
        heading : "Tachyo",
        desc : "Tachyo saw increased user interest and conversions with our stunning design and product animation.",
        tags : [{desc : "SaaS"} , {desc : "AI"} , {desc : "reading"}],
        type : "Web Design - Animation - Product Design",
        left : true,
    },
    {
        img : "https://framerusercontent.com/images/QOOvVUDrsCHb6NNj1HE5qVf7pRU.png",
        heading : "Papermap",
        desc : "Papermap saw improved usability and engagement through refined product and web design.",
        tags : [{desc : "SaaS"} , {desc : "Data"} , {desc : "AI"}] , 
        type : "Web Design - Product Design",
        left : false
    },
]
