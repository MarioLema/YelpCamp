const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res)  => {
  res.render("landing")
})

app.get("/campgrounds", (req, res) => {
  let campgrounds = [
    {name:"By the Lake Camp", image: "https://pixabay.com/get/50e9d4474856b108f5d084609620367d1c3ed9e04e507441742f79dc9f49c3_340.jpg" },
    {name:"Top Score Sports Camp", image: "https://pixabay.com/get/54e5dc474355a914f6da8c7dda793f7f1636dfe2564c704c7d2e7bd69f45c15e_340.jpg" },
    {name:"Camp Sneaky Bear", image: "https://pixabay.com/get/55e8dc404f5aab14f6da8c7dda793f7f1636dfe2564c704c7d2e7bd69f45c15e_340.jpg" },
    {name:"Prestige Pines", image: "https://pixabay.com/get/57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c7d2e7bd69f45c15e_340.jpg" },
    {name:"Splash Art Camp", image: "https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c7d2e7bd79f48c459_340.jpg" }
  ];
  res.render("campgrounds", {campgrounds: campgrounds})
})


app.listen(3000, () => console.log("YelpCamp running"))
