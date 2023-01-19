import {Controller, Http} from "xpresser/types/http";

/**
 * ApiController
 */
export = <Controller.Object>{
    // Controller Name
    name: "ApiController",

    // Controller Default Error Handler.
    e: (http: Http, error: string) => http.status(401).json({ error }),

    middlewares: {
        'IsApiRequest': "index"
    },


    /**
    * Example Action.
    * @param http - Current Http Instance
    */
    index(http: Http) {
        return {
            message: "Hello World"
        }
    }
};
