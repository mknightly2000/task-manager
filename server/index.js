const app = require("express")();
const cors = require("cors");
const PORT = process.env.PORT || 8080;

app.use(cors())

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

app.get("/", (req, res) => {
    res.status(200).send({
        message: "Hello World!"
    })
});