import React , {useState , useEffect} from 'react'

const TopRatedShows = ({BASE_URL , API_KEY}) => {

    const [topRated, setTopRated] = useState([])

    const getTopRatedShows = async () =>{
        try {
            const response = await fetch(`${BASE_URL}tv/top_rated?api_key=${API_KEY}`);
            const data = await response.json();
            setTopRated(data.results);
        } catch (error) {
            console.log({msg : error.message});
        }
    }

    useEffect(()=>{
        getTopRatedShows();
    },[])

  return (
    <div>
      <h1 className='font-semibold text-2xl text-white py-2 px-1'>Top Rated Tv Shows</h1>
      <div className='w-[88vw] mx-auto' >
        <div className='latestMovies flex gap-3 px-1 overflow-x-auto' >
            {topRated.map((Element , id)=>{
                return(
                    <img key={id} className='w-28 rounded-md cursor-pointer'  src={`https://image.tmdb.org/t/p/w500/${Element.poster_path}`} alt="" />
                )
            })}
        </div>
        </div>
    </div>
  )
}

export default TopRatedShows
