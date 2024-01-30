export interface ITodoItem{
    id:number,
    name:string,
    checked:boolean ,
}


export interface ITodoItemProps{
    el:ITodoItem,
    deleteItem:(id:number) => void,
    setCheckedItem:(id:number, checked:boolean) => void,
}