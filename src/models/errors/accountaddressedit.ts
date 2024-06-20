/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ErrorT, ErrorT$ } from "./error.js";
import { FieldError, FieldError$ } from "./fielderror.js";
import * as z from "zod";

/**
 * The address is invalid and cannot be added, or some other error has occurred
 */
export type AccountAddressEditResponseBody = ErrorT | FieldError;

/** @internal */
export namespace AccountAddressEditResponseBody$ {
    export const inboundSchema: z.ZodType<AccountAddressEditResponseBody, z.ZodTypeDef, unknown> =
        z.union([ErrorT$.inboundSchema, FieldError$.inboundSchema]);

    export type Outbound = ErrorT$.Outbound | FieldError$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountAddressEditResponseBody> =
        z.union([ErrorT$.outboundSchema, FieldError$.outboundSchema]);
}
