// 2. (3p) Skapa ett inputfält och en knapp på html-sidan. När man klickar på
// knappen ska det man skrev i input-fältet synas nedanför input-fältet i en div.

const input = document.createElement("input");
input.type = "text";
document.body.appendChild(input);

const btn = document.createElement("button");
btn.innerText = "Click";
document.body.appendChild(btn);

const output = document.createElement("div");
document.body.appendChild(output);

btn.onclick = () => {
  output.innerText = input.value;
};
