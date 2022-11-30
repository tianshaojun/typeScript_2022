import express, { Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import router from './router'

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req: Request, res: Response, next: NextFunction) => {
  req.teacherName = 'dell'
  next()
})

app.use(
  cookieSession({
    name: 'session', //你的键名
    keys: ['teacher dell'], //加密字符串
    maxAge: 1000 * 60 * 60 * 24, //有效时间
  })
)

app.use(router)

app.listen(7001, () => {
  console.log('server is running!')
})
