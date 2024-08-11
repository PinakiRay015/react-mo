import React from 'react'
import Banner from './Banner'
import LatestMovies from './LatestMovies'
import TopRated from './TopRated'
import PopularCast from './PopularCast'
import WatchProviders from './WatchProviders'
import PopularMovies from './PopularMovies'
import Genres from './Genres'
const Main = () => {

    const BASE_URL = 'https://api.themoviedb.org/3/'
    const API_KEY = '376a7b56bf7b28c1457c230c2ebbd63a'

  return (
    <div className='pl-[10vw] overflow-x-hidden bg-[#0d1b2a]' >
      <Banner BASE_URL={BASE_URL} API_KEY = {API_KEY} />
      <PopularMovies BASE_URL={BASE_URL} API_KEY = {API_KEY}  />
      <LatestMovies BASE_URL={BASE_URL} API_KEY = {API_KEY} />
      <TopRated BASE_URL={BASE_URL} API_KEY = {API_KEY}  />
      <PopularCast BASE_URL={BASE_URL} API_KEY = {API_KEY}/>
      {/* <WatchProviders BASE_URL={BASE_URL} API_KEY = {API_KEY} /> */}
      <Genres slides={9}/>
    </div>
  )
}

export default Main
