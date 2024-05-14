/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Transaction, Transaction$ } from "./transaction";
import * as z from "zod";

export enum PaymentResponseFinalizedTag {
    Finalized = "finalized",
}

export enum Status {
    Success = "success",
}

export type PaymentResponseFinalized = {
    dotTag: PaymentResponseFinalizedTag;
    id?: string | undefined;
    status: Status;
    transaction: Transaction;
};

/** @internal */
export const PaymentResponseFinalizedTag$: z.ZodNativeEnum<typeof PaymentResponseFinalizedTag> =
    z.nativeEnum(PaymentResponseFinalizedTag);

/** @internal */
export const Status$: z.ZodNativeEnum<typeof Status> = z.nativeEnum(Status);

/** @internal */
export namespace PaymentResponseFinalized$ {
    export const inboundSchema: z.ZodType<PaymentResponseFinalized, z.ZodTypeDef, unknown> = z
        .object({
            ".tag": PaymentResponseFinalizedTag$,
            id: z.string().optional(),
            status: Status$,
            transaction: Transaction$.inboundSchema,
        })
        .transform((v) => {
            return {
                dotTag: v[".tag"],
                ...(v.id === undefined ? null : { id: v.id }),
                status: v.status,
                transaction: v.transaction,
            };
        });

    export type Outbound = {
        ".tag": PaymentResponseFinalizedTag;
        id?: string | undefined;
        status: Status;
        transaction: Transaction$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentResponseFinalized> = z
        .object({
            dotTag: PaymentResponseFinalizedTag$,
            id: z.string().optional(),
            status: Status$,
            transaction: Transaction$.outboundSchema,
        })
        .transform((v) => {
            return {
                ".tag": v.dotTag,
                ...(v.id === undefined ? null : { id: v.id }),
                status: v.status,
                transaction: v.transaction,
            };
        });
}
