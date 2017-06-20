/**
* Put your JavaScript here
*/

console.log( 'Open the dev console to see me. :-)' );

let state = {
  todos: [
    { id:0, title: 'First todo', complete: false },
    { id:1, title: 'Second todo', complete: true },
    { id:2, title: 'Third todo', complete: false }
  ],
  hideCompletedItems:false
};



var render = () => {



	//setup
	var myContainer = document.getElementById("container");
	myContainer.innerHTML = "";

	if (state.hideCompletedItems === true) {
		document.getElementById("hideCompletedItemsCheckbox").checked = true;
	}
	if (state.hideCompletedItems === false) {
		document.getElementById("hideCompletedItemsCheckbox").checked = false;
	}

	// render todos
	state.todos.forEach(
		function(o){
			if ((state.hideCompletedItems === false) || (o.complete ===false)) {

				// create LI
				let item = document.createElement("li");
				item.onclick = toggleItemCompleteState;
				item.dataset.itemId = o.id;
				let newContent = document.createTextNode(o.title);
				item.id = ("item-" + o.id);
				item.appendChild(newContent);

				// create checkbox
				let check = document.createElement("input");
				check.type = "checkbox";
				check.name = "check-" + o.id;
				check.id = "check-" + o.id;
				check.dataset.itemId = o.id;
				check.checked = o.complete;
				//check.onclick = toggleItemCompleteState;
				item.appendChild(check); 

				myContainer.appendChild(item);

			}
		}
	);
}


var testo = () => {console.log("test!");}

var toggleItemCompleteState = mouseEvent => {
	var daRecord = state.todos.filter(function( obj ) {
	  return obj.id == mouseEvent.target.dataset.itemId;
	});
	console.log(mouseEvent);
	daRecord[0].complete = ! (daRecord[0].complete);
	render();
}
 
export const toggleHideCompleted = () => {
	state.hideCompletedItems = !(state.hideCompletedItems);
	render();
	//return false;
}

// assign events
document.getElementById("hideCompletedItemsCheckbox").onclick = toggleHideCompleted;



render();