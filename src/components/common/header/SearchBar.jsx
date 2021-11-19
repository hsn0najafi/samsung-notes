const SearchBar = ({ handleShowSearchBar }) => {
    return (
        <div className="fixed-searchBar">
            <button
                className="backButton fa fa-arrow-left"
                onClick={handleShowSearchBar}
            />
            <div>
                <i className="fa fa-search"></i>
                <input type="search" className="search" />
            </div>
        </div>
    );
};

export default SearchBar;
