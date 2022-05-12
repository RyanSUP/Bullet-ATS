import { Profile } from '../models/profile.js'

const index = (req, res) => {
  Profile.findById(req.user.profile)
  .then(profile => {
    const bullets = profile.bullets
    return res.status(200).json(bullets)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

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
const update = (req, res) => {
  Profile.findById(req.user.profile)
  .then(profile => {
    const bullet = profile.bullets.id(req.params.id)
    bullet.text = req.body.text
    profile.save()
    .then(() => {
      return res.status(200).json(bullet)
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

const deleteBullet = (req, res) => {
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.bullets.id(req.params.id).remove()
    profile.save()
    .then(updatedProfile => {
      return res.status(200).json(updatedProfile)
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export {
  index,
  create,
  update,
  deleteBullet as delete,
}