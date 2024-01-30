export interface TodoItem {
    id: number,
    name: string,
    checked: boolean ,
}


export interface TodoItemProps {
    el: TodoItem,
    deleteItem: (id: number) => void,
    markItemAsChecked: (id: number, checked: boolean) => void,
}


export interface AddItemProps {
    addNewItem: (value: string) => void,
}