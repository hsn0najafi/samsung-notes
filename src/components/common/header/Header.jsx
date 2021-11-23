import { useContext } from "react";

import PopUp from "./PopUp";
import SearchBar from "./SearchBar";
import MoreOptions from "./MoreOptions";
import Context from "../../context/Context";

const Header = () => {
    const c = useContext(Context);

    return (
        <div className="header-container">
            <div className="catName">
                {c.currentCat}
                <i
                    className="catNameButton fa fa-angle-down"
                    onClick={c.handleSetShowCatPopUp}
                ></i>
            </div>
            {c.showCatPopUp ? <PopUp /> : null}

            <button
                onClick={c.handleSetShowSearchBar}
                className="show-searchBar"
            >
                SEARCH
            </button>
            {c.showSearchBar ? <SearchBar /> : null}

            <button
                className="fa fa-ellipsis-v moreOptions-button"
                onClick={c.handleSetShowMoreOptions}
            />
            {c.showMoreOptions ? <MoreOptions /> : null}
        </div>
    );
};

export default Header;
