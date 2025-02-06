import { useContext } from 'react'

import Context from '../../context/Context'

const SearchBar = () => {
  const c = useContext(Context)

  return (
    <form onSubmit={(e) => e.preventDefault()} className="fixed-searchBar">
      <button className="searchBar-backButton fa fa-arrow-left" onClick={c.handleSetShowSearchBar} />
      <div className="searchBar-input">
        <i className="fa fa-search"></i>
        <input type="search" placeholder="   جستجو ...   " onChange={(e) => c.handleSearchTodos(e)} onFocus={c.handleTodosBackUp} />
      </div>
    </form>
  )
}

export default SearchBar
