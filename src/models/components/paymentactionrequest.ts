/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum PaymentActionRequestTag {
    Finalize = "finalize",
}

export type PaymentActionRequest = {
    dotTag: PaymentActionRequestTag;
    /**
     * Optional redirect result token required for an APM payment (excluding PayPal).
     */
    redirectResult?: string | undefined;
};

/** @internal */
export const PaymentActionRequestTag$: z.ZodNativeEnum<typeof PaymentActionRequestTag> =
    z.nativeEnum(PaymentActionRequestTag);

/** @internal */
export namespace PaymentActionRequest$ {
    export const inboundSchema: z.ZodType<PaymentActionRequest, z.ZodTypeDef, unknown> = z
        .object({
            ".tag": PaymentActionRequestTag$,
            redirect_result: z.string().optional(),
        })
        .transform((v) => {
            return {
                dotTag: v[".tag"],
                ...(v.redirect_result === undefined ? null : { redirectResult: v.redirect_result }),
            };
        });

    export type Outbound = {
        ".tag": PaymentActionRequestTag;
        redirect_result?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaymentActionRequest> = z
        .object({
            dotTag: PaymentActionRequestTag$,
            redirectResult: z.string().optional(),
        })
        .transform((v) => {
            return {
                ".tag": v.dotTag,
                ...(v.redirectResult === undefined ? null : { redirect_result: v.redirectResult }),
            };
        });
}
