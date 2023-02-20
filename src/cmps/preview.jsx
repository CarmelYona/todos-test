

export const Preview = (props) => {
    const { item, setItem, loadFunc, type, state } = props

    return <section className={"preview flex " + (state?.userId === item.id ? " active" : "")}>
        <div className="user-btn" onClick={() => loadFunc(item.id)} >{item.name || item.title}</div>
        {type === 'users' && <button className="btn" onClick={() => setItem(item)}>Read More..</button>}
    </section>
}