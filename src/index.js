function onReady () {

  var todoList = document.getElementById("todoList");
  const addTodoForm = document.getElementById( 'addTodoForm' );

  let todos = [
    { title: 'First Todo', complete: false },
    { title: 'Second todo', complete: true },
    { title: 'Third todo', complete: false }
  ];
   
    function createNewTodo ( title ) {
      todos.push({
        title,
        complete: false,
      });
     
      // The "state" changed, so re-draw the UI
      renderTheUi( todos );
    }
   
    function renderTheUi ( todos ) {
      // using the todos, draw out the UI
      todoList.innerHTML = "";

      todos.forEach(
        function(o) {
          let item = document.createElement("li");
          let newContent = document.createTextNode(o.title);
          item.appendChild(newContent);
          item.addEventListener( 'click', () => {
            item.classList.toggle( 'todo--complete' );
          });
          todoList.appendChild(item);
        }
      );
    }

    // Draw the UI the first time
    renderTheUi( todos );

    // add item
    addTodoForm.addEventListener( 'submit', event => {
      event.preventDefault();
      const daTitle = newTodoText.value;
      todos.push({title: daTitle, complete: false});
      renderTheUi ( todos );
    });
}

if ( document.readyState !== 'loading' ) {
  onReady();
} else {
  document.addEventListener( 'DOMContentLoaded', onReady );
}



/*function onReady () {
  const addTodoForm = document.getElementById( 'addTodoForm' );
  const todoList = document.getElementById( 'todoList' );
  const newTodoText = document.getElementById( 'newTodoText' );

  // <ul></ul>
  todoList.textContent = '';

  addTodoForm.addEventListener( 'submit', event => {
    event.preventDefault();
    const title = newTodoText.value;

    // add it to the list
    // create an li
    // <li>{title}</li>
    const newLi = document.createElement( 'li' );
    newLi.textContent = title; // vs newLi.innerHTML

    newLi.addEventListener( 'click', () => {
      newLi.classList.toggle( 'todo--complete' );
    });

    // put it in the ul
    todoList.appendChild( newLi );

    newTodoText.value = '';
  });
}

if ( document.readyState !== 'loading' ) {
  onReady();
} else {
  document.addEventListener( 'DOMContentLoaded', onReady );
}

*/