import { useContext } from 'react'

import Context from '../../context/Context'
import PopUp from '../header/PopUp'

const Editor = () => {
    const c = useContext(Context)
    return (
        <div className="editor-container animate__animated animate__slideInRight animate__faster flex-center-col">
            <div className="editor-main">
                <nav className="editor-nav">
                    <div className="currentCatName flex-center-row">
                        <p style={{ width: '100px', overflow: 'hidden' }}>{c.currentCategori}</p>
                        <i className="catNameButton fa fa-angle-down flex-center-row" onClick={c.handleSetShowCategoriPopUp}></i>
                    </div>
                    {c.showCategoriPopUp ? <PopUp /> : null}
                </nav>
                <div className="new-btn">
                    <button className="new-btn-del flex-center-row" onClick={c.handleSetShowEditorContainer}>
                        <i className="fa fa-times"></i>
                    </button>
                    <button
                        className="new-btn-add flex-center-row"
                        onClick={c.handleNewTodo}
                        // onClick={() =>
                        //   c.todosEditMode ? c.handleEditTodos() : c.handleNewTodo()
                        // }
                    >
                        <i className="fa fa-check"></i>
                    </button>
                </div>
                <div className="editor-todo-title">
                    <input value={c.subject} type="text" onChange={(e) => c.setSubject(e.target.value)} placeholder=" موضوع یادداشت " />
                </div>
                <div className="editor-todo-text">
                    <textarea value={c.todo} onChange={(e) => c.setTodo(e.target.value)} placeholder="متن یادداشت" />
                </div>
            </div>
        </div>
    )
}

export default Editor
