/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as components from "../models/components";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class LoggedIn extends ClientSDK {
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
     * Initialize a Bolt payment for logged in shoppers
     *
     * @remarks
     * Initialize a Bolt payment token that will be used to reference this payment to
     * Bolt when it is updated or finalized for logged in shoppers.
     *
     */
    async initialize(
        xPublishableKey: string,
        paymentInitializeRequest: components.PaymentInitializeRequest,
        options?: RequestOptions
    ): Promise<operations.PaymentsInitializeResponse> {
        const input$: operations.PaymentsInitializeRequest = {
            xPublishableKey: xPublishableKey,
            paymentInitializeRequest: paymentInitializeRequest,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.PaymentsInitializeRequest$.outboundSchema.parse(input$);
        const body$ = enc$.encodeJSON("body", payload$["payment-initialize-request"], {
            explode: true,
        });

        const path$ = this.templateURLComponent("/payments")();

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

        const context = { operationID: "paymentsInitialize" };
        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = await this.createRequest$(
            {
                context,
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
            const result = operations.PaymentsInitializeResponse$.inboundSchema.parse({
                ...responseFields$,
                "payment-response": responseBody,
            });
            return result;
        } else if (this.matchResponse(response, "4XX", "application/json")) {
            const responseBody = await response.json();
            const result = errors.PaymentsInitializeResponseBody$.inboundSchema.parse({
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

        return operations.PaymentsInitializeResponse$.inboundSchema.parse(responseFields$);
    }

    /**
     * Update an existing payment
     *
     * @remarks
     * Update a pending payment
     *
     */
    async update(
        id: string,
        xPublishableKey: string,
        paymentUpdateRequest: components.PaymentUpdateRequest,
        options?: RequestOptions
    ): Promise<operations.PaymentsUpdateResponse> {
        const input$: operations.PaymentsUpdateRequest = {
            id: id,
            xPublishableKey: xPublishableKey,
            paymentUpdateRequest: paymentUpdateRequest,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.PaymentsUpdateRequest$.outboundSchema.parse(input$);
        const body$ = enc$.encodeJSON("body", payload$["payment-update-request"], {
            explode: true,
        });

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/payments/{id}")(pathParams$);

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

        const context = { operationID: "paymentsUpdate" };
        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = await this.createRequest$(
            {
                context,
                security: securitySettings$,
                method: "PATCH",
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
            const result = operations.PaymentsUpdateResponse$.inboundSchema.parse({
                ...responseFields$,
                "payment-response": responseBody,
            });
            return result;
        } else if (this.matchResponse(response, "4XX", "application/json")) {
            const responseBody = await response.json();
            const result = errors.PaymentsUpdateResponseBody$.inboundSchema.parse({
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

        return operations.PaymentsUpdateResponse$.inboundSchema.parse(responseFields$);
    }

    /**
     * Perform an irreversible action (e.g. finalize) on a pending payment
     *
     * @remarks
     * Perform an irreversible action on a pending payment, such as finalizing it.
     *
     */
    async performAction(
        id: string,
        xPublishableKey: string,
        paymentActionRequest: components.PaymentActionRequest,
        options?: RequestOptions
    ): Promise<operations.PaymentsActionResponse> {
        const input$: operations.PaymentsActionRequest = {
            id: id,
            xPublishableKey: xPublishableKey,
            paymentActionRequest: paymentActionRequest,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.PaymentsActionRequest$.outboundSchema.parse(input$);
        const body$ = enc$.encodeJSON("body", payload$["payment-action-request"], {
            explode: true,
        });

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/payments/{id}")(pathParams$);

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

        const context = { operationID: "paymentsAction" };
        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = await this.createRequest$(
            {
                context,
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
            const result = operations.PaymentsActionResponse$.inboundSchema.parse({
                ...responseFields$,
                "payment-response": responseBody,
            });
            return result;
        } else if (this.matchResponse(response, "4XX", "application/json")) {
            const responseBody = await response.json();
            const result = errors.PaymentsActionResponseBody$.inboundSchema.parse({
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

        return operations.PaymentsActionResponse$.inboundSchema.parse(responseFields$);
    }
}
