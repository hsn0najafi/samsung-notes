import { useContext } from "react";

import Context from "../../context/Context";

const PopUp = () => {
  const c = useContext(Context);

  return (
    <div>
      {c.showCategoriPopUp ? (
        <div
          className="popUpTop flex-center-col"
          onClick={c.handleSetShowCategoriPopUp}
        >
          <input
            placeholder="اسم جدید رو وارد کن ..."
            className="animate__animated animate__fadeIn"
            value={c.newCategoriTitle}
            style={
              c.categoriEditMode && c.showCategoriNameInput
                ? null
                : { display: "none" }
            }
            onChange={(e) => c.setNewCategoriTitle(e.target.value)}
            type="text"
          ></input>
        </div>
      ) : null}

      <div
        className="popUp-catergoriSelect flex-center-col animate__animated animate__slideInUp animate__faster"
        style={c.showEditorContainer ? { width: "100%" } : null}
      >
        {c.categories.map((categori) => (
          <div
            onClick={() => c.handleSetDefaultCategori(categori.id)}
            className="categori animate__animated animate__fadeIn "
            key={categori.id}
          >
            <p>{categori.name}</p>
            <div
              style={c.categoriEditMode ? null : { display: "none" }}
              className="categoriEditorTools flex-center-row"
            >
              <i
                className="fa fa-trash"
                onClick={() => c.handleDeleteCategori(categori.id)}
              ></i>
              <i
                onClick={() => c.handleCategoriNameChange(categori.id)}
                className={
                  c.showCategoriNameInput ? "fa fa-check" : "fa fa-pen"
                }
              ></i>
            </div>
            <p style={{ width: "3rem", alignItems: "center" }}>
              {categori.count}
            </p>
          </div>
        ))}
        <div
          className="categoriEditor categori flex-center-row"
          style={{ background: "red", position: "fixed", bottom: "0" }}
          onClick={c.handleToggleCategoriEditMode}
        >
          <p>Edit Catrgories</p>
          <p
            style={{ width: "5rem", alignItems: "center" }}
            className="addNewCategoriButton flex-center-col"
          >
            <i onClick={c.handleAddNewCategori} className="fa fa-plus"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
