import React from 'react'


const socialLinks = [
    {
        href: 'https://github.com/jaedonl',
        icon: '/assets/github.svg',
        alt: 'GitHub'
    },
    {
        href: 'https://www.linkedin.com/in/jaedon-lee-1793aa175',
        icon: '/assets/linkedin.svg',
        alt: 'LinkedIn'
    },
    {
        href: 'https://www.youtube.com/@BumpEast',
        icon: '/assets/youtube2.svg',
        alt: 'YouTube'
    },
    {
        href: 'mailto:jyjd6404@gmail.com',
        icon: '/assets/email.svg',
        alt: 'Email'
    },
];


const Contact = () => {
  return (
    <section id='contact' className='section'>
        <div className='container lg:grid lg:grid-cols-2 lg:items-stretch'>
            <div className='mb-12 lg:mb-0 lg:flex lg:flex-col'>
                <h2 className='headline-2 lg:max-w-[12ch] reveal-up'>
                    Contact me
                </h2>

                <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch] reveal-up'>
                    Reach out to discuss any project needs for either Web or Videos!
                </p>

                <div className='flex items-center gap-2 mb-auto'>
                    {socialLinks.map((link) => (
                        <a href={link.href} key={link.alt} target='_blank' className='w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up'>
                            <img src={link.icon} alt="" width={25} height={25}/>
                        </a>                        
                    ))}
                </div>
            </div>
            
            <form action="https://getform.io/f/bmddnmwa" method="POST" className='xl:pl-10 2xl:pl-20 mt-8 mb-8'>
                <div className='md:grid md:items-center md:grid-cols-2 md:gap-2'>
                    <div className='mb-4'>
                        <label htmlFor="" className='label reveal-up'>
                            Name
                        </label>

                        <input type="text" name='name' id='name' autoComplete='name' required placeholder='Your name' className='text-field' />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="email" className='label reveal-up'>
                            Email
                        </label>

                        <input type="email" name='email' id='email' autoComplete='email' required placeholder='Your email' className='text-field' />
                    </div>
                </div>

                <div className='mb-4'>
                    <label htmlFor="message" className='label reveal-up'>
                        message
                    </label>

                    <textarea name="message" id="message" placeholder='Your message' required className='text-field resize-y min-h-32 max-h-80'></textarea>
                </div>

                
                <button type="submit" className='btn btn-primary justify-center reveal-up'>
                    Submit
                </button>
            </form>
        </div>
    </section>
  )
}

export default Contact