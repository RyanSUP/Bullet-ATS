import { Router } from 'express'
import { checkAuth, decodeUserFromToken } from '../middleware/auth.js'
import * as bulletsCtrl from '../controllers/bullets.js'

const router = Router()

// TODO Protect the routes after testing
// ============= Protected routes ================
router.use(decodeUserFromToken)

// Create a bullet
//localhost:3000/api/bullets/
router.post('/', checkAuth, bulletsCtrl.create)

// Get all bullets
//localhost:3000/api/bullets/
router.get('/', bulletsCtrl.index)

// Update a bullet
//localhost:3000/api/bullets/:id
router.patch('/:id', bulletsCtrl.update)

// // Delete a bullet
// //localhost:3000/api/bullets/:id
// router.delete('/:id', bulletsCtrl.delete)

export { router }