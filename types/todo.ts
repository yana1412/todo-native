export interface TodoItem {
    id: number,
    name: string,
    checked: boolean ,
}


export interface TodoItemProps {
    el: TodoItem,
    deleteItem: (id: number) => void,
    setCheckedItem: (id: number, checked: boolean) => void,
}


export interface InputComponentProps {
    addNewItem: (value: string) => void,
}