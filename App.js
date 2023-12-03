const express = require('express');
const app = express();
const port = 3000;
const bcrypt = require('bcrypt')

const users = []
app.use(express.urlencoded({ extended: false }))
app.set('view-engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs', { name: "Taimoor" })
});

app.get('/login', (req, res) => {
    res.render('login.ejs', { name: " User " })
})
app.post('/login', (req, res) => {

})

app.get('/register', (req, res) => {
    res.render('register.ejs', { name: " Dude " })
})

app.post('/register', async (req, res) => {
try {
    const hashedPassword = await bcrypt.hash(req.body.password,10) 
    users.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password:hashedPassword
    })
    res.redirect('/login')
} catch (error) {
    res.redirect('/register')
}
console.log(users)
})

app.listen(port);