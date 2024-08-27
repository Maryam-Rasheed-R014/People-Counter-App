let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let total =0;
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    total = total+count;
 document.getElementById('total').innerText= total
    countEl.textContent = 0
    count = 0
}
function clearAll() {
      count=0
    countEl.textContent = 0
    saveEl.textContent = ""
   total=0
    document.getElementById('total').innerText= total;

}