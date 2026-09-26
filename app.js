var input = document.getElementById("input");
var display = document.getElementById("display");

var add = document.getElementById("add");
var edit = document.getElementById("edit");
var deleteAll = document.getElementById("deleteAll");

var search = document.getElementById("search");

var taskCount = document.getElementById("taskCount");
var emptyState = document.getElementById("emptyState");

var editTodo = null;


/* ================= LOGIN CHECK ================= */

var loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser")
);


if (!loggedInUser) {

    window.location.href = "login.html";

}


/* ================= USER NAME ================= */

var userName = document.getElementById("userName");

if (userName) {

    userName.innerText =
        loggedInUser.username;

}


/* ================= STORAGE KEY ================= */

var todoKey =
    "todos_" + loggedInUser.email;


/* ================= LOAD TODOS ================= */

loadTodos();


/* ================= ENTER KEY ================= */

input.addEventListener("keypress", function (e) {

    if (e.key == "Enter") {

        if (editTodo == null) {

            todo();

        }

        else {

            updateTodo();

        }

    }

});


/* ================= INPUT BORDER ================= */

input.addEventListener("input", function () {

    if (input.value != "") {

        input.style.border =
            "2px solid var(--border)";

    }

    else {

        input.style.border =
            "2px solid red";

    }

});


/* ================= ADD TODO ================= */

function todo() {

    input.value =
        input.value.trim();


    if (input.value == "") {

        input.style.border =
            "2px solid red";

        return;

    }


    var todos = getTodos();


    var newTodo = {

        id: Date.now(),

        text: input.value

    };


    todos.push(newTodo);


    saveTodos(todos);


    input.value = "";

    input.style.border =
        "2px solid var(--border)";


    displayTodos();

}


/* ================= GET TODOS ================= */

function getTodos() {

    return JSON.parse(
        localStorage.getItem(todoKey)
    ) || [];

}


/* ================= SAVE TODOS ================= */

function saveTodos(todos) {

    localStorage.setItem(
        todoKey,
        JSON.stringify(todos)
    );

}


/* ================= DISPLAY TODOS ================= */

function displayTodos() {

    var todos = getTodos();


    display.innerHTML = "";


    for (var i = 0; i < todos.length; i++) {

        display.innerHTML += `

            <li>

                <b>${todos[i].text}</b>

                <button onclick="editBtn(this)">
                    Edit
                </button>

                <button
                    onclick="DeleteBtn(this)"
                    data-id="${todos[i].id}"
                >
                    Delete
                </button>

            </li>

        `;

    }


    updateTaskCount();

}


/* ================= DELETE TODO ================= */

function DeleteBtn(event) {

    var id =
        Number(event.getAttribute("data-id"));


    var todos = getTodos();


    todos = todos.filter(function (todo) {

        return todo.id != id;

    });


    saveTodos(todos);


    displayTodos();

}


/* ================= EDIT TODO ================= */

function editBtn(event) {

    edit.style.display = "block";

    add.style.display = "none";


    input.value =
        event.parentNode
        .querySelector("b")
        .innerText;


    editTodo =
        event.parentNode;


    input.focus();

}


/* ================= UPDATE TODO ================= */

function updateTodo() {

    input.value =
        input.value.trim();


    if (input.value == "") {

        input.style.border =
            "2px solid red";

        return;

    }


    var oldText =
        editTodo
        .querySelector("b")
        .innerText;


    var todos = getTodos();


    for (var i = 0; i < todos.length; i++) {

        if (todos[i].text == oldText) {

            todos[i].text =
                input.value;

            break;

        }

    }


    saveTodos(todos);


    add.style.display = "block";

    edit.style.display = "none";


    input.value = "";

    input.style.border =
        "2px solid var(--border)";


    editTodo = null;


    displayTodos();

}


/* ================= DELETE ALL ================= */

deleteAll.addEventListener("click", function () {

    localStorage.removeItem(todoKey);

    displayTodos();

});


/* ================= SEARCH ================= */

search.addEventListener("input", function () {

    var listItems =
        display.querySelectorAll("li");


    for (
        var i = 0;
        i < listItems.length;
        i++
    ) {

        var taskText =
            listItems[i]
            .querySelector("b")
            .innerText
            .toLowerCase();


        var searchText =
            search.value.toLowerCase();


        if (
            taskText.includes(searchText)
        ) {

            listItems[i].style.display =
                "flex";

        }

        else {

            listItems[i].style.display =
                "none";

        }

    }

});


/* ================= TASK COUNT ================= */

function updateTaskCount() {

    var totalTasks =
        display.querySelectorAll("li").length;


    if (totalTasks == 1) {

        taskCount.innerText =
            "1 task";

    }

    else {

        taskCount.innerText =
            totalTasks + " tasks";

    }


    if (totalTasks == 0) {

        emptyState.style.display =
            "block";

    }

    else {

        emptyState.style.display =
            "none";

    }

}


/* ================= LOAD TODOS ================= */

function loadTodos() {

    displayTodos();

}


/* ================= LOGOUT ================= */

var logout =
    document.getElementById("logout");


if (logout) {

    logout.addEventListener("click", function () {

        localStorage.removeItem(
            "loggedInUser"
        );


        window.location.href =
            "login.html";

    });

}