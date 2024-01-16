/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    AddressReferenceExplicit,
    AddressReferenceExplicit$,
    AddressReferenceExplicitInput,
    AddressReferenceExplicitInput$,
    AddressReferenceExplicitTag,
} from "./addressreferenceexplicit";
import {
    AddressReferenceId,
    AddressReferenceId$,
    AddressReferenceIdTag,
} from "./addressreferenceid";
import { z } from "zod";

export enum DotTag {
    CreditCard = "credit_card",
}

/**
 * The credit card's network.
 */
export enum Network {
    Visa = "visa",
    Mastercard = "mastercard",
    Amex = "amex",
    Discover = "discover",
    Jcb = "jcb",
    Unionpay = "unionpay",
    Alliancedata = "alliancedata",
    Citiplcc = "citiplcc",
}

export type PaymentMethodCreditCard = {
    dotTag: DotTag;
    id?: string | undefined;
    billingAddress:
        | (AddressReferenceId & { dotTag: AddressReferenceIdTag.Id })
        | (AddressReferenceExplicit & { dotTag: AddressReferenceExplicitTag.Explicit });
    /**
     * The credit card's network.
     */
    network: Network;
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
    billingAddress:
        | (AddressReferenceId & { dotTag: AddressReferenceIdTag.Id })
        | (AddressReferenceExplicitInput & { dotTag: AddressReferenceExplicitTag.Explicit });
    /**
     * The credit card's network.
     */
    network: Network;
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
export const DotTag$ = z.nativeEnum(DotTag);

/** @internal */
export const Network$ = z.nativeEnum(Network);

/** @internal */
export namespace PaymentMethodCreditCard$ {
    export type Inbound = {
        ".tag": DotTag;
        id?: string | undefined;
        billing_address:
            | (AddressReferenceId$.Inbound & { ".tag": AddressReferenceIdTag.Id })
            | (AddressReferenceExplicit$.Inbound & {
                  ".tag": AddressReferenceExplicitTag.Explicit;
              });
        network: Network;
        last4: string;
        expiration: string;
    };

    export const inboundSchema: z.ZodType<PaymentMethodCreditCard, z.ZodTypeDef, Inbound> = z
        .object({
            ".tag": DotTag$,
            id: z.string().optional(),
            billing_address: z.union([
                AddressReferenceId$.inboundSchema.and(
                    z.object({ ".tag": z.literal(AddressReferenceIdTag.Id) })
                ),
                AddressReferenceExplicit$.inboundSchema.and(
                    z.object({ ".tag": z.literal(AddressReferenceExplicitTag.Explicit) })
                ),
            ]),
            network: Network$,
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
        billing_address:
            | (AddressReferenceId$.Outbound & { ".tag": AddressReferenceIdTag.Id })
            | (AddressReferenceExplicit$.Outbound & {
                  ".tag": AddressReferenceExplicitTag.Explicit;
              });
        network: Network;
        last4: string;
        expiration: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentMethodCreditCard> = z
        .object({
            dotTag: DotTag$,
            id: z.string().optional(),
            billingAddress: z.union([
                AddressReferenceId$.outboundSchema.and(
                    z.object({ dotTag: z.literal(AddressReferenceIdTag.Id) })
                ),
                AddressReferenceExplicit$.outboundSchema.and(
                    z.object({ dotTag: z.literal(AddressReferenceExplicitTag.Explicit) })
                ),
            ]),
            network: Network$,
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
    export type Inbound = {
        ".tag": DotTag;
        billing_address:
            | (AddressReferenceId$.Inbound & { ".tag": AddressReferenceIdTag.Id })
            | (AddressReferenceExplicitInput$.Inbound & {
                  ".tag": AddressReferenceExplicitTag.Explicit;
              });
        network: Network;
        bin: string;
        last4: string;
        expiration: string;
        token: string;
    };

    export const inboundSchema: z.ZodType<PaymentMethodCreditCardInput, z.ZodTypeDef, Inbound> = z
        .object({
            ".tag": DotTag$,
            billing_address: z.union([
                AddressReferenceId$.inboundSchema.and(
                    z.object({ ".tag": z.literal(AddressReferenceIdTag.Id) })
                ),
                AddressReferenceExplicitInput$.inboundSchema.and(
                    z.object({ ".tag": z.literal(AddressReferenceExplicitTag.Explicit) })
                ),
            ]),
            network: Network$,
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
        billing_address:
            | (AddressReferenceId$.Outbound & { ".tag": AddressReferenceIdTag.Id })
            | (AddressReferenceExplicitInput$.Outbound & {
                  ".tag": AddressReferenceExplicitTag.Explicit;
              });
        network: Network;
        bin: string;
        last4: string;
        expiration: string;
        token: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentMethodCreditCardInput> = z
        .object({
            dotTag: DotTag$,
            billingAddress: z.union([
                AddressReferenceId$.outboundSchema.and(
                    z.object({ dotTag: z.literal(AddressReferenceIdTag.Id) })
                ),
                AddressReferenceExplicitInput$.outboundSchema.and(
                    z.object({ dotTag: z.literal(AddressReferenceExplicitTag.Explicit) })
                ),
            ]),
            network: Network$,
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
