const SearchBar = ({ handleShowSearchBar }) => {
    return (
        <div className="fixed-searchBar">
            <button
                className="searchBar-backButton fa fa-arrow-left"
                onClick={handleShowSearchBar}
            />
            <div className="searchBar-input">
                <i className="fa fa-search"></i>
                <input type="search" placeholder="   جستجو ...   " />
            </div>
        </div>
    );
};

export default SearchBar;
