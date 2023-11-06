const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/",(req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/data", (req, res) => {
    const computers = [];
    computers[0] = {
        name: "Lenovo Thinkpad X1",
        color: "Black",
        type: "Laptop",
        ram: "16GB",
        features: ["Webcam","Touchscreen","1440p Screen"],
        picture: "../images/thinkpad.jpg"
    };
    computers[1] = {
        name: "Lenovo Yoga",
        color: "Blue",
        type: "Laptop",
        ram: "8GB",
        features: ["Webcam","Touchscreen","2-in-1 Hinge"],
        picture: "../images/yoga.png"
    };
    computers[2] = {
        name: "Microsoft Surface Pro",
        color: "Black",
        type: "Laptop",
        ram: "32GB",
        features: ["Stylus","Touchscreen","2-in-1 Hinge"],
        picture: "../images/surface.jpg"
    };
    computers[3] = {
        name: "Alienware R14",
        color: "White",
        type: "Desktop",
        ram: "32GB",
        features: ["Water cooling","Discrete GPU","RGB lighting"],
        picture: "../images/alienware.jpg"
    };
    computers[4] = {
        name: "HP Pavilion",
        color: "Black",
        type: "Desktop",
        ram: "8GB",
        features: ["Silent operation","Compact design","DVD drive"],
        picture: "../images/pavilion.jpg"
    };

    res.json(computers);
});

app.listen(3000, () => {
    console.log("I'm listening")
});