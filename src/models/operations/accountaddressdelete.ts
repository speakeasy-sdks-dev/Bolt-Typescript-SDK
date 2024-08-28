/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type AccountAddressDeleteRequest = {
    /**
     * The ID of the address to delete
     */
    id: string;
    /**
     * The publicly shareable identifier used to identify your Bolt merchant division.
     */
    xPublishableKey: string;
    /**
     * A unique identifier for a shopper's device, generated by Bolt. This header is required for proper attribution of this operation to your analytics reports. Omitting this header may result in incorrect statistics.
     */
    xMerchantClientId: string;
};

export type AccountAddressDeleteResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export const AccountAddressDeleteRequest$inboundSchema: z.ZodType<
    AccountAddressDeleteRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        "X-Publishable-Key": z.string(),
        "X-Merchant-Client-Id": z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            "X-Publishable-Key": "xPublishableKey",
            "X-Merchant-Client-Id": "xMerchantClientId",
        });
    });

/** @internal */
export type AccountAddressDeleteRequest$Outbound = {
    id: string;
    "X-Publishable-Key": string;
    "X-Merchant-Client-Id": string;
};

/** @internal */
export const AccountAddressDeleteRequest$outboundSchema: z.ZodType<
    AccountAddressDeleteRequest$Outbound,
    z.ZodTypeDef,
    AccountAddressDeleteRequest
> = z
    .object({
        id: z.string(),
        xPublishableKey: z.string(),
        xMerchantClientId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            xPublishableKey: "X-Publishable-Key",
            xMerchantClientId: "X-Merchant-Client-Id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountAddressDeleteRequest$ {
    /** @deprecated use `AccountAddressDeleteRequest$inboundSchema` instead. */
    export const inboundSchema = AccountAddressDeleteRequest$inboundSchema;
    /** @deprecated use `AccountAddressDeleteRequest$outboundSchema` instead. */
    export const outboundSchema = AccountAddressDeleteRequest$outboundSchema;
    /** @deprecated use `AccountAddressDeleteRequest$Outbound` instead. */
    export type Outbound = AccountAddressDeleteRequest$Outbound;
}

/** @internal */
export const AccountAddressDeleteResponse$inboundSchema: z.ZodType<
    AccountAddressDeleteResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type AccountAddressDeleteResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const AccountAddressDeleteResponse$outboundSchema: z.ZodType<
    AccountAddressDeleteResponse$Outbound,
    z.ZodTypeDef,
    AccountAddressDeleteResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountAddressDeleteResponse$ {
    /** @deprecated use `AccountAddressDeleteResponse$inboundSchema` instead. */
    export const inboundSchema = AccountAddressDeleteResponse$inboundSchema;
    /** @deprecated use `AccountAddressDeleteResponse$outboundSchema` instead. */
    export const outboundSchema = AccountAddressDeleteResponse$outboundSchema;
    /** @deprecated use `AccountAddressDeleteResponse$Outbound` instead. */
    export type Outbound = AccountAddressDeleteResponse$Outbound;
}
