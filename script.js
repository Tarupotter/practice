const div = document.querySelector("#div");


const button = document.createElement("button");
button.classList.add("button_style");
button.innerText = "Klicka här för ett popup fönster";
div.appendChild(button);

const dialog = document.createElement("dialog");
dialog.classList.add("dialog_style");
div.appendChild(dialog);

const booking_title = document.createElement("h3");
booking_title.classList.add("title_style");
dialog.appendChild(booking_title);
booking_title.innerText = "Book room \"Escape room\" (step 1)";

const booking_question = document.createElement("p");
booking_question.classList.add("question_style");
dialog.appendChild(booking_question);
booking_question.innerText = "What date would you like to come?";

const booking_date = document.createElement("label");
booking_date.classList.add("date_style");
dialog.appendChild(booking_date);
booking_date.innerText = "Date";

const input = document.createElement("input");
input.classList.add("input_style");
dialog.appendChild(input);

const booking_search = document.createElement("button");
booking_search.classList.add("search_style");
dialog.appendChild(booking_search);
booking_search.innerText = "Search available times";

button.addEventListener("click", function(){
   dialog.showModal(); 
   document.body.style.opacity = 0.3;
})
