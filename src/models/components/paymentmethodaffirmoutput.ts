/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export enum PaymentMethodAffirmTag {
    Affirm = "affirm",
}

export type PaymentMethodAffirmOutput = {
    dotTag: PaymentMethodAffirmTag;
};

export type PaymentMethodAffirm = {
    dotTag: PaymentMethodAffirmTag;
    /**
     * Return URL to return to after payment completion in Affirm.
     */
    returnUrl: string;
};

/** @internal */
export const PaymentMethodAffirmTag$inboundSchema: z.ZodNativeEnum<typeof PaymentMethodAffirmTag> =
    z.nativeEnum(PaymentMethodAffirmTag);

/** @internal */
export const PaymentMethodAffirmTag$outboundSchema: z.ZodNativeEnum<typeof PaymentMethodAffirmTag> =
    PaymentMethodAffirmTag$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentMethodAffirmTag$ {
    /** @deprecated use `PaymentMethodAffirmTag$inboundSchema` instead. */
    export const inboundSchema = PaymentMethodAffirmTag$inboundSchema;
    /** @deprecated use `PaymentMethodAffirmTag$outboundSchema` instead. */
    export const outboundSchema = PaymentMethodAffirmTag$outboundSchema;
}

/** @internal */
export const PaymentMethodAffirmOutput$inboundSchema: z.ZodType<
    PaymentMethodAffirmOutput,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ".tag": PaymentMethodAffirmTag$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            ".tag": "dotTag",
        });
    });

/** @internal */
export type PaymentMethodAffirmOutput$Outbound = {
    ".tag": string;
};

/** @internal */
export const PaymentMethodAffirmOutput$outboundSchema: z.ZodType<
    PaymentMethodAffirmOutput$Outbound,
    z.ZodTypeDef,
    PaymentMethodAffirmOutput
> = z
    .object({
        dotTag: PaymentMethodAffirmTag$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            dotTag: ".tag",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentMethodAffirmOutput$ {
    /** @deprecated use `PaymentMethodAffirmOutput$inboundSchema` instead. */
    export const inboundSchema = PaymentMethodAffirmOutput$inboundSchema;
    /** @deprecated use `PaymentMethodAffirmOutput$outboundSchema` instead. */
    export const outboundSchema = PaymentMethodAffirmOutput$outboundSchema;
    /** @deprecated use `PaymentMethodAffirmOutput$Outbound` instead. */
    export type Outbound = PaymentMethodAffirmOutput$Outbound;
}

/** @internal */
export const PaymentMethodAffirm$inboundSchema: z.ZodType<
    PaymentMethodAffirm,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ".tag": PaymentMethodAffirmTag$inboundSchema,
        return_url: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            ".tag": "dotTag",
            return_url: "returnUrl",
        });
    });

/** @internal */
export type PaymentMethodAffirm$Outbound = {
    ".tag": string;
    return_url: string;
};

/** @internal */
export const PaymentMethodAffirm$outboundSchema: z.ZodType<
    PaymentMethodAffirm$Outbound,
    z.ZodTypeDef,
    PaymentMethodAffirm
> = z
    .object({
        dotTag: PaymentMethodAffirmTag$outboundSchema,
        returnUrl: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            dotTag: ".tag",
            returnUrl: "return_url",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentMethodAffirm$ {
    /** @deprecated use `PaymentMethodAffirm$inboundSchema` instead. */
    export const inboundSchema = PaymentMethodAffirm$inboundSchema;
    /** @deprecated use `PaymentMethodAffirm$outboundSchema` instead. */
    export const outboundSchema = PaymentMethodAffirm$outboundSchema;
    /** @deprecated use `PaymentMethodAffirm$Outbound` instead. */
    export type Outbound = PaymentMethodAffirm$Outbound;
}
