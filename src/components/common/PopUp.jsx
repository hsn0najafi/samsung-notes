const PopUp = ({ state }) => {
    return (
        <div>
            <div className="popUp-catergoriSelect  animate__animated animate__fadeIn">
                {state.cats.map((c) => (
                    <p>{c}</p>
                ))}
            </div>
        </div>
    );
};

export default PopUp;
