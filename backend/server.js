import express from 'express'
import {Server}from 'socket.io'
import cors from 'cors'
import http from 'http'
const app=express()
const server=http.createServer(app)
const port =4000
const io=new Server(server,{
    cors:'*',
    methods:'*'
})
app.use(cors())
app.use(express.json())


app.listen(port,()=>console.log(`server running on port ${port}`))