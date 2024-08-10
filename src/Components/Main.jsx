import React from 'react'
import Banner from './Banner'
import LatestMovies from './LatestMovies'
const Main = () => {

    const BASE_URL = 'https://api.themoviedb.org/3/'
    const API_KEY = '376a7b56bf7b28c1457c230c2ebbd63a'

  return (
    <div className='pl-[10vw] overflow-x-hidden bg-[#0d1b2a]' >
      <Banner BASE_URL={BASE_URL} API_KEY = {API_KEY} />
      <LatestMovies BASE_URL={BASE_URL} API_KEY = {API_KEY} />
    </div>
  )
}

export default Main
