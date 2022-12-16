import { useState } from "react"

export const Modal = (props) => {
    const { item, setItem, updateFunc } = props
    const [user, setUser] = useState(JSON.parse(JSON.stringify(item)))
    const [isEdit, setIsEdit] = useState(false)

    const handleChange = ({ target }) => {
        const field = target.id
        const field2 = field.includes('.') ? field.split('.')[1] : null
        const val = target.textContent
        if (field2) setUser({ ...user, [field]: { ...[field], [field2]: val } })
        setUser({ ...user, [field]: val })
    }

    console.log(user)
    return (
        <div className="modal flex column">
            <button onClick={() => setItem(null)}>X</button>
            {<button onClick={() => setIsEdit(!isEdit)}>{isEdit ? 'Close Editor' : 'Edit User'}</button>}
            {isEdit && <button onClick={() => updateFunc(user)}>Save</button>}
            <div className="header flex column">

                <h1 id='name' onInput={handleChange} contentEditable={isEdit} suppressContentEditableWarning={isEdit}>{item.name}</h1>
                <h2 id='username' onInput={handleChange} contentEditable={isEdit} suppressContentEditableWarning={isEdit}>{item.username}</h2>
                <h2 id='website' onInput={handleChange} contentEditable={isEdit} suppressContentEditableWarning={isEdit}>{item.website}</h2>
                <h4 id='email' onInput={handleChange} contentEditable={isEdit} suppressContentEditableWarning={isEdit}>{item.email}</h4>
                <h4 id='phone' onInput={handleChange} contentEditable={isEdit} suppressContentEditableWarning={isEdit}>{item.phone}</h4>

                <div className="body flex column">

                    <div className="address flex column">
                        <h3>Address:</h3>
                        <h4 id='address.city' name='city' onInput={handleChange} contentEditable={isEdit} suppressContentEditableWarning={isEdit}>{item.address.city}</h4>
                        <h4>{item.address.street}</h4>
                        <h4>{item.address.suite}</h4>
                    </div>

                    <div className="company flex column">
                        <h3>Company:</h3>
                        <h4>{item.company.name}</h4>
                        <h4>{item.company.bs}</h4>
                        <h4>{item.company.catchPhrase}</h4>
                    </div>

                </div>
            </div>
        </div>
    )

    // if (!isEdit) {
    //    
    //         <div className="body flex column">
    //             <div>
    //                 <h3 className="address flex column">Address:</h3>
    //                 <h4>{item.address.city}</h4>
    //                 <h4>{item.address.street}</h4>
    //                 <h4>{item.address.suite}</h4>
    //             </div>

    //             <div className="company flex column">
    //                 <h3>Company:</h3>
    //                 <h4>{item.company.name}</h4>
    //                 <h4>{item.company.bs}</h4>
    //                 <h4>{item.company.catchPhrase}</h4>
    //             </div>
    //         </div>
    //     </div>
    // } else {
    //     return <div className="modal flex column">
    //         <button onClick={() => setItem(null)}>X</button>
    //         <button onClick={() => setIsEdit(false)}>Close Editor</button>
    //         <button onClick={() => updateFunc(user)}>Save</button>
    //         <div className="header flex column">
    //             <input onInput={handleChange} name='name' value={user.name} type='text' />
    //             <h2>{item.username}</h2>
    //             <h2>{item.website}</h2>
    //             <h4>{item.email}</h4>
    //             <h4>{item.phone}</h4>
    //         </div>
    //         <div className="body flex column">
    //             <div>
    //                 <h3 className="address flex column">Address:</h3>
    //                 <h4>{item.address.city}</h4>
    //                 <h4>{item.address.street}</h4>
    //                 <h4>{item.address.suite}</h4>
    //             </div>

    //             <div className="company flex column">
    //                 <h3>Company:</h3>
    //                 <h4>{item.company.name}</h4>
    //                 <h4>{item.company.bs}</h4>
    //                 <h4>{item.company.catchPhrase}</h4>
    //             </div>
    //         </div>
    //     </div>
    // }
}