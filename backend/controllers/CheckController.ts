import {ControllerClass} from "xpresser";
import {Http} from "xpresser/types/http";

/**
 * CheckController
 */
class CheckController extends ControllerClass {

    /**
     * Example controller action.
     * @param {Http} http
     */
    action(http: Http) {
        return http.send({
            route: http.route
        });
    }

}

export = CheckController;