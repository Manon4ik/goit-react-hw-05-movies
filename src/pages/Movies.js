export default function Movies() {

    const handleSubmitForm = evt => {
        evt.preventDefault()
        const search = evt.currentTarget.search.value
        console.log('search: ', search);
        
      }

    return(
        <div>
            <h1>Movies</h1>
            <form className="" onSubmit={handleSubmitForm}>
                <input name="search" type="text" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}