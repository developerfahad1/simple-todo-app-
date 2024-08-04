
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { db } from "./firebaseconfig.js";


const form = document.querySelector('#form');
const todo = document.querySelector('#todo');
const ul = document.querySelector('#ul');

const arr = [];

async function getData(){ 
const querySnapshot = await getDocs(collection(db, "todo"));
querySnapshot.forEach((doc) => {
  console.log(doc.data());
  arr.push(doc.data());
  renderTodo();
});

}

getData();


function renderTodo(){
    ul.innerHTML = "";
    arr.map((item) => {
        ul.innerHTML +=`
        <li>${item.todo}</li>`
    }) 
}

form.addEventListener("submit", async(event) => {
    event.preventDefault();
   
    arr.push({
        todo: todo.value,
    });
   
    renderTodo();
    
    try {
        const docRef = await addDoc(collection(db, "todo"), {
            todo: todo.value,
        });
        todo.value="";
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
});