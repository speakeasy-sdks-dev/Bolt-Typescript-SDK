/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type TestingCreditCardGetSecurity = {
    apiKey: string;
};

/**
 * The expected authorization result when using the generated token for a payment.
 */
export enum Type {
    Approve = "approve",
    Decline = "decline",
}

export type TestingCreditCardGetRequestBody = {
    /**
     * The expected authorization result when using the generated token for a payment.
     */
    type: Type;
};

export type TestingCreditCardGetResponse = {
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
    /**
     * Successfully generated test credit card details
     */
    testCreditCard?: components.TestCreditCard | undefined;
};

/** @internal */
export namespace TestingCreditCardGetSecurity$ {
    export type Inbound = {
        "api-key": string;
    };

    export const inboundSchema: z.ZodType<TestingCreditCardGetSecurity, z.ZodTypeDef, Inbound> = z
        .object({
            "api-key": z.string(),
        })
        .transform((v) => {
            return {
                apiKey: v["api-key"],
            };
        });

    export type Outbound = {
        "api-key": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TestingCreditCardGetSecurity> = z
        .object({
            apiKey: z.string(),
        })
        .transform((v) => {
            return {
                "api-key": v.apiKey,
            };
        });
}

/** @internal */
export const Type$ = z.nativeEnum(Type);

/** @internal */
export namespace TestingCreditCardGetRequestBody$ {
    export type Inbound = {
        type: Type;
    };

    export const inboundSchema: z.ZodType<TestingCreditCardGetRequestBody, z.ZodTypeDef, Inbound> =
        z
            .object({
                type: Type$,
            })
            .transform((v) => {
                return {
                    type: v.type,
                };
            });

    export type Outbound = {
        type: Type;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TestingCreditCardGetRequestBody
    > = z
        .object({
            type: Type$,
        })
        .transform((v) => {
            return {
                type: v.type,
            };
        });
}

/** @internal */
export namespace TestingCreditCardGetResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        "test-credit-card"?: components.TestCreditCard$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<TestingCreditCardGetResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            "test-credit-card": components.TestCreditCard$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v["test-credit-card"] === undefined
                    ? null
                    : { testCreditCard: v["test-credit-card"] }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        "test-credit-card"?: components.TestCreditCard$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TestingCreditCardGetResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            testCreditCard: components.TestCreditCard$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.testCreditCard === undefined
                    ? null
                    : { "test-credit-card": v.testCreditCard }),
            };
        });
}
