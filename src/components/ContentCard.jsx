import React from 'react'
import PropTypes from 'prop-types'

const ContentCard = ({title, author, cover, video, classes}) => {
  return (
    <li className={'relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors ' + classes}>
        <a href={video} target='_blank'>
            <img src={cover} alt={title} />
            <h3 className='mt-2 line-clamp-1 text-base font-semibold text-white xs:text-xl'>{title}</h3>
            <p className='mt-1 line-clamp-1 text-sm text-zinc-400'>{author}</p>
        </a>
    </li>
  )
}

ContentCard.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default ContentCard