import { useContext } from "react";

import Context from "../../context/Context";

const PopUp = () => {
  const c = useContext(Context);

  return (
    <div>
      {c.showCategoriPopUp ? (
        <div className="popUpTop" onClick={c.handleSetShowCategoriPopUp}></div>
      ) : null}

      <div
        className="popUp-catergoriSelect flex-center-col animate__animated animate__slideInUp animate__faster"
        style={c.showEditorContainer ? { width: "100%" } : null}
      >
        {c.categories.map((categori) => (
          <div
            onClick={() => c.handleSetDefaultCategori(categori.id)}
            className="categori"
            key={categori.id}
          >
            <p>{categori.name}</p>
            <div
              style={c.categoriEditMode ? null : { display: "none" }}
              className="categoriEditorTools flex-center-row"
            >
              <i className="fa fa-trash"></i>
              <i className="fa fa-pen"></i>
            </div>
            <p style={{ width: "3rem", alignItems: "center" }}>
              {categori.count}
            </p>
          </div>
        ))}
        <div
          className="categori"
          style={{ background: "red" }}
          onClick={c.handleToggleCategoriEditMode}
        >
          <p>Edit Catrgories</p>
          <p>- </p>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
