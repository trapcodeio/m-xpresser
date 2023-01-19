import {Http} from "xpresser/types/http";

/**
 * IsApiRequestMiddleware
 */
export = {

    /**
    * Default Middleware Action
    * @param {Xpresser.Http} http
    */
    allow(http: Http): any {
        // run check here
        const query = http.$query;

        if(!query.exists("name")){
            return http.status(401).json({error: "Name is required"})
        }

        return http.next();
    }

};
