import Express from "express"
import router from "./router/index.js"
const app = Express()
const port = 3000
app.use(router)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})