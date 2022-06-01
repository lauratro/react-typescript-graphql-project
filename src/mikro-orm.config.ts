import { Options } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

const config: Options = {
    entities:[Post], dbName: "lireddit", type:"postgresql", debug: !__prod__,
};
export default config;