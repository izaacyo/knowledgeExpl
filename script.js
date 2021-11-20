let node = document.getElementById("node")
let button = document.getElementsByClassName("button")
let nodesContainer = document.querySelector("#node")

console.log(node)
console.log(button)
console.log(nodesContainer)

function Node(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.relations = [{
        button: 1,
        connection: "",
        title: ""
    }, {
        button: 2,
        connection: "",
        title: ""
    }, {
        button: 3,
        connection: "",
        title: ""
    }, {
        button: 4,
        connection: "",
        title: ""
    }]
}

let nodes = [];
let relations = []


const addNode = (e) => {
    e.preventDefault();

    if (nodes < 4) {
        const newNode = document.createElement("div")
        newNode.className = "container";
        nodesContainer.appendChild(newNode);
        nodes.push(newNode)
    }

}




function setup() {
    for (let i = 0; i < 1; i++) {
        circles[i] = new Node();
    }
}

function draw() {
    background(0);
    for (let i = 0; i < circles.length; i++) {
        circles[i].add()
    }
}

function newNode() {
    circles.push(new Node(id, title, description))
    node = document.getElementsByName('container').appendChild(cloneNode(true))
}

function deleteNode() {
    circles.splice()
}






