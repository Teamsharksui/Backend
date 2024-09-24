import { allowedOrigins } from "./allowedOrigins.js"


export const corsOptions = {
    origin: (origin, callback) => {
        if(allowedOrigins.indexOf(origin) !== -1 || !origin){
            console.log("allowed")
            return callback(null, true)
        } else{
            return callback(new Error("Not allowed by cors"))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}