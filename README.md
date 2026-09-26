# 📝 Todo App with LocalStorage

A modern and responsive **Todo App** built with **HTML, CSS, and Vanilla JavaScript**.

This project started as a basic Todo application and was enhanced with **Login/Register functionality and LocalStorage**, allowing users to create an account and keep their Todo tasks saved in the browser.

## 🚀 Live Demo

👉 https://sarfraz94.github.io/TODO-with-local-storage-/

## 📂 Repository

👉 https://github.com/Sarfraz94/TODO-with-local-storage-

---

## ✨ Features

### 🔐 User Authentication

* Create a new account
* Login with email and password
* Login validation
* Logout functionality
* Logged-in user information
* User accounts saved in LocalStorage

### 📝 Todo Management

* Add new tasks
* Edit existing tasks
* Delete individual tasks
* Delete all tasks
* Search tasks
* Task counter
* Empty-state message
* Add task using the `Enter` key
* Update task using the `Enter` key

### 💾 LocalStorage

The application uses the browser's **LocalStorage** to save user and Todo data.

User accounts are stored using:

```javascript
users
```

The currently logged-in user is stored using:

```javascript
loggedInUser
```

Each user's Todo list is stored separately using their email:

```javascript
todos_user@email.com
```

This allows different users to have their own separate Todo lists.

---

# 🔄 Application Flow

```text
Register
   ↓
User data saved in LocalStorage
   ↓
Login
   ↓
User verified
   ↓
loggedInUser saved
   ↓
Todo App
   ↓
Add / Edit / Delete / Search
   ↓
Todos saved in LocalStorage
   ↓
Logout
   ↓
Back to Login
```

---

# 💾 How LocalStorage Works

### 1. Register User

When a user creates an account, the user information is stored in LocalStorage.

```javascript
var users = JSON.parse(
    localStorage.getItem("users")
) || [];
```

A new user is added:

```javascript
users.push(newUser);
```

Then saved:

```javascript
localStorage.setItem(
    "users",
    JSON.stringify(users)
);
```

---

### 2. Login User

When the user logs in, JavaScript checks the saved users.

If the email and password match, the user is saved as the currently logged-in user:

```javascript
localStorage.setItem(
    "loggedInUser",
    JSON.stringify(foundUser)
);
```

---

### 3. User-Specific Todo Storage

Each logged-in user gets a separate Todo storage key:

```javascript
var todoKey =
    "todos_" + loggedInUser.email;
```

For example:

```text
todos_sarfraz@gmail.com
```

This prevents different users from sharing the same Todo list.

---

### 4. Add Todo

A new Todo is created as an object:

```javascript
var newTodo = {

    id: Date.now(),

    text: input.value

};
```

The Todo is added to the array:

```javascript
todos.push(newTodo);
```

Then saved to LocalStorage:

```javascript
localStorage.setItem(
    todoKey,
    JSON.stringify(todos)
);
```

---

### 5. Edit Todo

The selected Todo can be edited from the input field.

After updating the text, the Todo array is saved again to LocalStorage.

---

### 6. Delete Todo

A Todo can be removed using the `filter()` method.

```javascript
todos = todos.filter(function (todo) {

    return todo.id != id;

});
```

The updated array is then saved again.

---

### 7. Delete All Todos

All tasks for the currently logged-in user can be removed:

```javascript
localStorage.removeItem(todoKey);
```

---

### 8. Logout

When the user logs out, the current login information is removed:

```javascript
localStorage.removeItem(
    "loggedInUser"
);
```

The user is then redirected to the login page.

---

# 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript**
* **DOM Manipulation**
* **JavaScript Events**
* **LocalStorage**
* **JSON**
* **Responsive Web Design**

---

# 🧠 JavaScript Concepts Practiced

This project helped me practice several important JavaScript concepts:

* Variables
* Functions
* Arrays
* Objects
* `push()`
* `find()`
* `filter()`
* `includes()`
* `JSON.stringify()`
* `JSON.parse()`
* DOM Selection
* DOM Manipulation
* Event Listeners
* Form Events
* Keyboard Events
* Template Literals
* Conditional Statements
* Loops
* LocalStorage
* Login/Register Logic
* CRUD Operations

---

# 📁 Project Structure

```text
TODO-with-local-storage-/
│
├── index.html
├── style.css
├── app.js
│
├── login.html
├── login.css
├── login.js
│
├── register.html
└── register.js
```

---

# 📱 Responsive Design

The Todo App is responsive and designed to work across different screen sizes.

### Supported Devices

* 💻 Desktop
* 📱 Mobile
* 📟 Tablet

The layout automatically adjusts for smaller screens using CSS media queries.

---

# 🎯 CRUD Operations

The Todo application demonstrates the basic **CRUD** concept:

| Operation | Feature       |
| --------- | ------------- |
| Create    | Add Todo      |
| Read      | Display Todos |
| Update    | Edit Todo     |
| Delete    | Delete Todo   |

---

# 🔍 Search

Users can search through their Todo tasks using the search field.

JavaScript checks the task text using:

```javascript
taskText.includes(searchText)
```

Matching tasks remain visible while non-matching tasks are hidden.

---

# 🔑 Login Protection

The Todo page checks whether a user is logged in.

If there is no logged-in user:

```javascript
if (!loggedInUser) {

    window.location.href = "login.html";

}
```

The user is redirected to the login page.

---

# 🔒 Important Security Note

This project uses **LocalStorage authentication for learning purposes**.

Passwords are stored in the browser and are **not encrypted**.

Therefore, this authentication system should **not be used for a real production application**.

A production application should use a secure backend and proper authentication system such as Firebase Authentication, Supabase Auth, or a custom backend authentication system.

---

# 🎓 Learning Purpose

This project was built as part of my **JavaScript and DOM learning journey**.

The main goal was to understand how a Todo application works together with:

```text
DOM
+
Events
+
Arrays
+
Objects
+
CRUD
+
LocalStorage
+
Login/Register
```

Instead of only building a Todo UI, this project helped me understand how browser storage can be used to persist application data.

---

# 🚀 Future Improvements

Possible future improvements include:

* Task completion checkbox
* Completed task filtering
* Dark mode
* Better password validation
* Password visibility toggle
* User profile
* Task categories
* Task priority
* Due dates
* Backend authentication
* Database integration
* Firebase/Supabase authentication
* Cloud Todo synchronization

---

# 👨‍💻 Author

## Sarfraz Ali

**Computer Science Graduate | Web Development Learner**

GitHub:
https://github.com/Sarfraz94

---

## ⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

Thanks for checking out the project! 🚀
