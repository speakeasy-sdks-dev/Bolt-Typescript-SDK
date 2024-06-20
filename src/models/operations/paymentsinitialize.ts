/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type PaymentsInitializeRequest = {
    /**
     * The publicly viewable identifier used to identify a merchant division.
     */
    xPublishableKey: string;
    paymentInitializeRequest: components.PaymentInitializeRequest;
};

export type PaymentsInitializeResponse = {
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
     * The payment was successfully initialized, and was either immediately finalized or is pending
     */
    paymentResponse?: components.PaymentResponse | undefined;
};

/** @internal */
export namespace PaymentsInitializeRequest$ {
    export const inboundSchema: z.ZodType<PaymentsInitializeRequest, z.ZodTypeDef, unknown> = z
        .object({
            "X-Publishable-Key": z.string(),
            "payment-initialize-request": components.PaymentInitializeRequest$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "X-Publishable-Key": "xPublishableKey",
                "payment-initialize-request": "paymentInitializeRequest",
            });
        });

    export type Outbound = {
        "X-Publishable-Key": string;
        "payment-initialize-request": components.PaymentInitializeRequest$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentsInitializeRequest> = z
        .object({
            xPublishableKey: z.string(),
            paymentInitializeRequest: components.PaymentInitializeRequest$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xPublishableKey: "X-Publishable-Key",
                paymentInitializeRequest: "payment-initialize-request",
            });
        });
}

/** @internal */
export namespace PaymentsInitializeResponse$ {
    export const inboundSchema: z.ZodType<PaymentsInitializeResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            "payment-response": components.PaymentResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
                "payment-response": "paymentResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        "payment-response"?: components.PaymentResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentsInitializeResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            paymentResponse: components.PaymentResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
                paymentResponse: "payment-response",
            });
        });
}
