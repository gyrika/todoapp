const input = document.getElementById("input");
const list_container = document.getElementById("list_container");
function addTask() {
    if(input.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveData();
}

list_container.addEventListener("click", function(e) { 
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        let li = e.target.parentElement;
        li.remove();
    }
}, false);

function saveData() {
    localStorage.setItem("data", list_container.innerHTML);
}

function showTask() {
    list_container.innerHTML = localStorage.getItem("data");
}

showTask();