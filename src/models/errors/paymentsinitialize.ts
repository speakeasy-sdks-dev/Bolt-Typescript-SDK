/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    CartError,
    CartError$inboundSchema,
    CartError$Outbound,
    CartError$outboundSchema,
} from "./carterror.js";
import {
    CreditCardError,
    CreditCardError$inboundSchema,
    CreditCardError$Outbound,
    CreditCardError$outboundSchema,
} from "./creditcarderror.js";
import { ErrorT, ErrorT$inboundSchema, ErrorT$Outbound, ErrorT$outboundSchema } from "./error.js";
import {
    FieldError,
    FieldError$inboundSchema,
    FieldError$Outbound,
    FieldError$outboundSchema,
} from "./fielderror.js";
import * as z from "zod";

/**
 * The payment operation cannot complete
 */
export type PaymentsInitializeResponseBody = ErrorT | FieldError | CartError | CreditCardError;

/** @internal */
export const PaymentsInitializeResponseBody$inboundSchema: z.ZodType<
    PaymentsInitializeResponseBody,
    z.ZodTypeDef,
    unknown
> = z.union([
    ErrorT$inboundSchema,
    FieldError$inboundSchema,
    CartError$inboundSchema,
    CreditCardError$inboundSchema,
]);

/** @internal */
export type PaymentsInitializeResponseBody$Outbound =
    | ErrorT$Outbound
    | FieldError$Outbound
    | CartError$Outbound
    | CreditCardError$Outbound;

/** @internal */
export const PaymentsInitializeResponseBody$outboundSchema: z.ZodType<
    PaymentsInitializeResponseBody$Outbound,
    z.ZodTypeDef,
    PaymentsInitializeResponseBody
> = z.union([
    ErrorT$outboundSchema,
    FieldError$outboundSchema,
    CartError$outboundSchema,
    CreditCardError$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentsInitializeResponseBody$ {
    /** @deprecated use `PaymentsInitializeResponseBody$inboundSchema` instead. */
    export const inboundSchema = PaymentsInitializeResponseBody$inboundSchema;
    /** @deprecated use `PaymentsInitializeResponseBody$outboundSchema` instead. */
    export const outboundSchema = PaymentsInitializeResponseBody$outboundSchema;
    /** @deprecated use `PaymentsInitializeResponseBody$Outbound` instead. */
    export type Outbound = PaymentsInitializeResponseBody$Outbound;
}
