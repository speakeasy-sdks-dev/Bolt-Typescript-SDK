/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AddressReferenceInput, AddressReferenceInput$ } from "./addressreferenceinput";
import { Amount, Amount$ } from "./amount";
import * as z from "zod";

export type CartShipment = {
    address?: AddressReferenceInput | undefined;
    /**
     * A monetary amount, i.e. a base unit amount and a supported currency.
     */
    cost?: Amount | undefined;
    /**
     * The name of the carrier selected.
     */
    carrier?: string | undefined;
};

/** @internal */
export namespace CartShipment$ {
    export const inboundSchema: z.ZodType<CartShipment, z.ZodTypeDef, unknown> = z.object({
        address: AddressReferenceInput$.inboundSchema.optional(),
        cost: Amount$.inboundSchema.optional(),
        carrier: z.string().optional(),
    });

    export type Outbound = {
        address?: AddressReferenceInput$.Outbound | undefined;
        cost?: Amount$.Outbound | undefined;
        carrier?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CartShipment> = z.object({
        address: AddressReferenceInput$.outboundSchema.optional(),
        cost: Amount$.outboundSchema.optional(),
        carrier: z.string().optional(),
    });
}
