const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session");

const app = express();
app.use(cors());
app.use(express.json());

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

// Set up session middleware
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
    },
  })
);

app.get("/check-authenticated", (req, res) => {
  if (req.session.user) {
    res.json({ isAuthenticated: true });
  } else {
    res.json({ isAuthenticated: false });
  }
});
  

//first api:
app.post('/register', (req, res) => {
    const checkEmailSql = 'SELECT COUNT(*) AS count FROM login WHERE email = ?';
    const checkEmailValues = [req.body.email];
    
    db.query(checkEmailSql, checkEmailValues, (emailErr, emailResult) => {
        if (emailErr) {
            return res.json('Error');
        }

        if (emailResult[0].count > 0) {
            return res.json('Email already used');
        }

        const insertSql = 'INSERT INTO login (`email`, `name`, `contact`, `password`, `pos`) VALUES (?, ?, ?, ?, ?)';
        const insertValues = [req.body.email, req.body.name, req.body.contact, req.body.password, req.body.pos];
        
        db.query(insertSql, insertValues, (insertErr, insertData) => {
            if (insertErr) {
              return res.json('Error');
            }
        
            // Create a session after successful registration
            req.session.user = req.body.email;
            return res.json(insertData);
          });
        });
});



app.post('/login', (req, res) => {
    const sql = 'SELECT * FROM login WHERE `email`= ? AND `password` = ? ';
  
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
      if (err) {
        return res.json('Error');
      }
      if (data.length > 0) {
        // Create a session after successful login
        req.session.user = req.body.email;
        return res.json("success");
      } else {
        return res.json("fail");
      }
    });
    
  });


  app.get("/check-authenticated", (req, res) => {
    if (req.session.user) {
      res.json({ isAuthenticated: true });
    } else {
      res.json({ isAuthenticated: false });
    }
  });
  
  app.post("/logout", (req, res) => {
    req.session.user = undefined;
    return res.json("Logged out");
    
  });
  
  app.listen(8081, () => {
    console.log("listening");
  });
