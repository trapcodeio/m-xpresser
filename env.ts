import {Env} from "@xpresser/env";
import {resolve} from "path";

const env = Env(resolve(".env"), {
    NODE_ENV: Env.is.enum(["development", "production"] as const),

    APP_NAME: Env.is.string("My Xpresser App"),
    APP_PORT: Env.is.number(3000),
    APP_HOST: Env.optional.string("Localhost"),

    DB_SERVER: Env.is.string("mongodb://127.0.0.1:27017"),
    DB_NAME: Env.is.string(),
    DB_PASSWORD: Env.optional.string(),
});

export default env;
