import React from 'react'
import SkillCard from './SkillCard';

const skillItem = [
    {
        imgSrc: '/assets/techstacks/react.svg',
        label: 'React',
        desc: 'Library'
    },
    {
        imgSrc: '/assets/techstacks/nextjs.svg',
        label: 'Next.js',
        desc: 'Framework'
    },
    {
        imgSrc: '/assets/techstacks/javascript.svg',
        label: 'Javascript',
        desc: 'Interaction'
    },
    {
        imgSrc: '/assets/techstacks/nodejs.svg',
        label: 'NodeJS',
        desc: 'Web Server'
    },
    {
        imgSrc: '/assets/techstacks/expressjs.svg',
        label: 'ExpressJS',
        desc: 'Node Framework'
    },
    {
        imgSrc: '/assets/techstacks/html.svg',
        label: 'HTML',
        desc: 'Markup Language'
    },
    {
        imgSrc: '/assets/techstacks/css3.svg',
        label: 'CSS',
        desc: 'User Interface'
    },
    {
        imgSrc: '/assets/techstacks/tailwindcss.svg',
        label: 'TailwindCSS',
        desc: 'User Interface'
    },
    {
        imgSrc: '/assets/techstacks/mongodb.svg',
        label: 'MongoDB',
        desc: 'Database'
    },
    {
        imgSrc: '/assets/techstacks/postgresql.svg',
        label: 'Postgresql',
        desc: 'Database'
    },
    {
        imgSrc: '/assets/techstacks/shopify.svg',
        label: 'Shopify',
        desc: 'E-commerce Platform'
    },    
];

const Skills = () => {
  return (
    <section className='section'>
        <div className='container'>
            <h2 className='headline-2'>
                Tech Stacks
            </h2>
            <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
                Check out my tech stacks I use to build websites & application
            </p>

            <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
                {skillItem.map((item) => (
                    <SkillCard key={item.label} imgSrc={item.imgSrc} label={item.label} desc={item.desc} classes={item.classes} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Skills