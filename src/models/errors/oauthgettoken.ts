/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ErrorT, ErrorT$inboundSchema, ErrorT$Outbound, ErrorT$outboundSchema } from "./error.js";
import {
    FieldError,
    FieldError$inboundSchema,
    FieldError$Outbound,
    FieldError$outboundSchema,
} from "./fielderror.js";
import * as z from "zod";

/**
 * An error has occurred, and further details are contained in the response
 */
export type OauthGetTokenResponseBody = ErrorT | FieldError;

/** @internal */
export const OauthGetTokenResponseBody$inboundSchema: z.ZodType<
    OauthGetTokenResponseBody,
    z.ZodTypeDef,
    unknown
> = z.union([ErrorT$inboundSchema, FieldError$inboundSchema]);

/** @internal */
export type OauthGetTokenResponseBody$Outbound = ErrorT$Outbound | FieldError$Outbound;

/** @internal */
export const OauthGetTokenResponseBody$outboundSchema: z.ZodType<
    OauthGetTokenResponseBody$Outbound,
    z.ZodTypeDef,
    OauthGetTokenResponseBody
> = z.union([ErrorT$outboundSchema, FieldError$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OauthGetTokenResponseBody$ {
    /** @deprecated use `OauthGetTokenResponseBody$inboundSchema` instead. */
    export const inboundSchema = OauthGetTokenResponseBody$inboundSchema;
    /** @deprecated use `OauthGetTokenResponseBody$outboundSchema` instead. */
    export const outboundSchema = OauthGetTokenResponseBody$outboundSchema;
    /** @deprecated use `OauthGetTokenResponseBody$Outbound` instead. */
    export type Outbound = OauthGetTokenResponseBody$Outbound;
}
