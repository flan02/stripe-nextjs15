"use server"

//import User from "@/models/user.model"
// import connectDB from "@/utils/db"

type UserProps = {
  user: unknown
}

export async function creatUser(user: UserProps) {
  try {
    // await connectDB()
    // const newUser = await User.create(user)
    // return JSON.parse(JSON.stringify(newUser))
  } catch (error) {
    console.error(error)
  }
}

export async function getUser() {
  try {
    // await connectDB()
    // const user = await User.findOne()
    // return JSON.parse(JSON.stringify(user))
  } catch (error) {
    console.error(error)
  }
}