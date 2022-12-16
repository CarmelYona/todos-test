import { useState } from "react"

export const Modal = (props) => {
    const { item, setItem, updateFunc } = props
    const [user, setUser] = useState(JSON.parse(JSON.stringify(item)))
    const [isEdit, setIsEdit] = useState(false)

    const handleChange = ({ target }) => {
        const field = target.name
        const val = target.value
        setUser({ ...user, [field]: val })
    }

    if (!isEdit) {
        return <div className="modal flex column">
            <button onClick={() => setItem(null)}>X</button>
            <button onClick={() => setIsEdit(true)}>Edit User</button>
            <div className="header flex column">
                <h1>{item.name}</h1>
                <h2>{item.username}</h2>
                <h2>{item.website}</h2>
                <h4>{item.email}</h4>
                <h4>{item.phone}</h4>
            </div>
            <div className="body flex column">
                <div>
                    <h3 className="address flex column">Address:</h3>
                    <h4>{item.address.city}</h4>
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
    } else {
        return <div className="modal flex column">
            <button onClick={() => setItem(null)}>X</button>
            <button onClick={() => setIsEdit(false)}>Close Editor</button>
            <button onClick={() => updateFunc(user)}>Save</button>
            <div className="header flex column">
                <input onInput={handleChange} name='name' value={user.name} type='text' />
                <h2>{item.username}</h2>
                <h2>{item.website}</h2>
                <h4>{item.email}</h4>
                <h4>{item.phone}</h4>
            </div>
            <div className="body flex column">
                <div>
                    <h3 className="address flex column">Address:</h3>
                    <h4>{item.address.city}</h4>
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
    }
}