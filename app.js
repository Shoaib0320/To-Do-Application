var getUl = document.querySelector("#myUL")

    // Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  // Create a delete button and append it to the new list item
  var deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  deleteBtn.className = "deletebtn";
  li.appendChild(deleteBtn);

  // Create an edit button and append it to the new list item
  var editBtn = document.createElement("button");
  editBtn.appendChild(document.createTextNode("Edit"));
  editBtn.className = "editbtn";
  li.appendChild(editBtn);

  // Add event listeners for the delete and edit buttons
  deleteBtn.addEventListener('click', function() {
    this.parentElement.remove();
  });

  editBtn.addEventListener('click', function() {
    var newText = prompt("Edit your to-do:", this.parentElement.firstChild.textContent);
    if (newText !== null) {
      this.parentElement.firstChild.textContent = newText;
    }
  });
}

function delall() {

    getUl.innerHTML = ''
    
}