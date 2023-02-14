import express, { response } from "express";
import data from "./data/mock.json" assert { type: "json" };

const app = express();
const PORT = 3000;

// Using the public folder at the root of the project
app.use(express.static("public"));

// Using the images folder at the route /images
app.use("/images", express.static("images"));

// Middleware
// Using express.json & express.urlencoded
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST - JSON and URLEncoded
app.post("/item", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// // GET
// app.get("/", (request, response) => {
//   response.json(data);
// });

// // GET with routing parameters
// app.get("/class/:id", (req, res) => {
//   const studentId = Number(req.params.id);
//   const student = data.filter((student) => student.id === studentId);
//   res.send(student);
// });

// // GET with next
// app.get(
//   "/next",
//   (request, response, next) => {
//     console.log("The response will be sent by the next function");
//     next();
//   },
//   (req, res) => {
//     res.send("I just set up a route with a second callback");
//   }
// );

// // GET - download
// app.get("/download", (request, response) => {
//   response.download("images/bg3.jpg");
// });

// // GET - redirect
// app.get("/redirect", (request, response) => {
//   response.redirect("https://instagram.com");
// });

// // POST
// app.post("/create", (request, response) => {
//   response.send("This is a POST request at /create");
// });

// // PUT
// app.put("/edit", (request, response) => {
//   response.send("This is a PUT request at /edit");
// });

// // DELETE
// app.delete("/delete", (request, response) => {
//   response.send("This is a DELETE request at /delete");
// });

app
  .route("/class")
  .get((req, res) => {
    // res.send("Retrieve class info");
    throw new Error();
  })
  .post((req, res) => {
    res.send("Create class info");
  })
  .put((req, res) => {
    res.send("Update class info");
  });

// Route Chaining
// GET
// app.get("/class", (req, res) => {
//   res.send("Retrieve class info");
// });

// POST
// app.post("/class", (req, res) => {
//   res.send("Create class info");
// });

// PUT
// app.put("/class", (req, res) => {
//   res.send("Update class info");
// });

// Middleware for error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something is broken!");
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
  // console.log(data);
});
