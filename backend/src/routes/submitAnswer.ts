import { PrismaClient } from "@prisma/client";
import { FastifyInstance } from "fastify";
const prisma= new PrismaClient()//instantiating prisma so we can manipulate database

export default async function submitAnswer(server:FastifyInstance){
    //taking params uid and pid to store in problem solved table so we know if a user solved a particular question
    server.get<{Params: {uid:string, pid: string}}>('/question/:uid/:pid', async(request, reply)=>{
        try{
            const {uid, pid}=request.params//accessing query params
            //using create to upload new data to problemSolvedTable
            const newData= await prisma.problemSolvedTable.create({
                data:{
                    uid: uid,
                    pid: pid
                }
            })
            //disconnecting 
            prisma.$disconnect();
           return reply.send(newData)//verifying success of inputting data into problemSolvedTable

        }
        catch(error){return reply.send(error)}
    })
}