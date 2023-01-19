import {getInstanceRouter} from "xpresser";

/**
 * See https://xpresserjs.com/router/
 */
const Route = getInstanceRouter();

/**
 * Url: "/" points to AppController@index
 * The index method of the controller.
 */
// Route.get("/", "App@index").name("index");

Route.post("/marcus", "App@marcus");
Route.get("/api", "Api@index");
/**
 * Add 404 routes after plugins are loaded.
 */
Route.routesAfterPlugins = () => {
    Route.get("*", "App@notFound").name("404");
};
