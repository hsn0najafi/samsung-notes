import PopUp from "./common/PopUp";

const Header = ({ state, handleShowPopUp }) => {
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
            <div className="searchBar-text"></div>
            <div className="fixed-searchBar" style={{ display: "none" }}>
                <button className="backButton" />
                <div>
                    <i className="fa fa-search"></i>
                    <input type="search" className="search" />
                </div>
            </div>
            <div className="more-options">
                <div className="popUp-moreOptions"></div>
                <div className="manage-catergories"></div>
            </div>
        </div>
    );
};

export default Header;
