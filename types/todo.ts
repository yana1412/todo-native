export interface TodoItem {
    id: number,
    name: string,
    checked: boolean ,
    description:string,
    date:number
}


export interface TodoItemProps {
    el: TodoItem,
    deleteItem: (id: number) => void,
    markItemAsChecked: (id: number, checked: boolean) => void,
}


export interface AddItemProps {
    addNewItem: (name,description: string, date:number) => void,
}