document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todoList');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const newTaskInput = document.getElementById('newTaskInput');

    // Function to create a new task item
    function createTask(taskText) {
        const newTodo = document.createElement('div');
        newTodo.classList.add('todo');
        newTodo.innerHTML = `
            <input type="text" class="todo-value" value="${taskText}" readonly>
            <button class="complete-btn">Complete</button>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;
        todoList.appendChild(newTodo);

        // Clear input field after adding task
        newTaskInput.value = '';
    }

    // Event listener for adding new task
    addTaskBtn.addEventListener('click', function() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            createTask(taskText);
        } else {
            alert('Please enter a task!');
        }
    });

    // Event delegation for marking tasks as completed
    todoList.addEventListener('click', function(event) {
        if (event.target.classList.contains('complete-btn')) {
            const todoItem = event.target.parentElement;
            todoItem.classList.toggle('completed');
        }
    });

    // Event delegation for editing existing tasks
    todoList.addEventListener('click', function(event) {
        if (event.target.classList.contains('edit-btn')) {
            const todoItem = event.target.parentElement;
            const todoValueInput = todoItem.querySelector('.todo-value');
            todoValueInput.removeAttribute('readonly');
            todoValueInput.focus();
        }
    });

    // Handle blur event to disable input after editing
    todoList.addEventListener('blur', function(event) {
        if (event.target.classList.contains('todo-value')) {
            event.target.setAttribute('readonly', true);
        }
    }, true); // Use capture phase for blur event

    // Event delegation for deleting tasks
    todoList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            const todoItem = event.target.parentElement;
            todoItem.remove();
        }
    });
});
