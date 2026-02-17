require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectionofDb = require("./config/connect.js");
const path = require("path");

const app = express();
app.get("/", (req, res) => { 
  res.send("Backend is running"); 
});
//////dotenv config/////////////////////


//////connection to DB/////////////////
connectionofDb();


const PORT = process.env.PORT || 8001;


app.use(express.json());
//app.use(cors({
  //origin:'http://localhost:3000',
  //methods:['GET','POST']
//}));
app.use(cors());


app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use('/api/user', require('./routes/userRoutes.js'))
app.use('/api/admin', require('./routes/adminRoutes'))
app.use('/api/owner', require('./routes/ownerRoutes'))



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});