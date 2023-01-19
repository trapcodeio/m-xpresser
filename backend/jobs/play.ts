import JobHelper from "xpresser/src/Console/JobHelper";
import User, {UserDataType} from "../models/User";

/**
 *  Job: Play
 */
export = {
    // Job Handler
    async handler(args: string[], job: JobHelper): Promise<any> {
        // Your Job Here
        const user = new User()


        user.set({
            name: "John Doe",
            email: "marcus@app.com",
            password: "123456"
        })


        user.encodePassword()



        await user.save();



        // const userRaw = await User.native().findOne<UserDataType>()
        //
        // const user = User.use(userRaw!);
        //
        // await user.update({
        //     name: "New Marcus"
        // })
        //
        //
        // console.log({
        //      userRaw, user
        // })



        // End current job process.
        return job.end();
    }
};