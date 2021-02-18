let myPointlist = document.getElementsByTagName("LI");


let list = document.querySelector('ul');
list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
}, false);

for (let i = 0; i < myPointlist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myPointlist[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for ( let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
  }
}

// Создайте новый элемент списка при нажатии на кнопку "Добавить"
function newElement() {
    let li = document.createElement("li");
    let inputText = document.getElementById("myInput").value;
    let point = document.createTextNode(inputText);
    li.appendChild(point);

    
    if (inputText.trim()=="") {
        alert("You have to write something!");
    } else {
    document.getElementById("myList").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
        }
    }
}