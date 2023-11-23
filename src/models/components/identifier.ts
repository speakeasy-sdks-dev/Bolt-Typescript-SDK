/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";

/**
 * The type of identifier
 */
export enum IdentifierType {
    Email = "email",
    EmailSha256 = "email_sha256",
}

export class Identifier extends SpeakeasyBase {
    /**
     * The type of identifier
     */
    @SpeakeasyMetadata({ data: "queryParam, name=identifier_type" })
    identifierType: IdentifierType;

    /**
     * The value of the identifier. The value must be valid for the specified `identifier_type`
     */
    @SpeakeasyMetadata({ data: "queryParam, name=identifier_value" })
    identifierValue: string;
}
