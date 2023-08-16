if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");

const diaryRoutes = require("./routers/diary");
const userRoutes = require("./routers/user");

const app = express();
const PORT = process.env.PORT || 5000;
const dbUrl = process.env.DB_URL;
const secret = process.env.SECRET;

// -----------------Mongoose-----------------------
mongoose
    .connect(dbUrl)
    .then(() => {
        console.log("Connected to database! ");
    })
    .catch((err) => console.log(err.message));

//----------------------Express---------------------------

const sessionOptions = {
    secret,
    resave: false,
    saveUninitialized: false,
};

app.use(session(sessionOptions));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

// ----------------------Routing-----------------------

app.get("/", async (req, res) => {
    res.send(
        "This is a server side. Please go to the client page opened on port 3000!"
    );
});

app.use("/api/user", userRoutes);
app.use("/api/user/:userId/diary", diaryRoutes);

app.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong!" } = err;
    res.status(500);
    res.json({ status, err: message });
});

app.all("*", (req, res) => {
    res.status(404);
    res.json("notFound");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
