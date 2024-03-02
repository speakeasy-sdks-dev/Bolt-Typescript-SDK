/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type OrdersCreateSecurity = {
    apiKey: string;
};

export type OrdersCreateRequest = {
    /**
     * The publicly viewable identifier used to identify a merchant division.
     */
    xPublishableKey: string;
    order: components.Order;
};

export type OrdersCreateResponse = {
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
     * The order was successfuly created
     */
    orderResponse?: components.OrderResponse | undefined;
};

/** @internal */
export namespace OrdersCreateSecurity$ {
    export type Inbound = {
        "api-key": string;
    };

    export const inboundSchema: z.ZodType<OrdersCreateSecurity, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, OrdersCreateSecurity> = z
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
export namespace OrdersCreateRequest$ {
    export type Inbound = {
        "X-Publishable-Key": string;
        order: components.Order$.Inbound;
    };

    export const inboundSchema: z.ZodType<OrdersCreateRequest, z.ZodTypeDef, Inbound> = z
        .object({
            "X-Publishable-Key": z.string(),
            order: components.Order$.inboundSchema,
        })
        .transform((v) => {
            return {
                xPublishableKey: v["X-Publishable-Key"],
                order: v.order,
            };
        });

    export type Outbound = {
        "X-Publishable-Key": string;
        order: components.Order$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, OrdersCreateRequest> = z
        .object({
            xPublishableKey: z.string(),
            order: components.Order$.outboundSchema,
        })
        .transform((v) => {
            return {
                "X-Publishable-Key": v.xPublishableKey,
                order: v.order,
            };
        });
}

/** @internal */
export namespace OrdersCreateResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        "order-response"?: components.OrderResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<OrdersCreateResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            "order-response": components.OrderResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v["order-response"] === undefined
                    ? null
                    : { orderResponse: v["order-response"] }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        "order-response"?: components.OrderResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, OrdersCreateResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            orderResponse: components.OrderResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.orderResponse === undefined ? null : { "order-response": v.orderResponse }),
            };
        });
}
