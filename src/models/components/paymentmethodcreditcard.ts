/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AddressReference, AddressReference$ } from "./addressreference";
import { AddressReferenceInput, AddressReferenceInput$ } from "./addressreferenceinput";
import { CreditCardNetwork, CreditCardNetwork$ } from "./creditcardnetwork";
import * as z from "zod";

export enum DotTag {
    CreditCard = "credit_card",
}

export type PaymentMethodCreditCard = {
    dotTag: DotTag;
    id?: string | undefined;
    billingAddress: AddressReference;
    /**
     * The credit card's network.
     */
    network: CreditCardNetwork;
    /**
     * The account number's last four digits.
     */
    last4: string;
    /**
     * The expiration date, in YYYY-MM format.
     */
    expiration: string;
};

export type PaymentMethodCreditCardInput = {
    dotTag: DotTag;
    billingAddress: AddressReferenceInput;
    /**
     * The credit card's network.
     */
    network: CreditCardNetwork;
    /**
     * The Bank Identification Number (BIN). This is typically the first 4 to 6 digits of the account number.
     */
    bin: string;
    /**
     * The account number's last four digits.
     */
    last4: string;
    /**
     * The expiration date, in YYYY-MM format.
     */
    expiration: string;
    /**
     * The Bolt token associated with the credit card.
     */
    token: string;
};

/** @internal */
export const DotTag$: z.ZodNativeEnum<typeof DotTag> = z.nativeEnum(DotTag);

/** @internal */
export namespace PaymentMethodCreditCard$ {
    export const inboundSchema: z.ZodType<PaymentMethodCreditCard, z.ZodTypeDef, unknown> = z
        .object({
            ".tag": DotTag$,
            id: z.string().optional(),
            billing_address: AddressReference$.inboundSchema,
            network: CreditCardNetwork$,
            last4: z.string(),
            expiration: z.string(),
        })
        .transform((v) => {
            return {
                dotTag: v[".tag"],
                ...(v.id === undefined ? null : { id: v.id }),
                billingAddress: v.billing_address,
                network: v.network,
                last4: v.last4,
                expiration: v.expiration,
            };
        });

    export type Outbound = {
        ".tag": DotTag;
        id?: string | undefined;
        billing_address: AddressReference$.Outbound;
        network: CreditCardNetwork;
        last4: string;
        expiration: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentMethodCreditCard> = z
        .object({
            dotTag: DotTag$,
            id: z.string().optional(),
            billingAddress: AddressReference$.outboundSchema,
            network: CreditCardNetwork$,
            last4: z.string(),
            expiration: z.string(),
        })
        .transform((v) => {
            return {
                ".tag": v.dotTag,
                ...(v.id === undefined ? null : { id: v.id }),
                billing_address: v.billingAddress,
                network: v.network,
                last4: v.last4,
                expiration: v.expiration,
            };
        });
}

/** @internal */
export namespace PaymentMethodCreditCardInput$ {
    export const inboundSchema: z.ZodType<PaymentMethodCreditCardInput, z.ZodTypeDef, unknown> = z
        .object({
            ".tag": DotTag$,
            billing_address: AddressReferenceInput$.inboundSchema,
            network: CreditCardNetwork$,
            bin: z.string(),
            last4: z.string(),
            expiration: z.string(),
            token: z.string(),
        })
        .transform((v) => {
            return {
                dotTag: v[".tag"],
                billingAddress: v.billing_address,
                network: v.network,
                bin: v.bin,
                last4: v.last4,
                expiration: v.expiration,
                token: v.token,
            };
        });

    export type Outbound = {
        ".tag": DotTag;
        billing_address: AddressReferenceInput$.Outbound;
        network: CreditCardNetwork;
        bin: string;
        last4: string;
        expiration: string;
        token: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentMethodCreditCardInput> = z
        .object({
            dotTag: DotTag$,
            billingAddress: AddressReferenceInput$.outboundSchema,
            network: CreditCardNetwork$,
            bin: z.string(),
            last4: z.string(),
            expiration: z.string(),
            token: z.string(),
        })
        .transform((v) => {
            return {
                ".tag": v.dotTag,
                billing_address: v.billingAddress,
                network: v.network,
                bin: v.bin,
                last4: v.last4,
                expiration: v.expiration,
                token: v.token,
            };
        });
}
