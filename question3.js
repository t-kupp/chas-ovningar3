// 3. Skapa en div med ett B. Så här: <div>B</div>
// Lägg det mellan A och C på html-sidan.

const C = document.querySelector("#C");
const myElement = document.querySelector("#my-element");

const B = document.createElement("div");
B.id = "B";
B.innerText = "B";

myElement.insertBefore(B, C);
