import {MikroORM} from "@mikro-orm/core"
import { __prod__ } from "./src/constants"
const main =async () => {
    //if we are not in production I want debug to be on
    const orm = await MikroORM.init({ dbName: "lireddit", type:"postgresql", debug: !__prod__, }) 
 
}

console.log("Hello world")