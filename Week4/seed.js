const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myprojectDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});

const Project = mongoose.model("Project", ProjectSchema);

const sampleData = [
  {
    title: "Tiger 1",
    image: "images/tiger2.jpg",
    link: "About Tiger 2",
    description: "Fluffy and adorable kitten",
  },
  {
    title: "Tiger 2",
    image: "images/tiger3.jpg",
    link: "About Tiger 3",
    description: "Loves to nap in sunbeams",
  },
];

Project.insertMany(sampleData)
  .then(() => {
    console.log("Sample data inserted");
    mongoose.connection.close();
  })
  .catch((err) => console.error(err));