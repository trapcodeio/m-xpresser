import JobHelper from "xpresser/src/Console/JobHelper";
import {$} from "../../app";

/**
 *  Job: Config
 */
export = {
    // Job Handler
    async handler(args: string[], job: JobHelper): Promise<any> {
        // Your Job Here
        $.config.set("app_name", "New Name");

        console.log($.path.storage("config.js"))


        // End current job process.
        return job.end();
    }
};