/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AddressListing, AddressListing$ } from "./addresslisting";
import {
    PaymentMethodAffirmOutput,
    PaymentMethodAffirmOutput$,
    PaymentMethodAffirmTag,
} from "./paymentmethodaffirmoutput";
import {
    PaymentMethodAfterpayOutput,
    PaymentMethodAfterpayOutput$,
    PaymentMethodAfterpayTag,
} from "./paymentmethodafterpayoutput";
import {
    DotTag,
    PaymentMethodCreditCard,
    PaymentMethodCreditCard$,
} from "./paymentmethodcreditcard";
import {
    PaymentMethodKlarnaAccountOutput,
    PaymentMethodKlarnaAccountOutput$,
    PaymentMethodKlarnaAccountTag,
} from "./paymentmethodklarnaaccountoutput";
import {
    PaymentMethodKlarnaOutput,
    PaymentMethodKlarnaOutput$,
    PaymentMethodKlarnaTag,
} from "./paymentmethodklarnaoutput";
import {
    PaymentMethodKlarnaPaynowOutput,
    PaymentMethodKlarnaPaynowOutput$,
    PaymentMethodKlarnaPaynowTag,
} from "./paymentmethodklarnapaynowoutput";
import {
    PaymentMethodPaypalOutput,
    PaymentMethodPaypalOutput$,
    PaymentMethodPaypalTag,
} from "./paymentmethodpaypaloutput";
import { Profile, Profile$ } from "./profile";
import { z } from "zod";

export type Account = {
    /**
     * A list of addresses associated with this account.
     */
    addresses: Array<AddressListing>;
    /**
     * A list of payment methods associated with this account.
     */
    paymentMethods: Array<
        | (PaymentMethodPaypalOutput & { dotTag: PaymentMethodPaypalTag.Paypal })
        | (PaymentMethodAffirmOutput & { dotTag: PaymentMethodAffirmTag.Affirm })
        | (PaymentMethodAfterpayOutput & { dotTag: PaymentMethodAfterpayTag.Afterpay })
        | (PaymentMethodKlarnaOutput & { dotTag: PaymentMethodKlarnaTag.Klarna })
        | (PaymentMethodKlarnaAccountOutput & {
              dotTag: PaymentMethodKlarnaAccountTag.KlarnaAccount;
          })
        | (PaymentMethodKlarnaPaynowOutput & { dotTag: PaymentMethodKlarnaPaynowTag.KlarnaPaynow })
        | (PaymentMethodCreditCard & { dotTag: DotTag.CreditCard })
    >;
    profile?: Profile | undefined;
};

/** @internal */
export namespace Account$ {
    export type Inbound = {
        addresses: Array<AddressListing$.Inbound>;
        payment_methods: Array<
            | (PaymentMethodPaypalOutput$.Inbound & { ".tag": PaymentMethodPaypalTag.Paypal })
            | (PaymentMethodAffirmOutput$.Inbound & { ".tag": PaymentMethodAffirmTag.Affirm })
            | (PaymentMethodAfterpayOutput$.Inbound & { ".tag": PaymentMethodAfterpayTag.Afterpay })
            | (PaymentMethodKlarnaOutput$.Inbound & { ".tag": PaymentMethodKlarnaTag.Klarna })
            | (PaymentMethodKlarnaAccountOutput$.Inbound & {
                  ".tag": PaymentMethodKlarnaAccountTag.KlarnaAccount;
              })
            | (PaymentMethodKlarnaPaynowOutput$.Inbound & {
                  ".tag": PaymentMethodKlarnaPaynowTag.KlarnaPaynow;
              })
            | (PaymentMethodCreditCard$.Inbound & { ".tag": DotTag.CreditCard })
        >;
        profile?: Profile$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<Account, z.ZodTypeDef, Inbound> = z
        .object({
            addresses: z.array(AddressListing$.inboundSchema),
            payment_methods: z.array(
                z.union([
                    PaymentMethodPaypalOutput$.inboundSchema.and(
                        z.object({ ".tag": z.literal(PaymentMethodPaypalTag.Paypal) })
                    ),
                    PaymentMethodAffirmOutput$.inboundSchema.and(
                        z.object({ ".tag": z.literal(PaymentMethodAffirmTag.Affirm) })
                    ),
                    PaymentMethodAfterpayOutput$.inboundSchema.and(
                        z.object({ ".tag": z.literal(PaymentMethodAfterpayTag.Afterpay) })
                    ),
                    PaymentMethodKlarnaOutput$.inboundSchema.and(
                        z.object({ ".tag": z.literal(PaymentMethodKlarnaTag.Klarna) })
                    ),
                    PaymentMethodKlarnaAccountOutput$.inboundSchema.and(
                        z.object({ ".tag": z.literal(PaymentMethodKlarnaAccountTag.KlarnaAccount) })
                    ),
                    PaymentMethodKlarnaPaynowOutput$.inboundSchema.and(
                        z.object({ ".tag": z.literal(PaymentMethodKlarnaPaynowTag.KlarnaPaynow) })
                    ),
                    PaymentMethodCreditCard$.inboundSchema.and(
                        z.object({ ".tag": z.literal(DotTag.CreditCard) })
                    ),
                ])
            ),
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
        payment_methods: Array<
            | (PaymentMethodPaypalOutput$.Outbound & { ".tag": PaymentMethodPaypalTag.Paypal })
            | (PaymentMethodAffirmOutput$.Outbound & { ".tag": PaymentMethodAffirmTag.Affirm })
            | (PaymentMethodAfterpayOutput$.Outbound & {
                  ".tag": PaymentMethodAfterpayTag.Afterpay;
              })
            | (PaymentMethodKlarnaOutput$.Outbound & { ".tag": PaymentMethodKlarnaTag.Klarna })
            | (PaymentMethodKlarnaAccountOutput$.Outbound & {
                  ".tag": PaymentMethodKlarnaAccountTag.KlarnaAccount;
              })
            | (PaymentMethodKlarnaPaynowOutput$.Outbound & {
                  ".tag": PaymentMethodKlarnaPaynowTag.KlarnaPaynow;
              })
            | (PaymentMethodCreditCard$.Outbound & { ".tag": DotTag.CreditCard })
        >;
        profile?: Profile$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Account> = z
        .object({
            addresses: z.array(AddressListing$.outboundSchema),
            paymentMethods: z.array(
                z.union([
                    PaymentMethodPaypalOutput$.outboundSchema.and(
                        z.object({ dotTag: z.literal(PaymentMethodPaypalTag.Paypal) })
                    ),
                    PaymentMethodAffirmOutput$.outboundSchema.and(
                        z.object({ dotTag: z.literal(PaymentMethodAffirmTag.Affirm) })
                    ),
                    PaymentMethodAfterpayOutput$.outboundSchema.and(
                        z.object({ dotTag: z.literal(PaymentMethodAfterpayTag.Afterpay) })
                    ),
                    PaymentMethodKlarnaOutput$.outboundSchema.and(
                        z.object({ dotTag: z.literal(PaymentMethodKlarnaTag.Klarna) })
                    ),
                    PaymentMethodKlarnaAccountOutput$.outboundSchema.and(
                        z.object({ dotTag: z.literal(PaymentMethodKlarnaAccountTag.KlarnaAccount) })
                    ),
                    PaymentMethodKlarnaPaynowOutput$.outboundSchema.and(
                        z.object({ dotTag: z.literal(PaymentMethodKlarnaPaynowTag.KlarnaPaynow) })
                    ),
                    PaymentMethodCreditCard$.outboundSchema.and(
                        z.object({ dotTag: z.literal(DotTag.CreditCard) })
                    ),
                ])
            ),
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
