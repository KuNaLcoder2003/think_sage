// import { FacebookIcon, LinkedinIcon, MailIcon, TwitchIcon } from 'lucide-react'
// import React from 'react'
// import { FaTelegram } from 'react-icons/fa'

// const Footer = () => {
//     return (
//         <div class=" w-[100%] md:mx-10 md:w-[90%] lg:w-[85%] pt-4 px-4 pb-0 h-[550px] m-auto absolute top-[32px] left-1/2 translate-x-[-50%] p-2 bg-gradient-to-b from-indigo-500 to-indigo-900 rounded-t-[47.86px] shadow-[0_130px_35px_rgba(79,70,229,0.01),0_75px_36px_rgba(79,70,229,0.03),0_42px_30px_rgba(79,70,229,0.08),0_18px_22px_rgba(79,70,229,0.14),0_4px_12px_rgba(79,70,229,0.16)] opacity-100 will-change-transform">
//             <div class=" px-6 m-auto pt-4 h-[100%]  bg-[radial-gradient(35%_63%_at_50%_50%,_rgb(99,102,241)_0%,_rgb(67,56,202)_100%)] rounded-t-[54.69px] border-[1.37px] border-solid border-[rgba(255,255,255,0.04)] opacity-100 text-white">
//                 <div className='overflow-hidden relative flex flex-col p-2 items-center xl:items-start gap-8'>
//                     <img src='https://framerusercontent.com/images/EooIXZMbckDD4WoEwkLetTY1HnQ.png' className='hidden lg:block absolute w-[235px] left-[682px]'  />
//                     <h1 className='text-4xl lg:text-6xl w-[90%] text-center xl:text-start lg:w-[70%] text-white font-bold'>Let’s Build Something Great Together</h1>
//                     <p className='text-lg w-[40%]'>Book a free call or send us a message and let’s discuss your project!</p>
//                     <div class="cursor-pointer w-[30%]  p-2 bg-gradient-to-b from-stone-300 to-stone-400 rounded-[47.86px] shadow-[0_130px_35px_rgba(79,70,229,0.01),0_75px_36px_rgba(79,70,229,0.03),0_42px_30px_rgba(79,70,229,0.08),0_18px_22px_rgba(79,70,229,0.14),0_4px_12px_rgba(79,70,229,0.16)] opacity-100 will-change-transform">
//                         <div class=" p-2 font-bold text-lg text-center  bg-gradient-to-b from-stone-200 to-stone-300 rounded-[54.69px] border-[1.37px] border-solid border-[rgba(255,255,255,0.04)] opacity-100">
//                             <p style={{ backgroundImage: "radial-gradient(98.0344% 98.0344% at 1.35135% 3.04878%, rgb(49, 46, 129) 0%, rgb(3, 7, 18) 100%)" }} className='bg-clip-text text-transparent'>Book a call</p>
//                         </div>
//                     </div>

//                     <div className='flex items-center gap-20 w-[50%] justify-between ' >
//                         <p className='text-4xl font-semibold text-white'>Designify</p>
//                         <div className='flex items-center gap-6'>
//                             <FaTelegram size={32} className='cursor-pointer' />
//                             <MailIcon size={32} className='cursor-pointer' />
//                             <LinkedinIcon size={32} className='cursor-pointer' />
//                         </div>
//                     </div>
//                     <div className='flex items-center gap-16 w-[50%] justify-between ' >
//                         <p className='text-lg font-strong text-white'>kunalindia59@gmail.com</p>
//                         <div className='flex items-center gap-6'>
//                             <p>Privacy</p>
//                             <p>Terms</p>
//                             <p>Careers</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Footer


import { FacebookIcon, LinkedinIcon, MailIcon, TwitchIcon } from 'lucide-react'
import React from 'react'
import { FaTelegram } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="w-full overflow-hidden md:mx-10 md:w-[90%] lg:w-[85%] 3xl:w-[65%] pt-4 px-4 h-auto lg:h-[600px] m-auto bg-gradient-to-b from-indigo-500 to-indigo-900 rounded-t-[47.86px] shadow-[0_130px_35px_rgba(79,70,229,0.01),0_75px_36px_rgba(79,70,229,0.03),0_42px_30px_rgba(79,70,229,0.08),0_18px_22px_rgba(79,70,229,0.14),0_4px_12px_rgba(79,70,229,0.16)]">
            <div className="px-6 m-auto h-[100%] overfloe-hidden pt-4 bg-[radial-gradient(35%_63%_at_50%_50%,_rgb(99,102,241)_0%,_rgb(67,56,202)_100%)] rounded-t-[54.69px] border border-[rgba(255,255,255,0.04)] text-white">
                <div className="relative flex flex-col p-4 items-center xl:items-start gap-8">
                    {/* Optional image */}
                    <img
                        src="https://framerusercontent.com/images/EooIXZMbckDD4WoEwkLetTY1HnQ.png"
                        className="hidden xl:block absolute w-[270px] left-[850px] 3xl:left-[1100px]"
                        alt="Decoration"
                    />

                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl lg:text-6xl w-full lg:w-[70%] text-center xl:text-left font-bold">
                        Let’s Build Something Great Together
                    </h1>

                    {/* Subheading */}
                    <p className="text-base md:text-lg w-full md:w-3/4 lg:w-2/4 text-center xl:text-left">
                        Book a free call or send us a message and let’s discuss your project!
                    </p>

                    {/* CTA Button */}
                    <div className="cursor-pointer w-full sm:w-1/2 md:w-1/3 3xl:w-[20%] p-2 bg-gradient-to-b from-stone-300 to-stone-400 rounded-[47.86px] shadow-[0_130px_35px_rgba(79,70,229,0.01),0_75px_36px_rgba(79,70,229,0.03),0_42px_30px_rgba(79,70,229,0.08),0_18px_22px_rgba(79,70,229,0.14),0_4px_12px_rgba(79,70,229,0.16)]">
                        <div className="p-2 font-bold text-lg text-center bg-gradient-to-b from-stone-200 to-stone-300 rounded-[54.69px] border border-[rgba(255,255,255,0.04)]">
                            <p
                                style={{
                                    backgroundImage:
                                        "radial-gradient(98.0344% 98.0344% at 1.35135% 3.04878%, rgb(49, 46, 129) 0%, rgb(3, 7, 18) 100%)",
                                }}
                                className="bg-clip-text text-transparent"
                            >
                                Book a call
                            </p>
                        </div>
                    </div>

                    {/* Branding & Icons */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full lg:w-[50%] 3xl:w-[30%]">
                        <p className="text-3xl font-semibold">Designify</p>
                        <div className="flex items-center gap-6">
                            <FaTelegram size={32} className="cursor-pointer" />
                            <MailIcon size={32} className="cursor-pointer" />
                            <LinkedinIcon size={32} className="cursor-pointer" />
                        </div>
                    </div>

                    {/* Contact and Footer Links */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full lg:w-[50%] 3xl:w-[30%]">
                        <p className="text-sm md:text-base font-medium">kunalindia59@gmail.com</p>
                        <div className="flex items-center gap-4 text-sm md:text-base">
                            <p className="cursor-pointer hover:underline">Privacy</p>
                            <p className="cursor-pointer hover:underline">Terms</p>
                            <p className="cursor-pointer hover:underline">Careers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

