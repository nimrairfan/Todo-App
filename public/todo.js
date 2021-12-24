const firebaseConfig = {
  apiKey: "AIzaSyDCtt8wWzsTK9us5pQ5e2eJUKJate0QcF8",
  authDomain: "todo-list-c9cda.firebaseapp.com",
  databaseURL: "https://todo-list-c9cda-default-rtdb.firebaseio.com",
  projectId: "todo-list-c9cda",
  storageBucket: "todo-list-c9cda.appspot.com",
  messagingSenderId: "582926955389",
  appId: "1:582926955389:web:8164632b86cbd5ed0f1214"
};


const app = firebase.initializeApp(firebaseConfig);
console.log(app.database)