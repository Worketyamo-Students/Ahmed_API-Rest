import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import chalk from "chalk"

const app = express()
app.use(express.json())

app.use(cors())

dotenv.config()

const port = process.env.PORT
const chiens = [
    {
        "id": 2024004,
        "name": "flash",
        "age": 5,
        "couleur": "black",
        "photo": "https://media.wired.com/photos/636eb5510ae5a121565fd729/master/w_2560%2Cc_limit/WI110122_FF_ForeverDogs_2400x1350_crop.jpg"
    }
]

app.get('/chiens', (req, res) => {
    res.status(200).json(chiens)
})



app.post('/chiens', (req, res) => {
    const chien = req.body
    chien.id = Math.floor(Math.random(1000, 1000000))
    console.log(chien)
    chiens.push(chien)
    res.status(201).send(`le chien a ete creer : ${chien.id}`)
})

app.put('/chiens/:id', (req, res) => {
    let chiot = req.params.id 
    const chiens = (id, array)=> {
        for (let i = 0; i < array.length; i++) {
            if (array[i].id === id) {
                return array[i]
            } else {
                console.error(chalk.red('Invalid'))
            }
        }
    }
})





app.listen(port, () => {
    console.log(chalk.blue('Server is running on port:', `http://localhost:${port}`))
})