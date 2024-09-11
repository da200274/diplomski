import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose'
import loginRouter from './routers/login.router';
import registerRouter from './routers/register.router';
import getRouter from './routers/get.router';
import updateRouter from './routers/update.router';
import insertRouter from './routers/insert.router';
import changeRouter from './routers/change.router';
import sortRouter from './routers/sort.router';

const app = express();

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/sweets')
const conn = mongoose.connection
conn.once('open', ()=>{
    console.log("DB ok")
})

const router = express.Router()
router.use('/login', loginRouter)
router.use('/register', registerRouter)
router.use('/get', getRouter)
router.use('/update', updateRouter)
router.use('/insert', insertRouter)
router.use('/change', changeRouter)
router.use('/sort', sortRouter)

app.use("/" ,router)
app.listen(4000, () => console.log(`Express server running on port 4000`));