import React from 'react'

function MovieCard({title,posterUrl,type}) {
    return (
        <div>
            <div>{title}</div>
            <img src={posterUrl} alt={title}/>
            {type}
        </div>
    )
}

export default MovieCard
