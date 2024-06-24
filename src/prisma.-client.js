import { PrismaClient } from "@prisma/client/edge";

const db = new PrismaClient({log : ['query']});


export default db;