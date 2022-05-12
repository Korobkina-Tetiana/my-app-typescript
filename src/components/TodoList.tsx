import { TodoItem } from './TodoItem'

import { ITodo } from '../types/data'
import { keyboard } from '@testing-library/user-event/dist/keyboard';

interface ITodoListProps {
    items: ITodo[];
}

export const TodoList: React.FC<ITodoListProps> = (props) => {
    return <div>
        {
            props.items.map(todo => <TodoItem key={todo.id} {...todo}/>)
        }
    </div>
}
