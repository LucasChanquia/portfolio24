import { Image } from '@nextui-org/react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'


import { Chip } from '@nextui-org/react'
import Link from 'next/link'
import { IBM_Plex_Mono } from 'next/font/google'
import { title } from './primitives'


const ibm = IBM_Plex_Mono({ weight: '400', subsets: ['latin'] })

type CardProps = {
    id: number
    name: string
    image: string[]
    description: string
    skill: string[]
    url?: string
    git?: string
}


export function ProjectsCard({ id, name, image, description, skill, url, git }: CardProps) {

    const CustomPrevArrow = (props: any) => {

        const { onClick, currentSlide } = props

        return (
            <>
                {currentSlide !== 0 && (
                    <button className='invisible left-7 sm:visible' onClick={onClick}>
                        <i className='fi fi-sr-angle-small-left flex rounded-full bg-transparent text-[#990000] p-1'></i>
                    </button>
                )}
            </>
        )
    }
    const CustomNextArrow = (props: any) => {
        const { onClick } = props

        return (
            <>
                <button className='invisible right-7 sm:visible' onClick={onClick}>
                    <i className='fi fi-sr-angle-small-right flex rounded-full bg-transparent text-[#990000] p-1'></i>
                </button>
            </>

        )
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        Lazyload: true,
        fade: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        dotsClass: 'dots',
        customPaging: () => <i className='fi fi-sr-bullet'></i>,
    }

    return (
        <div className="w-full h-auto">
            <div className='md:grid md:grid-cols-6 w-full gap-1 px-[20px] py-5' >
                <div className='md:col-span-3 gap-3 pb-5 md:pb-0 md:pr-5'>
                    <h3 className={`${title({ color: "cyan" })} ${ibm.className} text-center text-[25px]`}>{name}</h3>
                    <p className='text-justify leading-6 py-3'>{description}</p>
                    <div className='flex gap-3'>
                        {url && <Link href={url} color='secondary' target='_blank' className='flex pl-1 pt-2'><i className="fi fi-rr-site-browser"></i></Link>}
                        {git && <Link href={git} color='secondary' target='_blank' className='flex pl-1 pt-2'><i className="fi fi-brands-github"></i></Link>}
                    </div>

                </div>

                <div className='md:col-span-3 max-w-[450px] m-auto'>
                    <Slider {...settings}>
                        {image.map((imag, index) => (
                            <Image key={index} src={imag} alt={name} width={450} height={350} isZoomed className='w-full h-[250px]' />
                        ))}
                    </Slider>
                    <div className='flex justify-center gap-3 pt-5 flex-wrap'>
                        {skill.map((skil, index) => (
                            <Chip
                                key={index}
                                variant="faded"
                                color="success"
                            >
                                {skil}
                            </Chip>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    )
}