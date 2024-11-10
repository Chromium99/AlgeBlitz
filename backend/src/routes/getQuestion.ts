import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient()
import { FastifyInstance } from "fastify"; //used for routing in diff files

export default async function getQuestion(server:FastifyInstance){
    server.get<{Params: {category:string, difficulty: string, uid: string }}>('/question/:category/:difficulty/:uid', async(request, reply)=>{
        
        try{
            //accessing query params
            const{category, difficulty, uid}=request.params
            //getting number of questions using 'count' property of prisma
            const numberOfQuestions=await prisma.questionInfoTable.count({//checks number of questions of given params
                where:{
                    AND:[
                        {category: category},
                        {difficulty: difficulty}
                    ]
                }
            })

          //recursive function to ensure that a random, unique question is retrieved, with the amount of tries in
          //getting a new unique question being total of 5
          async function questionGetter(maxTries=5){
            try{
                //generating a random value based on the number of questions present 
                let randomIndex=numberOfQuestions>1? Math.floor(Math.random()*numberOfQuestions):0;
                const randomQuestion=await prisma.questionInfoTable.findMany({//select a random question of given params using random value
                    where:{
                        category: category,
                        difficulty: difficulty
                    },
                    skip: randomIndex,
                    take: 1
                })
                //checking if the random problem that we retrieved was already solved by the particular user
                const alreadySolvedChecker=await prisma.problemSolvedTable.findMany(

                    {
                        where:{
                            pid:randomQuestion[0].pid,
                            uid:uid
                        }
                    }
                )
                //if question already solved by the particular user, we call the questionGetter() again
                //to get aa new, unique question
                if (alreadySolvedChecker.length>0){
                    return await questionGetter(maxTries-1)
                }
                //if problem not previously solved by user, we just return the random question
                else return randomQuestion
                
            }
            catch(error){
                console.log(error)
            }
            
          }
          //calling questionGetter() to start the initial iteration
         const result=await questionGetter()
         await prisma.$disconnect();
         return reply.send(result)
        }
        catch(error){return error};

    })}




