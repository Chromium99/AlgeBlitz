import { PrismaClient } from "@prisma/client";
import { FastifyInstance } from "fastify";
const prisma= new PrismaClient()//instantiating prisma so we can manipulate database


/**
 * @usage The function considers an endpoint '/question/:uid/:pid'. When the endpoint is called, the uid of a particular user
 * and the associated pid (id of a problem) is stored in the problemSolvedTable in postgres. This allows for the tracking
 * of which questions have been solved by which users.
 * 
 * @param {import ('fastify').FastifyInstance} server  The Fastify server instance
 * @returns {Promise<Object|Error>} A promise that returns object containing uid and pid, implying sucess of inputting data or an error if an error occurs. The object
 * contains uid and pid that was stored in the problemSolvedTable.
 */
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