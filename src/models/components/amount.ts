/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * A supported currency.
 */
export enum Currency {
    Aud = "AUD",
    Cad = "CAD",
    Eur = "EUR",
    Gbp = "GBP",
    Usd = "USD",
}

/**
 * A monetary amount, i.e. a base unit amount and a supported currency.
 */
export type Amount = {
    /**
     * A supported currency.
     */
    currency: Currency;
    /**
     * A monetary amount, represented in its base units (e.g. USD/EUR cents).
     */
    units: number;
};

/** @internal */
export const Currency$inboundSchema: z.ZodNativeEnum<typeof Currency> = z.nativeEnum(Currency);

/** @internal */
export const Currency$outboundSchema: z.ZodNativeEnum<typeof Currency> = Currency$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Currency$ {
    /** @deprecated use `Currency$inboundSchema` instead. */
    export const inboundSchema = Currency$inboundSchema;
    /** @deprecated use `Currency$outboundSchema` instead. */
    export const outboundSchema = Currency$outboundSchema;
}

/** @internal */
export const Amount$inboundSchema: z.ZodType<Amount, z.ZodTypeDef, unknown> = z.object({
    currency: Currency$inboundSchema,
    units: z.number().int(),
});

/** @internal */
export type Amount$Outbound = {
    currency: string;
    units: number;
};

/** @internal */
export const Amount$outboundSchema: z.ZodType<Amount$Outbound, z.ZodTypeDef, Amount> = z.object({
    currency: Currency$outboundSchema,
    units: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Amount$ {
    /** @deprecated use `Amount$inboundSchema` instead. */
    export const inboundSchema = Amount$inboundSchema;
    /** @deprecated use `Amount$outboundSchema` instead. */
    export const outboundSchema = Amount$outboundSchema;
    /** @deprecated use `Amount$Outbound` instead. */
    export type Outbound = Amount$Outbound;
}
