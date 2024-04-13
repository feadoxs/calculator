let formBtn = document.querySelector(".formBtn");
let delBtn = document.querySelector(".delete");
let calculator = document.querySelector(".calculator");
let info = document.querySelector(".info");
let console = document.querySelector(".console");
let h2 = document.querySelector(".h2");
let removeBtn = document.querySelector(".remove-img");
let image = document.createElement("img");
let imageBox = document.createElement("div");
let body = document.querySelector("body");
let result = document.querySelector(".btn");
let p = document.querySelector(".window");

image.src = "Calculator-image.svg";
imageBox.append(image);
imageBox.style.display = "none";
body.appendChild(imageBox);

imageBox.appendChild(image);
formBtn.onsubmit = (e) => {
  e.preventDefault();
};

delBtn.onclick = () => {
  calculator.style.display = "none";
  imageBox.style.display = "block";
  imageBox.style.display = "flex";
  imageBox.style.justifyContent = "center";
  imageBox.style.height = "580px";
  imageBox.style.alignItems = "center";
};

image.onclick = () => {
  calculator.style.display = "block";
  imageBox.style.display = "none";
};

formBtn["one"].onclick = () => {
  h2.innerHTML += formBtn["one"].value;
};
formBtn["two"].onclick = () => {
  h2.innerHTML += formBtn["two"].value;
};
formBtn["three"].onclick = () => {
  h2.innerHTML += formBtn["three"].value;
};
formBtn["four"].onclick = () => {
  h2.innerHTML += formBtn["four"].value;
};
formBtn["five"].onclick = () => {
  h2.innerHTML += formBtn["five"].value;
};
formBtn["six"].onclick = () => {
  h2.innerHTML += formBtn["six"].value;
};
formBtn["seven"].onclick = () => {
  h2.innerHTML += formBtn["seven"].value;
};
formBtn["eight"].onclick = () => {
  h2.innerHTML += formBtn["eight"].value;
};
formBtn["nine"].onclick = () => {
  h2.innerHTML += formBtn["nine"].value;
};
formBtn["zero"].onclick = () => {
  h2.innerHTML += formBtn["zero"].value;
};
formBtn["multik"].onclick = () => {
  h2.innerHTML += formBtn["multik"].value;
};
formBtn["plus"].onclick = () => {
  h2.innerHTML += formBtn["plus"].value;
};
formBtn["minus"].onclick = () => {
  h2.innerHTML += formBtn["minus"].value;
};
formBtn["delenie"].onclick = () => {
  h2.innerHTML += formBtn["delenie"].value;
};
formBtn["scope"].onclick = () => {
  h2.innerHTML += formBtn["scope"].value;
};

removeBtn.onclick = () => {
  h2.innerHTML = h2.innerHTML.slice(0, -1);
  info.innerHTML = info.innerHTML.slice(0, -1);
  p.innerHTML = p.innerHTML.slice(0, -1);
};

formBtn["equal"].onclick = () => {
  info.innerHTML = eval(h2.innerHTML);
  p.innerHTML = info.innerHTML;
};

formBtn["clear"].onclick = () => {
  p.innerHTML = "";
  h2.innerHTML = "";
  info.innerHTML = "";
  btn.innerHTML = "";
};
