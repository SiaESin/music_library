import { useEffect, useState, Suspense } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { fetchSearch as fetchData } from './helper'
import Spinner from './components/Spinner'

const App = () => {
    let [searchTerm, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])

    const API_URL = 'https://itunes.apple.com/search?term='

    useEffect(() => {
        if (searchTerm) {
            //setData(fetchData(searchTerm))
            fetchData(searchTerm).then((apiData) => {
                setData(apiData)
            })
            
        }
    }, [searchTerm])

    const handleSearch = (e, term) => {
        e.preventDefault()
        setSearch(term)
    }
    const renderGallery = () => {
        if (data) {
            console.log('I AM DATA inside the ifff render gallery', data)
            return (
                <Suspense fallback={<Spinner />}>
                    <Gallery data={data} />
                </Suspense>
            )
        }
    }

    console.log('OUR DATA FROM APIU!', data)

    // return (
    //     <div className="App">
    //         <SearchBar handleSearch={handleSearch} />
    //         {message}
    //         {renderGallery()}
    //     </div>
    // )



    //   useEffect(() => {
    //       if(search) {
    //           const fetchData = async () => {
    //               document.title = `${search} music`
    //               const response = await fetch(API_URL + search)
    //               const resData = await response.json()
    //               if (resData.results.length > 0) {
    //                   return setData(resData.results)
    //               } else {
    //                   return setMessage('Not Found.')
    //               }
    //           }
    //           fetchData()
    //       }
    //   }, [search])


    const spinnerTrick = () => {
        if(data.length >0) {
            return (
                <Gallery data={data} />
            ) 
        } else {
            return (<Spinner />)
        }
    }

    // console.log("API data", data)
    return (
        <div className="App">
            <SearchBar handleSearch={handleSearch} />
            {message}

            
           
            {spinnerTrick()}
           
        </div>
    )

}

export default App



