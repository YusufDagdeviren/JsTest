let ulDom = document.querySelector("#list")

ulDom.addEventListener("click",removeItem)
function newElement() {
    let task = document.querySelector("#task")
    let taskValue = task.value
    if (taskValue.length === 0 || !taskValue.trim()) {
        console.log("boş")
    } else {
        localStorage.setItem(taskValue, taskValue)
        let li = document.createElement('li')
        li.innerHTML = `${localStorage.getItem(taskValue)}<span class="badge badge-primary badge-pill">
        <i class="fa-solid fa-trash-can">Sil</i>
      </span>`
        li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")
        ulDom.append(li)
    }
}
function removeItem(event){
    if(event.target.className=='fa-solid fa-trash-can'){
        event.target.parentElement.parentElement.remove();
        let inner = event.target.parentElement.parentElement.innerHTML
        localStorage.removeItem(inner.split("<span")[0])
    }
    else {
        event.target.classList.toggle('checked');
    }
}
function guncelle() {
    keys = Object.keys(localStorage)
    for (i = keys.length; i >= 0; i--) {
        let li = document.createElement('li')
        li.innerHTML = `${localStorage.getItem(keys[i])}<span class="badge badge-primary badge-pill">
        <i class="fa-solid fa-trash-can">Sil</i>
      </span>`
        li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")
        if (localStorage.getItem(keys[i]) != null)
            ulDom.append(li)
    }
}
