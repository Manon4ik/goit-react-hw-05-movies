
export default function SearchForm({onGetRequest}) {

    const handleSubmitForm = e => {
        e.preventDefault()
        const form = e.currentTarget;
        const search = e.currentTarget.search.value
        //console.log('search: ', search)
        //setSearch(search)
        //setSearchParams({ query: search })
        
        if(search ===''){
            return
        }
        
        onGetRequest(search.toLowerCase())
        form.reset()

        // if(search !==''){
        //     getMovieSearch(search)
        // }
    }

    return (
        <form className="" onSubmit={handleSubmitForm}>
            <input name="search" type="text" />
            <button type="submit">Search</button>
        </form>
    )
}