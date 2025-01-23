import React from 'react'
import PortfolioCard from './PortfolioCard';

const works = [
    {
      imgSrc: '/assets/works/videoapp-1.png',
      // imgSet: ['/assets/works/videoapp-1.png', '/assets/works/videoapp-2.png', '/assets/works/videoapp-2.png'],
      title: 'Fullstack video app',
      tags: ['NextJS 15', 'TypeScript', 'Redis', 'Postgresql', "TailwindCSS"],
      projectLink: 'https://github.com/jaedonl/movieapp'
    },
    {
      imgSrc: '/assets/works/cmyk_1.jpg',
      // imgSet: ['/assets/works/cmyk_1.jpg', '/assets/works/cmyk_2.jpg', '/assets/works/cmyk_3.jpg', '/assets/works/cmyk_4.jpg', '/assets/works/cmyk_5.jpg'],
      title: 'Digital Agency Brand',
      tags: ['Vue', 'Sass', 'Frontend'],
      projectLink: 'https://www.cmykpluswhite.com/'
    },
    {
      imgSrc: '/assets/works/saturdayskin_1.jpg',
      // imgSet: ['/assets/works/saturdayskin_1.jpg', '/assets/works/saturdayskin_2.jpg', '/assets/works/saturdayskin_3.jpg', '/assets/works/saturdayskin_4.jpg', '/assets/works/saturdayskin_5.jpg', '/assets/works/saturdayskin_6.jpg', '/assets/works/saturdayskin_7.jpg', '/assets/works/saturdayskin_8.jpg'],
      title: 'Saturday Skin Shopify E-commerce',
      tags: ['eCommerce', 'Shopify'],
      projectLink: 'https://saturdayskin.com/'
    },
    {
      imgSrc: '/assets/works/realestate-1.png',
      // imgSet: ['/assets/works/realestate-1.png', '/assets/works/realestate-2.png', '/assets/works/realestate-3.png', '/assets/works/realestate-4.png'],
      title: 'Real estate web app',
      tags: ['React 19', 'Vite', 'Express' ,'MongoDB', 'Prisma'],
      projectLink: 'https://github.com/jaedonl/realestate-app'
    },
    {
      imgSrc: '/assets/works/shopify_nextjs_1.jpg',
      // imgSet: ['/assets/works/shopify_nextjs_1.jpg', '/assets/works/shopify_nextjs_2.jpg', '/assets/works/shopify_nextjs_3.jpg', '/assets/works/shopify_nextjs_4.jpg', '/assets/works/shopify_nextjs_5.jpg'],
      title: 'NextJS Shopify CLI Integration',
      tags: ['NextJS', 'Shopify CLI', 'eCommerce', 'Sass'],
      projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    },
    {
      imgSrc: '/assets/works/listing-1.jpg',
      // imgSet: ['/assets/works/listing-1.jpg', '/assets/works/listing-2.jpg', '/assets/works/listing-3.jpg', '/assets/works/listing-4.jpg', '/assets/works/listing-5.jpg', '/assets/works/listing-6.jpg'],
      title: 'Listing app',
      tags: ['NextJS', 'MongoDB', 'Redux'],
      projectLink: 'https://github.com/jaedonl/listing-app-nextjs'
    },
    {
      imgSrc: '/assets/works/ecommerce_1.jpg',
      // imgSet: ['/assets/works/ecommerce_1.jpg', '/assets/works/ecommerce_2.jpg', '/assets/works/ecommerce_3.jpg', '/assets/works/ecommerce_4.jpg', '/assets/works/ecommerce_5.jpg', '/assets/works/ecommerce_6.jpg'],
      title: 'eCommerce react',
      tags: ['React', 'Sass' ,'eCommerce', 'MongoDB', 'MERN'],
      projectLink: 'https://github.com/jaedonl/React-E-commerce'
    },
    {
      imgSrc: '/assets/works/cha_1.jpg',
      // imgSet: ['/assets/works/cha_1.jpg', '/assets/works/cha_2.jpg'],
      title: 'vCard Personal portfolio',
      tags: ['Vue', 'Sass', 'Frontend'],
      projectLink: 'https://www.chalogybeauty.com/'
    },
    {
      imgSrc: '/assets/works/admin_panel_1.jpg',
      // imgSet: ['/assets/works/admin_panel_1.jpg', '/assets/works/admin_panel_2.jpg', '/assets/works/admin_panel_3.jpg', '/assets/works/admin_panel_4.jpg', '/assets/works/admin_panel_5.jpg'],
      title: 'Admin Panel',
      tags: ['React', 'MongoDB', 'MERN'],
      projectLink: 'https://github.com/jaedonl/React-E-commerce'
    }
];

const Works = () => {
  return (
    <section id='work' className='section'>
      <div className='container'>
        <h2 className='headline-2 mb-8 reveal-up'>
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
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works