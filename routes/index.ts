import express, { Router } from 'express'

const router: Router = express.Router()

router.get('/', (request, response) => {
  response.send('ExpressJS')
})

export default router
