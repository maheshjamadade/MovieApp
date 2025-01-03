import React from 'react'
import { useSelector } from 'react-redux'
import moment, { months } from 'moment'
import { Link } from 'react-router-dom'

const Card = ({data,ternding, index,media_type}) => {
    const imageURl  =  useSelector(state => state.movieoData.imageURl)
    const mediaType = data.media_type ?? media_type
  return (
    <Link to={"/"+mediaType+"/"+data.id} className='w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden rounded relative hover:scale-105 transition-all'>
      {
            data?.poster_path ? (
                <img
                    src={imageURl+data?.poster_path}
                />
            ) : (
                <div className='bg-neutral-800 h-full w-full flex justify-center items-center'>
                    No image found
                </div>
            )

        }
        <div className='absolute top-4'>
        {
        ternding &&(
            <div className='py-1 px-4 bg-black/55 backdrop-blur-3xl rounded-r-full overflow-hidden'>
                #{index} Trending
            </div>
        ) 
    }
        </div>
        <div className='absolute bottom-0 h-16 backdrop-blur-3xl w-full  bg-black/60 p-2'>
            <h2 className='text-ellipsis line-clamp-1 text-lg font-semibold'>{data?.title || data?.name}</h2>
            <div className='text-sm text-neutral-400 flex justify-between items-center'>
                <p>
                     {moment(data.release_date).format("MMMM Do YYYY")}
                </p>
                <p className='bg-black px-1 rounded-full text-xs text-white'> Rating:{Number(data.vote_average).toFixed(1)}</p>
            </div>
        </div>
    </Link>
  )
}

export default Card
