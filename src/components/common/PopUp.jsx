const PopUp = ({ state, handleShowPopUp }) => {
    return (
        <div>
            {state.showCatPopUp ? (
                <div className="popUpTop" onClick={handleShowPopUp}></div>
            ) : null}

            <div className="popUp-catergoriSelect  animate__animated animate__slideInUp animate__faster">
                {state.cats.map((c) => (
                    <p>{c}</p>
                ))}
            </div>
        </div>
    );
};

export default PopUp;
