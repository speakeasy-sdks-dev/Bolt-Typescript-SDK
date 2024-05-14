/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type TestingAccountPhoneGetSecurity = {
    apiKey: string;
};

export type TestingAccountPhoneGetRequest = {
    /**
     * The publicly viewable identifier used to identify a merchant division.
     */
    xPublishableKey: string;
};

export type TestingAccountPhoneGetResponse = {
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
     * Successfully generated a random, fictitious, unassigned phone number.
     */
    accountTestPhoneData?: components.AccountTestPhoneData | undefined;
};

/** @internal */
export namespace TestingAccountPhoneGetSecurity$ {
    export const inboundSchema: z.ZodType<TestingAccountPhoneGetSecurity, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TestingAccountPhoneGetSecurity> =
        z
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
export namespace TestingAccountPhoneGetRequest$ {
    export const inboundSchema: z.ZodType<TestingAccountPhoneGetRequest, z.ZodTypeDef, unknown> = z
        .object({
            "X-Publishable-Key": z.string(),
        })
        .transform((v) => {
            return {
                xPublishableKey: v["X-Publishable-Key"],
            };
        });

    export type Outbound = {
        "X-Publishable-Key": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TestingAccountPhoneGetRequest> =
        z
            .object({
                xPublishableKey: z.string(),
            })
            .transform((v) => {
                return {
                    "X-Publishable-Key": v.xPublishableKey,
                };
            });
}

/** @internal */
export namespace TestingAccountPhoneGetResponse$ {
    export const inboundSchema: z.ZodType<TestingAccountPhoneGetResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            "account-test-phone-data": components.AccountTestPhoneData$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v["account-test-phone-data"] === undefined
                    ? null
                    : { accountTestPhoneData: v["account-test-phone-data"] }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        "account-test-phone-data"?: components.AccountTestPhoneData$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TestingAccountPhoneGetResponse> =
        z
            .object({
                contentType: z.string(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
                accountTestPhoneData: components.AccountTestPhoneData$.outboundSchema.optional(),
            })
            .transform((v) => {
                return {
                    ContentType: v.contentType,
                    StatusCode: v.statusCode,
                    RawResponse: v.rawResponse,
                    ...(v.accountTestPhoneData === undefined
                        ? null
                        : { "account-test-phone-data": v.accountTestPhoneData }),
                };
            });
}
