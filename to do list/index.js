let but=document.getElementsByTagName("button")
console.log(but)
but[0].addEventListener("click",()=>{
    console.log("clicked")
    let text=document.querySelector(".write")
  let texts=  text.value
console.log(texts);
let s=document.querySelector(".store")

 // Create a new div element to hold the text and delete button
 let newDiv = document.createElement("div");
 newDiv.style.display = "flex"; // Optional: Flexbox to align the text and button
 newDiv.style.justifyContent = "space-between";
 newDiv.style.marginBottom = "2px";

 // Create a span or div for the text content
 let textSpan = document.createElement("span");
 textSpan.innerHTML = texts;

 // Create a delete button
 let deleteButton = document.createElement("button");
deleteButton.innerHTML = "Delete";
 deleteButton.style.marginLeft = "10px";

 // Add an event listener to the delete button to remove the parent div
 deleteButton.addEventListener("click", () => {
     s.removeChild(newDiv);
 });

 // Append the text span and delete button to the new div
 newDiv.appendChild(textSpan);
 newDiv.appendChild(deleteButton);


s.appendChild(newDiv); // Append the new div to the .store element

text.value=""
})