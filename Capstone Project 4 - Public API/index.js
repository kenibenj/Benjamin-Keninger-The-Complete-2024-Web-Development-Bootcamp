import express from "express";
import axios from "axios";
import translate from "translate";

const app = express();
const port = 3000;
translate.engine = 'google';
translate.key = null;

app.use(express.static("public"));

app.get("/", async (req,res) =>{
    try {
        const response = await axios.get("https://date.nager.at/Api/v3/IsTodayPublicHoliday/RU");
        const result = response.status;
        res.render("index.ejs", {status: result});
      } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
        });
      }
});

app.listen(port, () =>{
    console.log(`Server running on port: ${port}`);
})