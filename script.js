let button = document.getElementsByClassName("button")
let nodesContainer = document.querySelector("#area")
let node = document.getElementById("container")
let t = document.getElementById('target')

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

let nodes = [node];

const addNode = () => {

    if (nodes.length < 5) {
        const newNode = node.cloneNode(true);
        nodesContainer.appendChild(newNode);
        nodes.push(newNode)
    }
}

console.log(nodes)



/*

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
}*/






