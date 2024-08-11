  import React , {useState , useEffect} from 'react'
  const LatestMovies = ({BASE_URL , API_KEY}) => {
    const [movies , setMovies] = useState([]);

    const getLatestMovies = async () =>{
      try {
        const response  = await fetch(`${BASE_URL}movie/upcoming?api_key=${API_KEY}`);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log({message : error.message});
        
      }
    }

    useEffect(()=>{
      getLatestMovies();
    },[])

    return (
      <div className='' >
        <h1 className='font-semibold text-2xl px-1 text-white py-2' >Latest in Movies</h1>
        <div className='w-[88vw] mx-auto' >
        <div className='latestMovies flex gap-3 px-1 overflow-x-auto' >
        {movies.map((Element , id)=>{
          return(
              <img key={id} className='w-28 rounded-md cursor-pointer'  src={`https://image.tmdb.org/t/p/w500/${Element.poster_path}`} alt="" />
          )
        })}
        </div>
        </div>
      </div>
    )
  }

  export default LatestMovies
