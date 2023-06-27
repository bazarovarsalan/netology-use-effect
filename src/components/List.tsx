import { ListProps } from "../types/types"


const List = ({list, active, handler}: ListProps) => {
  const listItems = list;
  

  return (
    <div className="List">
      {listItems.map((item) => {
        return <div className={item.id === active ? "item-active" : "item"} key={item.id} id={item.id.toString()} onClick={handler}>{item.name}</div>
      })}
    </div>
  )
}


export default List
