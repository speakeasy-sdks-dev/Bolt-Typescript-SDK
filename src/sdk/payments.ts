/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Guest } from "./guest.js";
import { LoggedIn } from "./loggedin.js";

export class Payments extends ClientSDK {
    private _loggedIn?: LoggedIn;
    get loggedIn(): LoggedIn {
        return (this._loggedIn ??= new LoggedIn(this.options$));
    }

    private _guest?: Guest;
    get guest(): Guest {
        return (this._guest ??= new Guest(this.options$));
    }
}
