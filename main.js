import express from "express"
import cors from "cors"
import authRoute from "./routes/authRoute.js"
import { corsOptions } from "./config/corsOptions.js"
import { verifyJWT } from "./middleware/verifyJWT.js"
import cookieParser from "cookie-parser"


const app = express()

const PORT = 5000 || process.env.PORT

app.use(cors(corsOptions))

app.use(express.json())
app.use(cookieParser())

app.use("/api/v1/auth", authRoute)


// Protected route with verifyJWT Middleware
app.get("/api/v1", verifyJWT, (req, res) => {
    console.log(req)
    return res.send("hello world")
})

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})