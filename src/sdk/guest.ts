/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as components from "../models/components";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class Guest extends ClientSDK {
    private readonly options$: SDKOptions;

    constructor(options: SDKOptions = {}) {
        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
        });

        this.options$ = options;
        void this.options$;
    }
    /**
     * Initialize a Bolt payment for guest shoppers
     *
     * @remarks
     * Initialize a Bolt payment token that will be used to reference this payment to
     * Bolt when it is updated or finalized for guest shoppers.
     *
     */
    async initialize(
        security: operations.GuestPaymentsInitializeSecurity,
        xPublishableKey: string,
        guestPaymentInitializeRequest: components.GuestPaymentInitializeRequest,
        options?: RequestOptions
    ): Promise<operations.GuestPaymentsInitializeResponse> {
        const input$: operations.GuestPaymentsInitializeRequest = {
            xPublishableKey: xPublishableKey,
            guestPaymentInitializeRequest: guestPaymentInitializeRequest,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.GuestPaymentsInitializeRequest$.outboundSchema.parse(input$);

        const body$ = enc$.encodeJSON("body", payload$["guest-payment-initialize-request"], {
            explode: true,
        });

        const path$ = this.templateURLComponent("/guest/payments")();

        headers$.set(
            "X-Publishable-Key",
            enc$.encodeSimple("X-Publishable-Key", payload$["X-Publishable-Key"], {
                explode: false,
                charEncoding: "none",
            })
        );

        const securitySettings$ = this.resolveSecurity([
            { value: security?.apiKey, fieldName: "X-API-Key", type: "apiKey:header" },
        ]);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GuestPaymentsInitializeResponse$.inboundSchema.parse({
                ...responseFields$,
                "payment-response": responseBody,
            });
            return result;
        } else if (this.matchResponse(response, "4XX", "application/json")) {
            const responseBody = await response.json();
            const result = errors.GuestPaymentsInitializeResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else if (this.matchStatusCode(response, "default")) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.GuestPaymentsInitializeResponse$.inboundSchema.parse(responseFields$);
    }

    /**
     * Update an existing guest payment
     *
     * @remarks
     * Update a pending guest payment
     *
     */
    async update(
        security: operations.GuestPaymentsUpdateSecurity,
        id: string,
        xPublishableKey: string,
        paymentUpdateRequest: components.PaymentUpdateRequest,
        options?: RequestOptions
    ): Promise<operations.GuestPaymentsUpdateResponse> {
        const input$: operations.GuestPaymentsUpdateRequest = {
            id: id,
            xPublishableKey: xPublishableKey,
            paymentUpdateRequest: paymentUpdateRequest,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.GuestPaymentsUpdateRequest$.outboundSchema.parse(input$);

        const body$ = enc$.encodeJSON("body", payload$["payment-update-request"], {
            explode: true,
        });

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent("/guest/payments/{id}")(pathParams$);

        headers$.set(
            "X-Publishable-Key",
            enc$.encodeSimple("X-Publishable-Key", payload$["X-Publishable-Key"], {
                explode: false,
                charEncoding: "none",
            })
        );

        const securitySettings$ = this.resolveSecurity([
            { value: security?.apiKey, fieldName: "X-API-Key", type: "apiKey:header" },
        ]);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "PATCH",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GuestPaymentsUpdateResponse$.inboundSchema.parse({
                ...responseFields$,
                "payment-response": responseBody,
            });
            return result;
        } else if (this.matchResponse(response, "4XX", "application/json")) {
            const responseBody = await response.json();
            const result = errors.GuestPaymentsUpdateResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else if (this.matchStatusCode(response, "default")) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.GuestPaymentsUpdateResponse$.inboundSchema.parse(responseFields$);
    }

    /**
     * Perform an irreversible action (e.g. finalize) on a pending guest payment
     *
     * @remarks
     * Perform an irreversible action on a pending guest payment, such as finalizing it.
     *
     */
    async performAction(
        security: operations.GuestPaymentsActionSecurity,
        id: string,
        xPublishableKey: string,
        paymentActionRequest: components.PaymentActionRequest,
        options?: RequestOptions
    ): Promise<operations.GuestPaymentsActionResponse> {
        const input$: operations.GuestPaymentsActionRequest = {
            id: id,
            xPublishableKey: xPublishableKey,
            paymentActionRequest: paymentActionRequest,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.GuestPaymentsActionRequest$.outboundSchema.parse(input$);

        const body$ = enc$.encodeJSON("body", payload$["payment-action-request"], {
            explode: true,
        });

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent("/guest/payments/{id}")(pathParams$);

        headers$.set(
            "X-Publishable-Key",
            enc$.encodeSimple("X-Publishable-Key", payload$["X-Publishable-Key"], {
                explode: false,
                charEncoding: "none",
            })
        );

        const securitySettings$ = this.resolveSecurity([
            { value: security?.apiKey, fieldName: "X-API-Key", type: "apiKey:header" },
        ]);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GuestPaymentsActionResponse$.inboundSchema.parse({
                ...responseFields$,
                "payment-response": responseBody,
            });
            return result;
        } else if (this.matchResponse(response, "4XX", "application/json")) {
            const responseBody = await response.json();
            const result = errors.GuestPaymentsActionResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else if (this.matchStatusCode(response, "default")) {
            // fallthrough
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.GuestPaymentsActionResponse$.inboundSchema.parse(responseFields$);
    }
}
