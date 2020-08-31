const express = require("express");

const morgan = require("morgan");

const passport = require("passport");

const session = require("express-session");

const { ensureAuthenticated } = require("../config/server/auth");

const path = require("path");

const controller = require("../database/controllers/index");

// Passport auth config
require("../config/server/passport")(passport);

const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan("tiny"));

app.use(express.urlencoded({ extended: false }));

// Express Session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "../client/dist")));

app.post("/register", controller.createAccount);

app.post("/login", controller.login);

app.get("/logout", controller.logout);

app.get("/auth", ensureAuthenticated, (req, res) => {
  res.send("Authenticated");
});

app.get("/success", (req, res) => {
  res.json("Success");
});

app.get("/signout", (req, res) => {
  res.json("Logged out");
});

app.get("/failed", (req, res) => {
  // res.sendFile(path.join(__dirname, "../client/dist/failed.html"));
  console.log(req);
  res.json({errors: [{msg: "Login failed"}]})
});

app.listen(PORT, () => console.log("Listening on port: " + PORT));
