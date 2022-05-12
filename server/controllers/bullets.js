import { Profile } from '../models/profile.js'

const index = () => null

const create = (req, res) => {
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.bullets.push({ text: req.body.text })
    profile.save()
    .then(updatedProfile => {
      return res.status(201).json(updatedProfile)
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}
const update = () => null

const deleteBullet = () => null

export {
  create
}