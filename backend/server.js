const express = require("express"); // framework Express pentru server HTTP
const cors = require("cors"); // permite cereri frontend -> backend
const bcrypt = require("bcryptjs"); // criptare parole
const fs = require("fs"); // lucrăm cu fișiere
const path = require("path"); // pentru path-uri
const jwt = require("jsonwebtoken"); // token JWT

const app = express(); // inițializăm aplicația Express
app.use(cors()); // activăm CORS
app.use(express.json()); // permitem JSON în body-ul cererilor

// calea către fișierul users.json
const usersFilePath = path.join(__dirname, "users.json");

// citește userii din fișier
function readUsers() {
  const data = fs.readFileSync(usersFilePath, "utf-8");
  return JSON.parse(data);
}

// scrie userii în fișier
function writeUsers(users) {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
}

// RUTA SIGNUP
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  // validare
  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, error: "Email and password are mandatory" });
  }

  const users = readUsers();

  // verificăm dacă emailul există deja
  if (users.find((u) => u.email === email)) {
    return res
      .status(400)
      .json({ success: false, error: "Email already exist" });
  }

  // criptăm parola
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = { email, password: hashedPassword };
  users.push(newUser);
  writeUsers(users);

  return res.json({ success: true });
});

// RUTA LOGIN
const JWT_SECRET = "adasdasdasdasdasdasasdas"; // la final îl mutăm în .env

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, error: "email and password are mandatory" });
  }

  const users = readUsers();
  const user = users.find((u) => u.email === email);

  if (!user) {
    return res
      .status(400)
      .json({ success: false, error: "User doesn't exist" });
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return res.status(400).json({ success: false, error: "Wrong password" });
  }

  // generăm token JWT
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });

  return res.json({ success: true, token });
});

// pornim serverul
app.listen(5000, () => console.log("Serverul ruleaza pe portul 5000"));
