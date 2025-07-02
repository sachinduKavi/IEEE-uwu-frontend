import React, {useState, useEffect, useRef} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons'
import '../css/slider.css'
import {Link} from "react-router-dom";



export default function Slider() {
    const [index, setIndex] = useState<number>(0)
    const [state, setState] = useState<boolean>(true)

    const appRunning = useRef(false)
    let timerRef = useRef<number | undefined>(undefined)


    const banner =  [
        {
            imageLink: 'images/banner02.jpg',
            heading: 'Empowering Future Innovators',
            description: 'Join largest tech community at Uva Wellassa University.'
        },
        {
            imageLink: 'images/banner01.jpg',
            heading: 'Hands On Learning Through IEEE Events',
            description: 'From coding marathons to tech talks - explore and grow with us.'
        },
        {
            imageLink: 'images/banner03.jpg',
            heading: 'Collaboration Beyond Classrooms',
            description: 'Network with like-minded peers and industry leads.'
        },
        {
            imageLink: 'images/banner04.jpg',
            heading: 'Become Member of IEEE UWU Today',
            description: 'Shape your professional journey with mentorship, innovation and leadership.'
        }
    ];

    const updateIndex = (increment: boolean) => {
        setState(false)
        setIndex(pre => {
            let number = increment ? pre + 1: pre - 1

            if(number < 0 || number >= banner.length) {
                number = (number < 0 ? number + banner.length: number) % banner.length
            }

            const sliderElement = document.getElementById('image-list-slider');
            const bannerElement = document.getElementById(`banner${number}`);

            if (sliderElement && bannerElement) {
                const bannerOffsetLeft = bannerElement.offsetLeft;
                sliderElement.scrollTo({
                    left: bannerOffsetLeft,
                    behavior: 'smooth',
                });
            }
            return number
        })



        clearInterval(timerRef.current)
        triggerTimer()
        setTimeout(() => setState(true), 600)
    }

    const triggerTimer = () => {
        timerRef.current = setInterval(() => updateIndex(true), 5000)
    }

    useEffect(() => {
        if(appRunning.current) return;
        appRunning.current = true
        triggerTimer()
    }, [])


    return (
        <div className='slider min-h-[100vh]' id='slider'>
            {/* <div className="background-blur"></div> */}
            <div className="background-gradient"></div>
            <div className="image-list-slider" id='image-list-slider'>
                {
                    banner.map((element, thisIndex) => {
                        return (
                            <div className="image-container" key={thisIndex}>
                                <motion.img
                                    initial={{scale: 1}}
                                    animate={{scale: index === thisIndex ? 1.5: 1, transition: {duration: index === thisIndex? 25: 0.2}}}
                                    src={element.imageLink} alt="image not loading" key={thisIndex} id={`banner${thisIndex}`}/>
                            </div>
                        )
                    })

                }

            </div>

            <div className="container slider-content relative" style={{height: '100%'}}>

                <div className="center-line relative">
                    <div className="arrow" onClick={() => updateIndex(false)}><ArrowLeftOutlined style={{fontSize: '24px'}}/></div>

                    <motion.div
                        initial={{opacity: 0, y: 100}}
                        exit={{opacity: 0, y: -100}}
                        animate={{opacity: 1, y: 0}}
                        className="flex flex-col items-center justify-center w-full px-4 py-6 space-y-4 max-w-screen-xl mx-auto text-center"
                    >
                        <h1 className="!font-extrabold text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl min-[1900px]:text-7xl leading-tight">
                            {banner[index].heading}
                        </h1>

                        <h3 className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl min-[1900px]:text-2xl max-w-3xl">
                            {banner[index].description}
                        </h3>

                        <Link to="#about-us">
                            <button className="cursor-pointer bg-slate-800 !font-bold text-white px-6 py-3 rounded-xl shadow-md hover:bg-slate-700 transition-all text-xs sm:text-sm md:text-base min-[1900px]:text-lg">
                                Learn More
                            </button>
                        </Link>
                    </motion.div>

                    <div className="arrow" onClick={() => updateIndex(true)}><ArrowRightOutlined style={{fontSize: '24px'}}/></div>

                </div>


                <div className="navigation-indicators">

                    {
                        [...Array(banner.length)].map((_, thisIndex) => {
                            return(<div className={`${index === thisIndex ? '!bg-orange-300': ''} indicators`} key={thisIndex}></div>)
                        })
                    }
                </div>


                
            </div>



        </div>
    )
}
