import React from 'react'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialButton } from '@/data/index';

const Footer = () => {
    // const year = new Date().getFullYear();
    return (
        <footer className='w-full py-20  mb-[100px] md:mb-5' id='contact'>
            <div className='flex flex-col items-center'>
                <h1 className='lg:heading lg:max-w-[45vw] text-3xl text-center'>
                    Ready to take <span className='text-pelorous-400'>your</span> digital presence to the next level
                </h1>
                <p className='text-pelorous-300 dark:text-pelorous-default md:mt-10 my-5 text-center lg:text-md text-sm'>
                    Get in touch with me right now to talk about how I can support you in achieving your objectives. 
                </p>
                <a href='mailto:iqbal.py@outlook.com'>
                    <MagicButton
                    className='text-black dark:text-white'
                    title='Email me'
                    icon={<FaLocationArrow />}
                    position='right'
                    />
                </a>
            </div>
            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-base text-sm md:font-normal font-light'>Copyright © {new Date().getFullYear()} Iqbal.py </p>
                <div className='flex items-center md:gap-3 gap-3 md:mt-0 mt-5'>
                    {socialButton.map((social) => (
                        <div key={social.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg backdrop-saturate-180 text-white dark:bg-neutral-900 bg-pelorous-default rounded-lg border dark:border-neutral-800'>
                           <a href={social.link}>
                          <social.icon/>
                          </a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer