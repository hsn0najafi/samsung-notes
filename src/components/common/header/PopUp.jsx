import { useContext } from "react";

import Context from "../../context/Context";

const PopUp = () => {
  const c = useContext(Context);

  return (
    <div>
      {c.showCategoriPopUp ? (
        <div className="popUpTop" onClick={c.handleSetShowCategoriPopUp}></div>
      ) : null}

      <div className="popUp-catergoriSelect flex-center-col animate__animated animate__slideInUp animate__faster">
        {c.categories.map((categori) => (
          <div key={categori.id}>
            <p>{categori.name}</p>
            <p>{categori.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopUp;
