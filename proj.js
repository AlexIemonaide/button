let time = document.getElementById("time");
let size = document.getElementById("size");

pageSize();
function pageSize() {
    let date = new Date(Date.now())
    time.innerHTML = date;
    size.innerHTML = window.innerWidth + " x " + window.innerHeight;
}

window.addEventListener('resize', function(event) {
    pageSize();
}, true);

window.setInterval(pageSize, 1000)

function hasSpace() {
    return 
}


function item(addOrRemove) {
    let list = document.getElementById("mondayList");
    let list2 = document.getElementById("tuesdayList");
    let list3 = document.getElementById("tuesdayList2");
    let item = document.getElementById("listInput").value.trim();

    let foundIt = false;
    //
    let i = 0;

    //is there?
    for (i=0; i<list.children.length; i++) {
        if (list.children[i].textContent == item) {
            foundIt = true;
            break;
        }
    }
    for (i=0; i<list2.children.length; i++) {
        if (list2.children[i].textContent == item) {
            foundIt = true;
            break;
        }
    }
    for (i=0; i<list3.children.length; i++) {
        if (list3.children[i].textContent == item) {
            foundIt = true;
            break;
        }
    }
    for (i=0; i<list2.children.length; i++) {
        if (list2.children[i].textContent == item) {
            foundIt = true;
            break;
        }
    }

    if (addOrRemove == "add" && !foundIt) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(item));
        list.appendChild(li);
    }
    else if (addOrRemove == "remove" && foundIt) {
        list.removeChild(list.children[i]);
    }

    if (addOrRemove == "add" && !foundIt) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(item));
        list2.appendChild(li);
    }
    else if (addOrRemove == "remove" && foundIt) {
        list2.removeChild(list2.children[i]);
    }

    if (addOrRemove == "add" && !foundIt) {
        let dt = document.createElement('dt');
        dt.appendChild(document.createTextNode(item));
        list3.appendChild(dt);
    }
    else if (addOrRemove == "remove" && foundIt) {
        list3.removeChild(list3.children[i]);
    }

}

function soundFunc() {
    let button = document.getElementById("onOff");
    let audio = new Audio('vine-boom.mp3');
    if (button.innerHTML == "On") {
        audio.play();
        button.innerHTML = "Off";
    }
    else if (button.innerHTML == "Off") {
        audio.pause();
        button.innerHTML = "On";
    }
}

let a = document.getElementById("videoContainer");
function launch() {
    a.style.display = "block";
}

function close() {
    a.style.display = "none";
}