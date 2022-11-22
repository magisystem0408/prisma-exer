import { PrismaClient } from "@prisma/client";


const clientPrisma =  new PrismaClient({log: ["query", "error", "info", "warn"], });


export default clientPrisma;