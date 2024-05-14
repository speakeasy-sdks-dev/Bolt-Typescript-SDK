/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AddressListing, AddressListing$ } from "./addresslisting";
import { PaymentMethod, PaymentMethod$ } from "./paymentmethod";
import { Profile, Profile$ } from "./profile";
import * as z from "zod";

export type Account = {
    /**
     * A list of addresses associated with this account.
     */
    addresses: Array<AddressListing>;
    /**
     * A list of payment methods associated with this account.
     */
    paymentMethods: Array<PaymentMethod>;
    profile?: Profile | undefined;
};

/** @internal */
export namespace Account$ {
    export const inboundSchema: z.ZodType<Account, z.ZodTypeDef, unknown> = z
        .object({
            addresses: z.array(AddressListing$.inboundSchema),
            payment_methods: z.array(PaymentMethod$.inboundSchema),
            profile: Profile$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                addresses: v.addresses,
                paymentMethods: v.payment_methods,
                ...(v.profile === undefined ? null : { profile: v.profile }),
            };
        });

    export type Outbound = {
        addresses: Array<AddressListing$.Outbound>;
        payment_methods: Array<PaymentMethod$.Outbound>;
        profile?: Profile$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Account> = z
        .object({
            addresses: z.array(AddressListing$.outboundSchema),
            paymentMethods: z.array(PaymentMethod$.outboundSchema),
            profile: Profile$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                addresses: v.addresses,
                payment_methods: v.paymentMethods,
                ...(v.profile === undefined ? null : { profile: v.profile }),
            };
        });
}
