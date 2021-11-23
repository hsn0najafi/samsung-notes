import { useContext } from "react";

import Context from "../../context/Context";

const PopUp = () => {
    const c = useContext(Context);

    return (
        <div>
            {c.showCatPopUp ? (
                <div
                    className="popUpTop"
                    onClick={c.handleSetShowCatPopUp}
                ></div>
            ) : null}

            <div className="popUp-catergoriSelect  animate__animated animate__slideInUp animate__faster">
                {c.cats.map((cat) => (
                    <div key={cat.id}>
                        <p>{cat.name}</p>
                        <p>{cat.count}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopUp;
