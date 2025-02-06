import { useContext } from 'react'

import PopUp from './PopUp'
import SearchBar from './SearchBar'
import MoreOptions from './MoreOptions'
import Context from '../../context/Context'
import { Link } from 'react-router-dom'

const Header = () => {
  const c = useContext(Context)

  return (
    <div className="header-container">
      <div className="catName">
        <p>
          <Link to="/">{c.currentCategori}</Link>
        </p>
        <i className="catNameButton fa fa-angle-down" onClick={c.handleSetShowCategoriPopUp}></i>
      </div>
      {c.showCategoriPopUp && c.showEditorContainer === false ? <PopUp /> : null}

      <button className="show-searchBar" onClick={c.handleSetShowSearchBar}>
        SEARCH
      </button>
      {c.showSearchBar ? <SearchBar /> : null}

      <button className="moreOptions-button fa fa-ellipsis-v" onClick={c.handleSetShowMoreOptions} />

      {c.showMoreOptions ? <MoreOptions /> : null}
    </div>
  )
}

export default Header
