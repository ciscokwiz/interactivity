import './Search.css'


function search(){
    
    return(
        <div className="search-input">
            <input type="search" placeholder="Search" value={search} />
        </div>
    )
}

export default search