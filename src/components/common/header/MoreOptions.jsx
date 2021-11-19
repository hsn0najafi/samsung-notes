import { Fragment } from "react";

const MoreOptions = ({ handleShowMoreOptions }) => {
    return (
        <Fragment>
            <div className="more-options animate__animated animate__fadeIn animate__faster">
                <div className="edit-todos">Edit</div>
                <div className="manage-catergories">Manage Categories</div>
            </div>
            <div
                className="close-categoriSelect"
                onClick={handleShowMoreOptions}
            ></div>
        </Fragment>
    );
};

export default MoreOptions;
