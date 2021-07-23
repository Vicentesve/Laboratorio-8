// Dependencies
// =============================================================
const { table } = require("console");
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

var tables = [
    {
      id: 1,
      name: "Vicente",
      email: "vicente.40080@gmail.com",
      phone: "5527029124",
    }
];

var waitingList = [
    {
      id: 1,
      name: "Sebastian",
      email: "sebastian@gmail.com",
      phone: "5547841258",
    }
];

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

app.post("/api/tables", function(req, res) {
    var newTable = req.body;
    tables.push(newTable);
    res.json(newTable);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitingList);
});

app.post("/api/waitlist", function(req, res) {
    var newTable = req.body;
    waitingList.push(newTable);
    res.json(newTable);
});

app.get("/clearTables", function(req, res) {
    
    tables = [];
    waitingList = [];
    return res.json(true);
});




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});