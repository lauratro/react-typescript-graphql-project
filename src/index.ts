import {MikroORM, RequiredEntityData} from "@mikro-orm/core"
import { __prod__ } from "./constants"
import { Post } from "./entities/Post"
import mikroOrmConfig from "./mikro-orm.config"
const main =async () => {
    //if we are not in production I want debug to be on
    const orm = await MikroORM.init(mikroOrmConfig) 
const post= orm.em.create(Post, {title:"test"} as RequiredEntityData<Post>);
///add post to database
await orm.em.persistAndFlush(post)


}

main().catch(err =>{
    console.error(err)
})