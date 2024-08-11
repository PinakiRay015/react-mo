import React , {useEffect , useState} from 'react'

const PopularCast = ({BASE_URL , API_KEY}) => {
    const [getCast, setGetCast] = useState([])

    const getPopularCast = async () =>{
        try {
            const response  = await fetch(`${BASE_URL}person/popular?api_key=${API_KEY}`);
            const data = await response.json();
            setGetCast(data.results)
        } catch (error) {
            console.log({msg : error.message});
            
        }
    }

    useEffect(()=>{
        getPopularCast()
    },[])

  return (
    <div>
      <h1 className='font-semibold text-2xl px-1 text-white py-2'>Your favourite casts</h1>
      <div className='w-[88vw] mx-auto' >
        <div className='latestMovies flex gap-3 px-1 overflow-x-auto' >
        {getCast.map((Element , id)=>{
            return(
                <div className='min-w-32 h-32' >
                    <img key={id} className=' rounded-full w-full h-full object-cover cursor-pointer'  src={`https://image.tmdb.org/t/p/w500/${Element.profile_path}`} alt="" />
                </div>
            )
        })}
        </div>
        </div>
    </div>
  )
}

export default PopularCast
