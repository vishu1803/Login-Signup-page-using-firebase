

---

## 🔐 Login & Signup Page using Firebase

A simple **Login & Signup web application** built with **HTML, CSS, and JavaScript** using **Firebase Authentication** for user management.

This project implements basic user authentication allowing users to:

✨ Create a new account (Sign Up)
🔒 Log in with existing credentials
🔓 Log out securely

It uses **Firebase Authentication**, which provides backend services and secure user authentication without building your own backend server. ([Firebase][1])

### 🧩 Features

✔️ Responsive UI for authentication pages
✔️ Firebase **Email & Password** authentication
✔️ User creation and session login
✔️ Simple, clear front-end code (HTML/CSS/JS)

### 📁 Tech Stack

* **Firebase Authentication** — Backend user auth service
* **HTML, CSS, JavaScript** — Frontend UI and logic
* **Firebase SDK** — Connects Firebase services to the app ([Firebase][1])

### 🚀 How It Works

1. **Firebase Project Setup:**

   * Create a project in Firebase Console
   * Enable **Email/Password** under Authentication settings ([Firebase][1])

2. **Add Firebase Configuration:**

   * Use the config snippet from Firebase Console in your app’s JavaScript.

3. **Authentication Logic:**

   * Use `createUserWithEmailAndPassword()` for signup
   * Use `signInWithEmailAndPassword()` for login
   * Firebase manages user session state automatically ([Firebase][1])

### 🏁 Getting Started

To run this project locally:

1. Clone the repo

   ```bash
   git clone https://github.com/vishu1803/Login-Signup-page-using-firebase
   ```
2. Open the folder in your code editor
3. Add your Firebase config in the JavaScript file
4. Open `index.html` in a browser

---

