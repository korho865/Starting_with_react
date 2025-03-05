export default function TodoList({ todos }){
    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map((task, index) => (
                    <li key={index}>{task}</li>
                )
            )}
            </ul>

        </div>
    );
}