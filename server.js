const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/",(req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/data", (req, res) => {
    const data1 = ["1", "2", "3", "4", "5", "6"];
    res.send(data1);
});

app.listen(3000, () => {
    console.log("I'm listening")
});