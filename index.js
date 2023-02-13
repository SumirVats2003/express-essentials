import express, { response } from "express";
import data from "./data/mock.json" assert { type: "json" };

const app = express();
const PORT = 3000;

// Using the public folder at the root of the project
app.use(express.static("public"));

// Using the images folder at the route /images
app.use("/images", express.static("images"));

// GET
app.get("/", (request, response) => {
  response.json(data);
});

// GET with routing parameters
app.get("/class/:id", (req, res) => {
  const studentId = Number(req.params.id);
  const student = data.filter((student) => student.id === studentId);
  res.send(student);
});

// GET with next
app.get(
  "/next",
  (request, response, next) => {
    console.log("The response will be sent by the next function");
    next();
  },
  (req, res) => {
    res.send("I just set up a route with a second callback");
  }
);

// GET - download
app.get("/download", (request, response) => {
  response.download("images/bg3.jpg");
});

// GET - redirect
app.get("/redirect", (request, response) => {
  response.redirect("https://instagram.com");
});

// POST
app.post("/create", (request, response) => {
  response.send("This is a POST request at /create");
});

// PUT
app.put("/edit", (request, response) => {
  response.send("This is a PUT request at /edit");
});

// DELETE
app.delete("/delete", (request, response) => {
  response.send("This is a DELETE request at /delete");
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
  // console.log(data);
});
