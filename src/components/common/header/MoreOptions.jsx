import { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'

import Context from '../../context/Context'

const MoreOptions = () => {
    const c = useContext(Context)

    return (
        <Fragment>
            <div className="more-options animate__animated animate__fadeIn animate__faster">
                <div onClick={c.handleToggleTodosEditMode} className="edit-todos">
                    Edit
                </div>
                <Link to="/about">
                    <span onClick={c.handleSetShowMoreOptions}>About</span>
                </Link>
            </div>
            <div className="close-categoriSelect" onClick={c.handleSetShowMoreOptions}></div>
        </Fragment>
    )
}

export default MoreOptions
