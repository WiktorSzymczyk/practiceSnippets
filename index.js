// 1
const alertButton = document.getElementById('alertButton')
alertButton.addEventListener('click', alertAll)

function alertAll(){
    alert("What's wrong?")
}

// 2
const nameH1 = document.getElementById('name')
nameH1.addEventListener('click', populateText)

function populateText(){
    nameH1.innerHTML = 'MyName'
}

// 3

function addElement() {
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode("Hi there and greetings!");
  newDiv.appendChild(newContent);

  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

