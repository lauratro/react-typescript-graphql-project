import {MikroORM, RequiredEntityData} from "@mikro-orm/core"
import { __prod__ } from "./constants"
import { Post } from "./entities/Post"
const main =async () => {
    //if we are not in production I want debug to be on
    const orm = await MikroORM.init({ entities:[Post], dbName: "lireddit", type:"postgresql", debug: !__prod__, }) 
const post= orm.em.create(Post, {title:"test"} as RequiredEntityData<Post>);
}

main()