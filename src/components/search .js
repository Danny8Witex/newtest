import './search.css' 
import {useState} from 'react'

function Search() {

    const [searchItem, setSearchItem] = useState('')

    const search = (e) => {
        setSearchItem(e.target.value)
    }
    return (
        <div className='search-container'>
            <p className='search-p'>Search</p>
            <input onChange={search} value={searchItem} />
        </div>
    )
}

export default Search;