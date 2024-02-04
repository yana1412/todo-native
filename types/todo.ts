export interface TodoItem {
    id: number;
    name: string;
    checked: boolean;
    description: string;
    date: string;
}


export interface TodoItemProps {
    el: TodoItem,
    deleteItem: (id: number) => void,
    markItemAsChecked: (id: number, checked: boolean) => void,
}


export interface AddItemProps {
    addNewItem: (name: string, description: string, date: string) => void,
}

export interface formValues {
    name: string;
    description: string;
    date: string;
}