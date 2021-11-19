import PopUp from "./PopUp";
import SearchBar from "./SearchBar";
import MoreOptions from "./MoreOptions";

const Header = ({
    state,
    handleShowPopUp,
    handleShowSearchBar,
    handleShowMoreOptions,
}) => {
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

            <button onClick={handleShowSearchBar} className="show-searchBar">
                SEARCH
            </button>
            {state.showSearchBar ? (
                <SearchBar handleShowSearchBar={handleShowSearchBar} />
            ) : null}

            <button
                className="fa fa-ellipsis-v moreOptions-button"
                onClick={handleShowMoreOptions}
            />
            {state.showMoreOptions ? (
                <MoreOptions handleShowMoreOptions={handleShowMoreOptions} />
            ) : null}
        </div>
    );
};

export default Header;
