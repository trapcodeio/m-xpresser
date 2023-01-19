import { is, XMongoModel, XMongoSchema } from "xpress-mongo";
import { UseCollection } from "@xpresser/xpress-mongo";
import {$} from "../../app";

/**
 * Interface for Model's `this.data`. (For Typescript)
 * Optional if accessing data using model helper functions
 *
 * @example
 * this.data.updatedAt? // type Date
 * this.data.createdAt // type Date
 */
export interface UserDataType {
    name: string;
    email: string;
    password: string;
    isVerified: boolean;
    updatedAt?: Date;
    createdAt: Date;
}


class User extends XMongoModel {
    /**
     * Model Schema
     */
    static schema: XMongoSchema<UserDataType> = {
        name: is.String().required(),
        email: is.String().required().unique(),
        password: is.String().required(),
        isVerified: is.Boolean(),
        updatedAt: is.Date(),
        createdAt: is.Date().required()
    };

    // SET Type of this.data.
    public data!: UserDataType;


    encodePassword(){
         this.data.password = $.base64.encode(this.data.password);
    }
}

/**
 * Map Model to Collection: `users`
 * .native() will be made available for use.
 */
UseCollection(User, "users");

// Export Model as Default
export default User;
