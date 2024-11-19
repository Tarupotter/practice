const div = document.querySelector("#div");


const button = document.createElement("button");
button.classList.add("button");
button.innerText = "Klicka här för ett popup fönster";
div.appendChild(button);

const modal = document.createElement("dialog");
modal.classList.add("modal");
div.appendChild(modal);

const modal_title = document.createElement("h3");
modal_title.classList.add("modal__title");
modal.appendChild(modal_title);
modal_title.innerText = "Book room \"Escape room\" (step 1)";

const modal_question = document.createElement("p");
modal_question.classList.add("modal__question");
modal.appendChild(modal_question);
modal_question.innerText = "What date would you like to come?";

const modal_date = document.createElement("label");
modal_date.classList.add("modal__date");
modal.appendChild(modal_date);
modal_date.innerText = "Date";

const input = document.createElement("input");
input.classList.add("input");
modal.appendChild(input);

const modal_search = document.createElement("button");
modal_search.classList.add("modal__search");
modal.appendChild(modal_search);
modal_search.innerText = "Search available times";

button.addEventListener("click", function(){
   modal.showModal(); 
   document.body.style.opacity = 0.3;
})
