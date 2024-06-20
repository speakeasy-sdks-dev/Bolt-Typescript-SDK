/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

/**
 * The type of address reference
 */
export enum AddressReferenceIdTag {
    Id = "id",
}

export type AddressReferenceId = {
    /**
     * The type of address reference
     */
    dotTag: AddressReferenceIdTag;
    /**
     * The address's ID
     */
    id: string;
};

/** @internal */
export namespace AddressReferenceIdTag$ {
    export const inboundSchema: z.ZodNativeEnum<typeof AddressReferenceIdTag> =
        z.nativeEnum(AddressReferenceIdTag);
    export const outboundSchema: z.ZodNativeEnum<typeof AddressReferenceIdTag> = inboundSchema;
}

/** @internal */
export namespace AddressReferenceId$ {
    export const inboundSchema: z.ZodType<AddressReferenceId, z.ZodTypeDef, unknown> = z
        .object({
            ".tag": AddressReferenceIdTag$.inboundSchema,
            id: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                ".tag": "dotTag",
            });
        });

    export type Outbound = {
        ".tag": string;
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddressReferenceId> = z
        .object({
            dotTag: AddressReferenceIdTag$.outboundSchema,
            id: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                dotTag: ".tag",
            });
        });
}
