/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import { CountryCode, CountryCode$ } from "./countrycode";
import * as z from "zod";

/**
 * An address saved on an account, i.e. a physical address plus any additional account-specific metadata.
 */
export type AddressListing = {
    /**
     * The address's unique identifier.
     */
    id?: string | undefined;
    /**
     * The first name of the person associated with this address.
     */
    firstName: string;
    /**
     * The last name of the person associated with this address.
     */
    lastName: string;
    /**
     * The company associated with this address.
     */
    company?: string | undefined;
    /**
     * The street address associated with this address.
     */
    streetAddress1: string;
    /**
     * Any additional, optional, street address information associated with this address.
     */
    streetAddress2?: string | undefined;
    /**
     * The locality (e.g. city, town, etc...) associated with this address.
     */
    locality: string;
    /**
     * The postal code associated with this address.
     */
    postalCode: string;
    /**
     * The region or administrative area (e.g. state, province, county, etc...) associated with this address.
     */
    region?: string | undefined;
    /**
     * The country (in its ISO 3166 alpha-2 format) associated with this address.
     */
    countryCode: CountryCode;
    /**
     * The email address associated with this address.
     */
    email?: string | undefined;
    /**
     * The phone number associated with this address.
     */
    phone?: string | undefined;
    /**
     * Whether or not this is the default address saved.
     */
    isDefault?: boolean | undefined;
};

/** @internal */
export namespace AddressListing$ {
    export const inboundSchema: z.ZodType<AddressListing, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string().optional(),
            first_name: z.string(),
            last_name: z.string(),
            company: z.string().optional(),
            street_address1: z.string(),
            street_address2: z.string().optional(),
            locality: z.string(),
            postal_code: z.string(),
            region: z.string().optional(),
            country_code: CountryCode$.inboundSchema,
            email: z.string().optional(),
            phone: z.string().optional(),
            is_default: z.boolean().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                first_name: "firstName",
                last_name: "lastName",
                street_address1: "streetAddress1",
                street_address2: "streetAddress2",
                postal_code: "postalCode",
                country_code: "countryCode",
                is_default: "isDefault",
            });
        });

    export type Outbound = {
        id?: string | undefined;
        first_name: string;
        last_name: string;
        company?: string | undefined;
        street_address1: string;
        street_address2?: string | undefined;
        locality: string;
        postal_code: string;
        region?: string | undefined;
        country_code: string;
        email?: string | undefined;
        phone?: string | undefined;
        is_default?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddressListing> = z
        .object({
            id: z.string().optional(),
            firstName: z.string(),
            lastName: z.string(),
            company: z.string().optional(),
            streetAddress1: z.string(),
            streetAddress2: z.string().optional(),
            locality: z.string(),
            postalCode: z.string(),
            region: z.string().optional(),
            countryCode: CountryCode$.outboundSchema,
            email: z.string().optional(),
            phone: z.string().optional(),
            isDefault: z.boolean().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                firstName: "first_name",
                lastName: "last_name",
                streetAddress1: "street_address1",
                streetAddress2: "street_address2",
                postalCode: "postal_code",
                countryCode: "country_code",
                isDefault: "is_default",
            });
        });
}
