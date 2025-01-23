import React from 'react'
import { ButtonPrimary } from './\bButton'

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'YT Videos',
      href: '#ytVideos'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
];

const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/jaedonl'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jaedon-lee-1793aa175'
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@BumpEast'
    }
];


const Footer = () => {
    return (
        <footer className='section'>
            <div className='container'>
                <div className='lg:grid lg:grid-cols-2'>
                    <div className='mb-10'>
                        <h2 className='headline-1 mb-8 lg:max-w-[12ch] reveal-up'>
                            Let's work together today!
                        </h2>
                        <ButtonPrimary href="mailto:jyjd6404@gmail.com" label="Start project" icon="chevron_right" classes="reveal-up" />
                    </div>

                    <div className='grid grid-cols-2 gap-4 lg:pl-20'>
                        <div>
                            <p className='mb-2 reveal-up'>Sitemap</p>
                            <ul>
                                {sitemap.map((item) => (
                                    <li key={item.label}>
                                        <a href={item.href} className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up'>{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className='mb2 reveal-up'>Socials</p>
                            <ul>
                                {socials.map((item) => (
                                    <li key={item.label}>
                                        <a href={item.href} target='_blank' className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up'>{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-between pt-10 mb-8'>
                    <a href="/" className='logo reveal-up'>
                        <img src="/assets/bumpeast_logo.png" alt="logo" width={150} height={50} />
                    </a>

                    <p className='text-zinc-500 text-sm reveal-up'>
                        &copy; 2025 <span className='text-zinc-200'>jaedonlee</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer