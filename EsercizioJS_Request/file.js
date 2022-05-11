"use strict";

const url = "https://jsonplaceholder.typicode.com/todos"

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status == 200){
        let brani = JSON.parse(xhr.responseText);
        let tbody = document.getElementById("brani").getElementsByTagName("tbody")[0];
        brani.forEach(element => {
            if(element.id < 50){
                let tr = document.createElement("tr");
                let tdBr = document.createElement("td");
                let brNode = document.createTextNode(element.title);
                let tdId = document.createElement("td");
                let IdNode = document.createTextNode(element.id);
                tdBr.appendChild(brNode);
                tdId.appendChild(IdNode);

                tr.appendChild(tdBr);
                tr.appendChild(tdId);
                tbody.appendChild(tr);
            }
        });
    }
};

xhr.open("GET",url,true);
xhr.send(null);