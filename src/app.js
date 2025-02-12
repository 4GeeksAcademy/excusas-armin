import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  //write your code here
  console.log("Hello Rigo from the console!");
};


let generateExcuse = () => {
  let pronoun = ['A', 'The'];
  let subject = ['jogger', 'racoon', 'dog', 'driver', 'comedian', 'pincone'];
  let action = ['took my', 'threw my', 'yelled at my', 'stole my', 'bit my'];
  let possetion = ['homework', 'toe', 'car', 'shoe'];
  let where = ['on the street', 'in my house', 'in my driveway'];
  
  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionindex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );
};
