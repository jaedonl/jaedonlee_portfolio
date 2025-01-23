import React from 'react'
import PortfolioCard from './PortfolioCard';

const works = [
    {
      imgSrc: '/assets/works/project-1.jpg',
      title: 'Full stack music app',
      tags: ['API', 'MVC', 'Development'],
      projectLink: 'https://musify-5al0.onrender.com/'
    },
    {
      imgSrc: '/assets/works/project-2.jpg',
      title: 'Free stock photo app',
      tags: ['API', 'SPA'],
      projectLink: 'https://pixstock-official.vercel.app/'
    },
    {
      imgSrc: '/assets/works/project-3.jpg',
      title: 'Recipe app',
      tags: ['Development', 'API'],
      projectLink: ''
    },
    {
      imgSrc: '/assets/works/project-4.jpg',
      title: 'Real state website',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/codewithsadee-org/wealthome'
    },
    {
      imgSrc: '/assets/works/project-5.jpg',
      title: 'eCommerce website',
      tags: ['eCommerce', 'Development'],
      projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    },
    {
      imgSrc: '/assets/works/project-6.jpg',
      title: 'vCard Personal portfolio',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    },
];

const Works = () => {
  return (
    <section id='work' className='section'>
      <div className='container'>
        <h2 className='headline-2 mb-8'>
          Portfolios
        </h2>

        <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]'>
          {works.map((work) => (
            <PortfolioCard 
              key={work.title}
              imgSrc={work.imgSrc} 
              title={work.title} 
              tags={work.tags} 
              projectLink={work.projectLink} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works