import PopUp from "./PopUp";
import SearchBar from "./SearchBar";
import MoreOptions from "./MoreOptions";

const Header = ({ state, handleShowPopUp, handleShowSearchBar }) => {
    return (
        <div className="header-container">
            <div className="catName">
                {state.currentCat}
                <i
                    className="catNameButton fa fa-angle-down"
                    onClick={handleShowPopUp}
                ></i>
            </div>

            {state.showCatPopUp ? (
                <PopUp state={state} handleShowPopUp={handleShowPopUp} />
            ) : null}

            {state.showSearchBar ? (
                <SearchBar handleShowSearchBar={handleShowSearchBar} />
            ) : null}

            <button
                onClick={handleShowSearchBar}
                className="show-searchBar fa fa-ellipsis-v"
            >
                SEARCH
            </button>
            <MoreOptions />
        </div>
    );
};

export default Header;
