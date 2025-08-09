const express = require("express");
const { connectDB } = require("./connect");
const urlRoute = require("./routes/url");
const URL = require("./models/url");
const path = require("path");
const { render } = require("ejs");
const app = express();
const PORT = 8001;

connectDB("mongodb://localhost:27017/short_url")
.then( () => console.log("Connected to MongoDB"))

app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/test", async (req, res) => {
    const allUrls = await URL.find({});
    return render("home", {
        urls: allUrls
    });
});

app.use("/url", urlRoute);

app.get("/:shortId", async(req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId: shortId
    }, { 
        $push: {
        visitHistory: {
            timestamp: Date.now()
        }, 
      }
    }
);
res.redirect(entry.redirectUrl);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})