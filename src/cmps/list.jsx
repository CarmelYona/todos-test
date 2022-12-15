import { Preview } from "./preview"


export const List = (props) => {
    const { items, setItem, loadFunc, type } = props
    return <section className="users-list flex column">
        <h1>List:</h1>
        {items.map(item => <Preview loadFunc={loadFunc} setItem={setItem} item={item} key={item.id} type={type} />)}
    </section>
}