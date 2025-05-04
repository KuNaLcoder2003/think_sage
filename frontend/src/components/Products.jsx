import React , {useState , useEffect} from 'react'
import { motion } from 'framer-motion'

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

const Products = ({ref}) => {
    return (
        <div ref={ref}
        
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
    const width = useWindowWidth();
    return (
        <motion.div 
        initial={{opacity : 0 , y : 40}}
        whileInView={{opacity : 1 , y : 0}}
        exit={{opacity : 0 , y : -40}}
        viewport={{once : false}}
        transition={{duration : 1 , ease : "easeInOut"}}
        className={`flex ${obj.left ? "flex-col" : "flex-col"} lg:flex-row p-[10px] lg:justify-around ${obj.left ? "lg:flex-row lg:items-center lg:px-8" : "lg:flex-row-reverse lg:items-center lg:px-[-10px]"} w-[100%] md:w-[70%] 3xl:w-[50%] lg:gap-4 3xl:gap-6 lg:w-[100%] h-[600px] lg:h-[400px] shadow-lg rounded-4xl bg-white`}>

            <div className={`object-cover flex-1 flex justify-center items-center lg:block h-[60%] lg:h-[90%]`}>
                <img src={obj.img} className='rounded-4xl h-[85%] lg:h-[100%]' />
            </div>

            <div className={`border-black flex-1 h-[70%] md:h-[90%] w-[100%] p-4 lg:p-2 flex flex-col justify-center md:justify-around lg:justify-between`}>
                <div className='border-black flex-1 h-[100%] w-[100%] p-2 flex flex-col gap-4'>
                    <h1 style={{ backgroundImage: "radial-gradient(98.0344% 98.0344% at 1.35135% 3.04878%, rgb(49, 46, 129) 0%, rgb(3, 7, 18) 100%)" }} className="text-3xl w-full md:w-full font-bold bg-clip-text text-transparent text-center lg:text-start">
                        {obj.heading}
                    </h1>
                    <p className='font-md text-[#6b7280] w-[100%] lg:w-[90%] text-center lg:text-start'>{obj.desc}</p>
                    <div className='flex items-center gap-2 flex-wrap justify-center lg:justify-start'>
                       {
                        obj.tags.map((tag , index) => {
                            return (
                                <div key={`${tag}_${index}`} className='text-center py-1 px-4 border shadow-md border-gray-200 rounded-full font-semibold text-[#6b7280]'>{tag.desc}</div>
                            )
                        })
                       }
                    </div>
                </div>

                <div className='font-semibold text-[#6b7280] text-center lg:text-start mt-4 md:mt-0'>
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
