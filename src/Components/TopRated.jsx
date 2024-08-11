import React , {useState , useEffect} from 'react'

const TopRated = ({BASE_URL , API_KEY}) => {

    const [topMovies, setTopMovies] = useState([])
    const getTopMovies = async () =>{
        try {
            const response = await fetch(`${BASE_URL}movie/top_rated?api_key=${API_KEY}`)
            const data = await response.json();
            setTopMovies(data.results)
        } catch (error) {
            console.log({msg : error.message});
            
        }
    }
    
    useEffect(()=>{
        getTopMovies();
    },[])
    
  return (
    <div>
        <h1 className='font-semibold text-2xl px-1 text-white py-2' >Top Rated Movies</h1>
        <div className='w-[88vw] mx-auto' >
        <div className='latestMovies flex gap-3 px-1 overflow-x-auto' >
        {topMovies.map((Element , id)=>{
          return(
              <img key={id} className='w-28 rounded-md cursor-pointer'  src={`https://image.tmdb.org/t/p/w500/${Element.poster_path}`} alt="" />
          )
        })}
        </div>
        </div>
    </div>
  )
}

export default TopRated
