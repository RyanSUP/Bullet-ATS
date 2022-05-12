import mongoose from 'mongoose'

const Bullets = new mongoose.Schema({
  text: String
})

const profileSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    lowercase: true, 
    unique: true
  },
  name: String,
  bullets: [Bullets]
},{
    timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {Profile}
