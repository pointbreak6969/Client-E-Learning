import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {login as authLogin} from "../redux/authSlice"
import Input from "./Input"
import { Button } from "./Buttons"
import { useDispatch } from "react-redux"
import authService from "../services/auth"
import { useForm } from "react-hook-form"
const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")
  return (
    <div>Login</div>
  )
}
export default Login