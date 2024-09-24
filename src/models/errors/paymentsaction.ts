/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  ErrorT,
  ErrorT$inboundSchema,
  ErrorT$Outbound,
  ErrorT$outboundSchema,
} from "./error.js";
import {
  FieldError,
  FieldError$inboundSchema,
  FieldError$Outbound,
  FieldError$outboundSchema,
} from "./fielderror.js";

/**
 * An error has occurred, and further details are contained in the response
 */
export type PaymentsActionResponseBody = ErrorT | FieldError;

/** @internal */
export const PaymentsActionResponseBody$inboundSchema: z.ZodType<
  PaymentsActionResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([ErrorT$inboundSchema, FieldError$inboundSchema]);

/** @internal */
export type PaymentsActionResponseBody$Outbound =
  | ErrorT$Outbound
  | FieldError$Outbound;

/** @internal */
export const PaymentsActionResponseBody$outboundSchema: z.ZodType<
  PaymentsActionResponseBody$Outbound,
  z.ZodTypeDef,
  PaymentsActionResponseBody
> = z.union([ErrorT$outboundSchema, FieldError$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentsActionResponseBody$ {
  /** @deprecated use `PaymentsActionResponseBody$inboundSchema` instead. */
  export const inboundSchema = PaymentsActionResponseBody$inboundSchema;
  /** @deprecated use `PaymentsActionResponseBody$outboundSchema` instead. */
  export const outboundSchema = PaymentsActionResponseBody$outboundSchema;
  /** @deprecated use `PaymentsActionResponseBody$Outbound` instead. */
  export type Outbound = PaymentsActionResponseBody$Outbound;
}
