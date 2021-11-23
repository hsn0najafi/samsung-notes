import { useContext } from "react";

import PopUp from "./PopUp";
import SearchBar from "./SearchBar";
import MoreOptions from "./MoreOptions";
import Context from "../../context/Context";

const Header = () => {
    const c = useContext(Context);

    return (
        <div className="header-container">
            <button className="catName">
                {c.currentCat}
                <i
                    className="catNameButton fa fa-angle-down"
                    onClick={c.handleSetShowCatPopUp}
                ></i>
            </button>
            {c.showCatPopUp ? <PopUp /> : null}

            <button
                className="show-searchBar"
                onClick={c.handleSetShowSearchBar}
            >
                SEARCH
            </button>
            {c.showSearchBar ? <SearchBar /> : null}

            <button
                className="moreOptions-button fa fa-ellipsis-v"
                onClick={c.handleSetShowMoreOptions}
            />
            {c.showMoreOptions ? <MoreOptions /> : null}
        </div>
    );
};

export default Header;
