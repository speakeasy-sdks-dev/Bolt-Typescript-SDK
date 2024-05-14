/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Cart, Cart$ } from "./cart";
import { PaymentMethodExtended, PaymentMethodExtended$ } from "./paymentmethodextended";
import * as z from "zod";

export type PaymentInitializeRequest = {
    cart: Cart;
    paymentMethod: PaymentMethodExtended;
};

/** @internal */
export namespace PaymentInitializeRequest$ {
    export const inboundSchema: z.ZodType<PaymentInitializeRequest, z.ZodTypeDef, unknown> = z
        .object({
            cart: Cart$.inboundSchema,
            payment_method: PaymentMethodExtended$.inboundSchema,
        })
        .transform((v) => {
            return {
                cart: v.cart,
                paymentMethod: v.payment_method,
            };
        });

    export type Outbound = {
        cart: Cart$.Outbound;
        payment_method: PaymentMethodExtended$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentInitializeRequest> = z
        .object({
            cart: Cart$.outboundSchema,
            paymentMethod: PaymentMethodExtended$.outboundSchema,
        })
        .transform((v) => {
            return {
                cart: v.cart,
                payment_method: v.paymentMethod,
            };
        });
}
