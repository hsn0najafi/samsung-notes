const Header = ({ state }) => {
    return (
        <div className="header-container">
            <div className="catName">
                {state.currentCat}
                <i className="catNameButton fa fa-angle-down"></i>
            </div>
            <div
                className="popUp-catergoriSelect"
                style={{ height: `${state.cats.length * 40}px` }}
            >
                {state.cats.map((c) => (
                    <p>{c}</p>
                ))}
            </div>
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
