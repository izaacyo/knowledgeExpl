let nodesContainer = document.querySelector("#area")


function Node(id, title, description, button1, button2, button3, button4, connection, relationTitle) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.relations = [{
        button: button1,
        connection: connection,
        title: relationTitle
    }, {
        button: button2,
        connection: id,
        title: relationTitle
    }, {
        button: button3,
        connection: id,
        title: relationTitle
    }, {
        button: button4,
        connection: id,
        title: relationTitle
    }]

}

let nodes = [];

let id = document.getElementById("circleId")

let title = document.getElementById("title")

let description = document.getElementById("description")


let button1 = document.getElementById("input1").value
let button2 = document.getElementById("input2").value
let button3 = document.getElementById("input3").value
let button4 = document.getElementById("input4").value

const newNode = new Node(id, title, description, button1, button2, button3, button4)


const addNode1 = () => {

    for (let i = 0; i < 5; i++) {
        nodes[0] = new Node(1, "Slide A", "This is description for Slide A", 1, null, null, null)
    }
}


const addNode2 = () => {

    for (let i = 0; i < 5; i++) {
        nodes[1] = new Node(2, "Slide B", "This is description for Slide B", null, 2, null, null)
    }
}


const addNode3 = () => {

    for (let i = 0; i < 5; i++) {
        nodes[2] = new Node(3, "Slide C", "This is description for Slide C", null, null, 3, null)
    }
}


const addNode4 = () => {

    for (let i = 0; i < 5; i++) {
        nodes[3] = new Node(4, "Slide D", "This is description for Slide D", null, null, null, 4)
    }
}

console.log(nodes)

/*for (let i = 0; i < 5; i++) {
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





