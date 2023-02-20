import { Preview } from "./preview"


export const List = (props) => {
    const { items, setItem, loadFunc, type, state } = props
    return <section className="list flex column">

        <div className="list-header">
            <h1>List:</h1>
        </div>
        {items.map(item => <Preview loadFunc={loadFunc} setItem={setItem} item={item} key={item.id} type={type} state={state} />)}
    </section>
}