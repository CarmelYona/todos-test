import { useState } from "react"

export const Modal = (props) => {
    const { item, setItem, updateFunc } = props
    const [user, setUser] = useState(JSON.parse(JSON.stringify(item)))
    const [isEdit, setIsEdit] = useState(false)

    const handleChange = ({ target }) => {
        let field = target.id
        const val = target.textContent
        if (field === 'city' || field === 'street' || field === 'suite') {
            setUser({ ...user, address: { ...user.address, [field]: val } })
        } else if (field === 'company name' || field === 'bs' || field === 'catchPhrase') {
            field = field === 'company name' ? 'name' : field
            setUser({ ...user, company: { ...user.company, [field]: val } })
        } else {
            setUser({ ...user, [field]: val })
        }
    }

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
                        <h2>Address:</h2>
                        <h4 id='city' onInput={handleChange} contentEditable={isEdit} suppressContentEditableWarning={isEdit}>{item.address.city}</h4>
                        <h4 id='street' onInput={handleChange} contentEditable={isEdit} suppressContentEditableWarning={isEdit}>{item.address.street}</h4>
                        <h4 id='suite' onInput={handleChange} contentEditable={isEdit} suppressContentEditableWarning={isEdit}>{item.address.suite}</h4>
                    </div>

                    <div className="company flex column">
                        <h2>Company:</h2>
                        <h4 id='company name' onInput={handleChange} contentEditable={isEdit} suppressContentEditableWarning={isEdit}>{item.company.name}</h4>
                        <h4 id='bs' onInput={handleChange} contentEditable={isEdit} suppressContentEditableWarning={isEdit}>{item.company.bs}</h4>
                        <h4 id='catchPhrase' onInput={handleChange} contentEditable={isEdit} suppressContentEditableWarning={isEdit}>{item.company.catchPhrase}</h4>
                    </div>

                </div>
            </div>
        </div>
    )
}