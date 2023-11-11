import React from 'react'

function Search({ handelInput, search }) {
    return (
        <section className='searchbox-wrap'>
            <input type="text" placeholder='Search for a movie...' className='searchbox' onChange={handelInput} onKeyPress={search} />
        </section>
    )
}

export default Search