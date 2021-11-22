import PopUp from "./PopUp";
import SearchBar from "./SearchBar";
import MoreOptions from "./MoreOptions";
import Context from "../../context/Context";

const Header = ({ handleShowSearchBar, handleShowMoreOptions }) => {
    return (
        <Context.Consumer>
            {(c) => (
                <div className="header-container">
                    <div className="catName">
                        {c.state.currentCat}
                        <i
                            className="catNameButton fa fa-angle-down"
                            onClick={c.handleShowPopUp}
                        ></i>
                    </div>
                    {c.state.showCatPopUp ? (
                        <PopUp
                            state={c.state}
                            handleShowPopUp={c.handleShowPopUp}
                        />
                    ) : null}

                    <button
                        onClick={handleShowSearchBar}
                        className="show-searchBar"
                    >
                        SEARCH
                    </button>
                    {c.state.showSearchBar ? (
                        <SearchBar handleShowSearchBar={handleShowSearchBar} />
                    ) : null}

                    <button
                        className="fa fa-ellipsis-v moreOptions-button"
                        onClick={handleShowMoreOptions}
                    />
                    {c.state.showMoreOptions ? (
                        <MoreOptions
                            handleShowMoreOptions={handleShowMoreOptions}
                        />
                    ) : null}
                </div>
            )}
        </Context.Consumer>
    );
};

export default Header;
