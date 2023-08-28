const newTodo = document.getElementsByClassName('new-todo');
const listBox = document.getElementsByClassName('list-box');

newTodo[0].addEventListener('click', (event) => {
  const newList = document.createElement("li");
  newList.className = "list";
  
  const newCheckbox = document.createElement("input");
  newCheckbox.setAttribute('type','checkbox');
  newCheckbox.className="list-checkbox";

  const newContent = document.createElement("div");
  newContent.textContent = "새로운 할 일";
  newContent.className="list-content";

  const modBtn = document.createElement("img");
  modBtn.className="list-modify";
  modBtn.src = "./icons/pencil.svg";
  const delBtn = document.createElement("img");
  delBtn.className="list-delete";
  delBtn.src = "./icons/trash.svg";

  listBox[0].appendChild(newList);
  newList.appendChild(newCheckbox);
  newList.appendChild(newContent);
  newList.appendChild(modBtn);
  newList.appendChild(delBtn);

  delBtn.addEventListener('click', (event) => {
    event.currentTarget.parentNode.parentNode.removeChild(event.currentTarget.parentNode);
  })

  modBtn.addEventListener('click', (event) => {
    const tempTextBox = document.createElement("input");

    tempTextBox.setAttribute('type', 'text');
    newContent.appendChild(tempTextBox);
  })
})