/*let button = document.getElementsByClassName("button")
let nodesContainer = document.querySelector("#area")
let node = document.getElementById("container")
let t = document.getElementById('target')*/

let nodes = []


class Node {
    constructor(id, title, description, button, connection, title) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.relations = [{
            button: button,
            connection: connection,
            title: title
        }, {
            button: 2,
            connection: id,
            title: ""
        }, {
            button: 3,
            connection: id,
            title: ""
        }, {
            button: 4,
            connection: id,
            title: ""
        }]
    }

}


for (let i = 0; i < 5; i++) {
    nodes[i] = new Node(1, "Slide A", "descriptionSS")
}



for (let i = 0; i < 1; i++) {
    (function (i) {
        this.print = function () {
            console.log('#' + i + ' ' + this.id
                + ': ' + this.title + ' ' + this.description + '' + this.relations);
        }
        this.print();
    }).call(nodes[i], i);
}



/*const addNode = () => {

    if (nodes.length < 5) {
        const newNode = node.cloneNode(true);
        nodesContainer.appendChild(newNode);
        nodes.push(newNode)
    }
}

console.log(nodes)*/

/*let relations = Node["relations"];

for (let i = 0, len = Node.relations.length; i < len; i++) {
    //  console.log(relations[i])
    // console.log(relations[i].connection)
    for (let prop in relations[i]) {
        console.log(prop, relations[i][prop])
    }
}*/




/*

function newNode() {
    circles.push(new Node(id, title, description))
    node = document.getElementsByName('container').appendChild(cloneNode(true))
}

function deleteNode() {
    circles.splice()
}*/





