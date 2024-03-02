/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type GuestPaymentsUpdateSecurity = {
    apiKey: string;
};

export type GuestPaymentsUpdateRequest = {
    /**
     * The ID of the guest payment to update
     */
    id: string;
    /**
     * The publicly viewable identifier used to identify a merchant division.
     */
    xPublishableKey: string;
    paymentUpdateRequest: components.PaymentUpdateRequest;
};

export type GuestPaymentsUpdateResponse = {
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
     * The pending payment was successfully updated
     */
    paymentResponse?: components.PaymentResponse | undefined;
};

/** @internal */
export namespace GuestPaymentsUpdateSecurity$ {
    export type Inbound = {
        "api-key": string;
    };

    export const inboundSchema: z.ZodType<GuestPaymentsUpdateSecurity, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GuestPaymentsUpdateSecurity> = z
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
export namespace GuestPaymentsUpdateRequest$ {
    export type Inbound = {
        id: string;
        "X-Publishable-Key": string;
        "payment-update-request": components.PaymentUpdateRequest$.Inbound;
    };

    export const inboundSchema: z.ZodType<GuestPaymentsUpdateRequest, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
            "X-Publishable-Key": z.string(),
            "payment-update-request": components.PaymentUpdateRequest$.inboundSchema,
        })
        .transform((v) => {
            return {
                id: v.id,
                xPublishableKey: v["X-Publishable-Key"],
                paymentUpdateRequest: v["payment-update-request"],
            };
        });

    export type Outbound = {
        id: string;
        "X-Publishable-Key": string;
        "payment-update-request": components.PaymentUpdateRequest$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GuestPaymentsUpdateRequest> = z
        .object({
            id: z.string(),
            xPublishableKey: z.string(),
            paymentUpdateRequest: components.PaymentUpdateRequest$.outboundSchema,
        })
        .transform((v) => {
            return {
                id: v.id,
                "X-Publishable-Key": v.xPublishableKey,
                "payment-update-request": v.paymentUpdateRequest,
            };
        });
}

/** @internal */
export namespace GuestPaymentsUpdateResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        "payment-response"?: components.PaymentResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GuestPaymentsUpdateResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            "payment-response": components.PaymentResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v["payment-response"] === undefined
                    ? null
                    : { paymentResponse: v["payment-response"] }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        "payment-response"?: components.PaymentResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GuestPaymentsUpdateResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            paymentResponse: components.PaymentResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.paymentResponse === undefined
                    ? null
                    : { "payment-response": v.paymentResponse }),
            };
        });
}
