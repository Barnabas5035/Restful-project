import express from 'express'
import bodyParser from 'body-parser'
import axios from 'axios'

const app = express()
const port = 3000
const URL = 'https://secrets-api.appbrewery.com'

const yourBearerToken = '2e5cad24-31eb-4397-929a-000ad2776593'
const Config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
}

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index.ejs', { content: 'waiting to load ' })
})
// how to use get ,post, put, delete//

app.post('/get-secret', async (req, res) => {
  const searchID = req.body.id
  try {
    const result = await axios.get(URL + '/secrets/' + searchID, Config)
    res.render('index.ejs', { content: JSON.stringify(result.data) })
  } catch (error) {
    res.render('index.ejs', { content: JSON.stringify(error.response.data) })
  }
})
app.post('/post-secret', async (req, res) => {
  const searchID = req.body.id
  try {
    const result = await axios.post(
      URL + '/secrets/' + searchID,
      req.body,
      Config
    )
    res.render('index.ejs', { content: JSON.stringify(result.data) })
  } catch (error) {
    res.render('index.ejs', { content: JSON.stringify(error.response.data) })
  }
})
app.post('/put-secret', async (req, res) => {
  const searchID = req.body.id
  try {
    const result = await axios.put(
      URL + '/secrets/' + searchID,
      req.body,
      Config
    )
    res.render('index.ejs', { content: JSON.stringify(result.data) })
  } catch (error) {
    res.render('index.ejs', { content: JSON.stringify(error.response.data) })
  }
})
app.post('/delete-secret', async (req, res) => {
  const searchID = req.body.id
  try {
    const result = await axios.delete(URL + '/secrets/' + searchID, Config)
    res.render('index.ejs', { content: JSON.stringify(result.data) })
  } catch (error) {
    res.render('index.ejs', { content: JSON.stringify(error.response.data) })
  }
})

app.listen(port, () => {
  console.log(`server is running at ${port}`)
})
