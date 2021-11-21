//let nodesContainer = document.querySelector("#area")
let container = document.getElementsByClassName("container")

function Node(id, title, description, button, connection, relationTitle) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.relations = [{
        button: button,
        connection: connection,
        title: relationTitle
    }, {
        button: button,
        connection: connection,
        title: relationTitle
    }, {
        button: button,
        connection: connection,
        title: relationTitle
    }, {
        button: button,
        connection: connection,
        title: relationTitle
    }]

}

const nodes = [];

let id = document.getElementById("circleId")

let title = document.getElementById("title")

let description = document.getElementById("description")


let button = document.querySelector("input").value




const rootNode = new Node(id, title, description, button)
nodes.push(rootNode)


const nodeObjToString = JSON.stringify(rootNode)

const toJSONNode = JSON.parse(nodeObjToString);
console.log(toJSONNode.title)

/*const addNode = () => {
    for (let i = 1; i < 5; i++) {
        nodes[i] = new Node()
    }
}*/

function addNode() {
    var x = document.getElementById("area");
    let value = "";
    let i;

    for (i = 0; i < nodes.length; i++) {
        const e = document.createElement('div');
        e.id = "circleId"
        e.className = "container";
        x.appendChild(e)
        document.getElementsByClassName("container").innerHTML = value;

    }
}




console.log(nodes)

