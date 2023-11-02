const newTodo = document.getElementsByClassName('new-todo');
const listBox = document.getElementsByClassName('list-box');

newTodo[0].addEventListener('click', (event) => {
  const newList = document.createElement("li");
  newList.className = "list";
  let dateKey = new Date().getTime();
  
  let flag = 0;
  
  const newCheckbox = document.createElement("input");
  newCheckbox.setAttribute('type','checkbox');
  newCheckbox.className="list-checkbox";

  const newContent = document.createElement("div");
  newContent.textContent = "새로운 할 일";
  newContent.className="list-content";
  localStorage.setItem(dateKey, [newContent.textContent, newCheckbox.checked]);

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
    localStorage.removeItem(dateKey);
  })
  if (flag == 0) {
    modBtn.addEventListener('click', (event) => {
      event.preventDefault();
      flag = 1;
      const tempTextBox = document.createElement("form");
      const tempTextInput = document.createElement("input");
      tempTextBox.appendChild(tempTextInput);
      newContent.appendChild(tempTextBox);

      tempTextInput.setAttribute('type', 'text');
      tempTextInput.placeholder="할 일을 입력해주세요.";
      tempTextInput.required;

      tempTextBox.addEventListener ('submit', (event) => {
        event.preventDefault();
        flag = 0;
        const whattodo = tempTextInput.value;
        tempTextInput.value = "";
        newContent.innerText = whattodo;
        localStorage.setItem(dateKey, [whattodo, newCheckbox.checked]);
      })
    })
  }
})

function loadStorage() {
  const keys = Object.keys(window.localStorage);
  for(const key of keys) {
    const newList = document.createElement("li");
    newList.className = "list";
    let flag = 0;

    const newCheckbox = document.createElement("input");
    newCheckbox.setAttribute('type','checkbox');
    newCheckbox.className="list-checkbox";

    const newContent = document.createElement("div");
    newContent.className="list-content";
    newContent.textContent = localStorage.getItem(key).split(',')[0];
    newCheckbox.checked = JSON.parse(localStorage.getItem(key).split(',')[1]);

    console.log(newCheckbox.checked);

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
      localStorage.removeItem(key);
    })
    if (flag == 0) {
      modBtn.addEventListener('click', (event) => {
        flag = 1;
        const tempTextBox = document.createElement("form");
        const tempTextInput = document.createElement("input");
        tempTextBox.appendChild(tempTextInput);
        newContent.appendChild(tempTextBox);
  
        tempTextInput.setAttribute('type', 'text');
        tempTextInput.placeholder="할 일을 입력해주세요.";
        tempTextInput.required;
  
        tempTextBox.addEventListener ('submit', (event) => {
          event.preventDefault();
          flag = 0;
          const whattodo = tempTextInput.value;
          tempTextInput.value = "";
          newContent.innerText = whattodo;
          localStorage.setItem(key, [whattodo, newCheckbox.checked]);
        })
      })
    }
  }
}

loadStorage();