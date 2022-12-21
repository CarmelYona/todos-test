

export const Preview = (props) => {
    const { item, setItem, loadFunc, type } = props
    return <section className="preview flex ">
        <div className="user-btn" onClick={() => loadFunc(item.id)} >{item.name || item.title}</div>
        {type === 'users' && <button className="btn" onClick={() => setItem(item)}>Read More..</button>}
    </section>
}