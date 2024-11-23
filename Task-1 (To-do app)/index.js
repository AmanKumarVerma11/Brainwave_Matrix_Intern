document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', addTodo);
    input.addEventListener('keypress', (event) => {
        if(event.key === 'Enter') {
            addTodo();
        }
    });

    function addTodo() {
        const todoText = input.value.trim();
        if(todoText === '') return;

        const li = document.createElement('li');
        li.textContent = todoText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.appendChild(removeBtn);
        todoList.appendChild(li);
        input.value = '';
    }
});