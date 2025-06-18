const list = document.getElementById("list");
const items = list.getElementsByTagName("li");

function addItem() {
  const li = document.createElement("li");
  li.textContent = `Элемент ${items.length + 1}`;
  list.appendChild(li);

  console.log(`Текущая длина: ${items.length}`);
}
