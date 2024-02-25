/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as components from "../models/components";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class Account extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Retrieve account details
     *
     * @remarks
     * Retrieve a shopper's account details, such as addresses and payment information
     */
    async getDetails(
        xPublishableKey: string,
        options?: RequestOptions
    ): Promise<operations.AccountGetResponse> {
        const input$: operations.AccountGetRequest = {
            xPublishableKey: xPublishableKey,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.AccountGetRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/account")();

        const query$ = "";

        headers$.set(
            "X-Publishable-Key",
            enc$.encodeSimple("X-Publishable-Key", payload$["X-Publishable-Key"], {
                explode: false,
                charEncoding: "none",
            })
        );

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "accountGet" };
        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.AccountGetResponse$.inboundSchema.parse({
                        ...responseFields$,
                        account: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, "4XX", "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.AccountGetResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else if (this.matchStatusCode(response, "default")) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return schemas$.parse(
            undefined,
            () => operations.AccountGetResponse$.inboundSchema.parse(responseFields$),
            "Response validation failed"
        );
    }

    /**
     * Add an address
     *
     * @remarks
     * Add an address to the shopper's account
     */
    async addAddress(
        xPublishableKey: string,
        addressListing: components.AddressListingInput,
        options?: RequestOptions
    ): Promise<operations.AccountAddressCreateResponse> {
        const input$: operations.AccountAddressCreateRequest = {
            xPublishableKey: xPublishableKey,
            addressListing: addressListing,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.AccountAddressCreateRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$["address-listing"], { explode: true });

        const path$ = this.templateURLComponent("/account/addresses")();

        const query$ = "";

        headers$.set(
            "X-Publishable-Key",
            enc$.encodeSimple("X-Publishable-Key", payload$["X-Publishable-Key"], {
                explode: false,
                charEncoding: "none",
            })
        );

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "accountAddressCreate" };
        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.AccountAddressCreateResponse$.inboundSchema.parse({
                        ...responseFields$,
                        "address-listing": val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, "4XX", "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.AccountAddressCreateResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else if (this.matchStatusCode(response, "default")) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return schemas$.parse(
            undefined,
            () => operations.AccountAddressCreateResponse$.inboundSchema.parse(responseFields$),
            "Response validation failed"
        );
    }

    /**
     * Edit an existing address
     *
     * @remarks
     * Edit an existing address on the shopper's account. This does not edit addresses
     * that are already associated with other resources, such as transactions or
     * shipments.
     *
     */
    async updateAddress(
        id: string,
        xPublishableKey: string,
        addressListing: components.AddressListingInput,
        options?: RequestOptions
    ): Promise<operations.AccountAddressEditResponse> {
        const input$: operations.AccountAddressEditRequest = {
            id: id,
            xPublishableKey: xPublishableKey,
            addressListing: addressListing,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.AccountAddressEditRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$["address-listing"], { explode: true });

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/account/addresses/{id}")(pathParams$);

        const query$ = "";

        headers$.set(
            "X-Publishable-Key",
            enc$.encodeSimple("X-Publishable-Key", payload$["X-Publishable-Key"], {
                explode: false,
                charEncoding: "none",
            })
        );

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "accountAddressEdit" };
        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "PUT",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.AccountAddressEditResponse$.inboundSchema.parse({
                        ...responseFields$,
                        "address-listing": val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, "4XX", "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.AccountAddressEditResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else if (this.matchStatusCode(response, "default")) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return schemas$.parse(
            undefined,
            () => operations.AccountAddressEditResponse$.inboundSchema.parse(responseFields$),
            "Response validation failed"
        );
    }

    /**
     * Delete an existing address
     *
     * @remarks
     * Delete an existing address. Deleting an address does not invalidate transactions or
     * shipments that are associated with it.
     *
     */
    async deleteAddress(
        id: string,
        xPublishableKey: string,
        options?: RequestOptions
    ): Promise<operations.AccountAddressDeleteResponse> {
        const input$: operations.AccountAddressDeleteRequest = {
            id: id,
            xPublishableKey: xPublishableKey,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.AccountAddressDeleteRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/account/addresses/{id}")(pathParams$);

        const query$ = "";

        headers$.set(
            "X-Publishable-Key",
            enc$.encodeSimple("X-Publishable-Key", payload$["X-Publishable-Key"], {
                explode: false,
                charEncoding: "none",
            })
        );

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "accountAddressDelete" };
        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, "4XX", "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.AccountAddressDeleteResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else if (this.matchStatusCode(response, [200, "default"])) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return schemas$.parse(
            undefined,
            () => operations.AccountAddressDeleteResponse$.inboundSchema.parse(responseFields$),
            "Response validation failed"
        );
    }

    /**
     * Add a payment method to a shopper's Bolt account Wallet.
     *
     * @remarks
     * Add a payment method to a shopper's Bolt account Wallet. For security purposes, this request must come from
     * your backend because authentication requires the use of your private key.<br />
     * **Note**: Before using this API, the credit card details must be tokenized using Bolt's JavaScript library function,
     * which is documented in [Install the Bolt Tokenizer](https://help.bolt.com/developers/references/bolt-tokenizer).
     *
     */
    async addPaymentMethod(
        xPublishableKey: string,
        paymentMethod: components.PaymentMethodInput,
        options?: RequestOptions
    ): Promise<operations.AccountAddPaymentMethodResponse> {
        const input$: operations.AccountAddPaymentMethodRequest = {
            xPublishableKey: xPublishableKey,
            paymentMethod: paymentMethod,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.AccountAddPaymentMethodRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$["payment-method"], { explode: true });

        const path$ = this.templateURLComponent("/account/payment-methods")();

        const query$ = "";

        headers$.set(
            "X-Publishable-Key",
            enc$.encodeSimple("X-Publishable-Key", payload$["X-Publishable-Key"], {
                explode: false,
                charEncoding: "none",
            })
        );

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "accountAddPaymentMethod" };
        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.AccountAddPaymentMethodResponse$.inboundSchema.parse({
                        ...responseFields$,
                        "payment-method": val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, "4XX", "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.AccountAddPaymentMethodResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else if (this.matchStatusCode(response, "default")) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return schemas$.parse(
            undefined,
            () => operations.AccountAddPaymentMethodResponse$.inboundSchema.parse(responseFields$),
            "Response validation failed"
        );
    }

    /**
     * Delete an existing payment method
     *
     * @remarks
     * Delete an existing payment method. Deleting a payment method does not invalidate transactions or
     * orders that are associated with it.
     *
     */
    async deletePaymentMethod(
        id: string,
        xPublishableKey: string,
        options?: RequestOptions
    ): Promise<operations.AccountPaymentMethodDeleteResponse> {
        const input$: operations.AccountPaymentMethodDeleteRequest = {
            id: id,
            xPublishableKey: xPublishableKey,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.AccountPaymentMethodDeleteRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/account/payment-methods/{id}")(pathParams$);

        const query$ = "";

        headers$.set(
            "X-Publishable-Key",
            enc$.encodeSimple("X-Publishable-Key", payload$["X-Publishable-Key"], {
                explode: false,
                charEncoding: "none",
            })
        );

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "accountPaymentMethodDelete" };
        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, "4XX", "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.AccountPaymentMethodDeleteResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else if (this.matchStatusCode(response, [200, "default"])) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return schemas$.parse(
            undefined,
            () =>
                operations.AccountPaymentMethodDeleteResponse$.inboundSchema.parse(responseFields$),
            "Response validation failed"
        );
    }
}
