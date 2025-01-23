import React from 'react'

const aboutItems = [
    {
      label: 'Projects',
      number: 7
    },
    {
      label: 'Years of experience',
      number: 4
    }
];

const About = () => {
  return (
    <section id='about' className='section'>
        <div className='container'>
            <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up'>
                <h2 className='headline-2 mt-5 mb-8 lg:mb-10'>Hi, I'm Jaedon Lee.</h2>
                <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl'>
                    Software engineer (Frontend) with 3-4 years of experience building user-friendly web applications using React.js, Next.js, Typescript and Node.js. Developed a web application and e-commerce projects, focusing on creating interactive and efficient user interfaces. Proficient in responsive design, modern JavaScript libraries, and collaborating with teams to deliver high-quality solutions.
                </p>

                <div className='flex flex-wrap items-center gap-4 md:gap-7'>
                    {aboutItems.map((item) => (
                        <div key={item.label}>
                            <div className='flex items-center justify-center md:mb-2'>
                                <span className='text-2xl font-semibold md:text-4xl'>{item.number}</span>
                                <span className='font-semibold md:text-3xl'>+</span>
                            </div>

                            <p className='text-sm text-zinc-400'>{item.label}</p>
                        </div>
                    ))}

                    <img src='assets/be_profile_logo.png' width={40} height={40} className='ml-auto md:w-[50px] md:h[50px]' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About