import React , {useState , useEffect} from 'react'

const PopularMovies = ({BASE_URL , API_KEY}) => {
    const [popular, setPopular] = useState([])
    const getPopularMovies = async () =>{
        try {
            const response = await fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}`);
            const data = await response.json();
            setPopular(data.results);
        } catch (error) {
            console.log({msg : error.message});
            
        }
    }

    useEffect(()=>{
        getPopularMovies();
    },[])
    
  return (
    <div>
        <h1 className='text-white font-semibold text-2xl px-1 py-2' >Popular in Movies</h1>
        <div className='w-[88vw] mx-auto' >
        <div className='latestMovies flex gap-3 px-1 overflow-x-auto' >
        {popular.map((Element , id)=>{
            return(
              <img key={id} className='w-28 rounded-md cursor-pointer'  src={`https://image.tmdb.org/t/p/w500/${Element.poster_path}`} alt="" />
            )
        })}
        </div>
        </div>
    </div>
  )
}

export default PopularMovies
