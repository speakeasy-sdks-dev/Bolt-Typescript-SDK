/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { SecurityInput } from "../lib/security.js";
import * as components from "../models/components/index.js";
import * as errors from "../models/errors/index.js";
import * as operations from "../models/operations/index.js";

export class Guest extends ClientSDK {
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

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GuestPaymentsInitializeRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$["guest-payment-initialize-request"], {
            explode: true,
        });

        const path$ = this.templateURLComponent("/guest/payments")();

        const query$ = "";

        headers$.set(
            "X-Publishable-Key",
            encodeSimple$("X-Publishable-Key", payload$["X-Publishable-Key"], {
                explode: false,
                charEncoding: "none",
            })
        );
        const security$: SecurityInput[][] = [
            [
                {
                    fieldName: "X-API-Key",
                    type: "apiKey:header",
                    value: security?.apiKey,
                },
            ],
        ];
        const securitySettings$ = this.resolveSecurity(...security$);
        const context = {
            operationID: "guestPaymentsInitialize",
            oAuth2Scopes: [],
            securitySource: security$,
        };

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
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

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.GuestPaymentsInitializeResponse>()
            .json(200, operations.GuestPaymentsInitializeResponse$, { key: "payment-response" })
            .json("4XX", errors.GuestPaymentsInitializeResponseBody$, { err: true })
            .fail("5XX")
            .void("default", operations.GuestPaymentsInitializeResponse$)
            .match(response, { extraFields: responseFields$ });

        return result$;
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

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GuestPaymentsUpdateRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$["payment-update-request"], { explode: true });

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/guest/payments/{id}")(pathParams$);

        const query$ = "";

        headers$.set(
            "X-Publishable-Key",
            encodeSimple$("X-Publishable-Key", payload$["X-Publishable-Key"], {
                explode: false,
                charEncoding: "none",
            })
        );
        const security$: SecurityInput[][] = [
            [
                {
                    fieldName: "X-API-Key",
                    type: "apiKey:header",
                    value: security?.apiKey,
                },
            ],
        ];
        const securitySettings$ = this.resolveSecurity(...security$);
        const context = {
            operationID: "guestPaymentsUpdate",
            oAuth2Scopes: [],
            securitySource: security$,
        };

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PATCH",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.GuestPaymentsUpdateResponse>()
            .json(200, operations.GuestPaymentsUpdateResponse$, { key: "payment-response" })
            .json("4XX", errors.GuestPaymentsUpdateResponseBody$, { err: true })
            .fail("5XX")
            .void("default", operations.GuestPaymentsUpdateResponse$)
            .match(response, { extraFields: responseFields$ });

        return result$;
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

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GuestPaymentsActionRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$["payment-action-request"], { explode: true });

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/guest/payments/{id}")(pathParams$);

        const query$ = "";

        headers$.set(
            "X-Publishable-Key",
            encodeSimple$("X-Publishable-Key", payload$["X-Publishable-Key"], {
                explode: false,
                charEncoding: "none",
            })
        );
        const security$: SecurityInput[][] = [
            [
                {
                    fieldName: "X-API-Key",
                    type: "apiKey:header",
                    value: security?.apiKey,
                },
            ],
        ];
        const securitySettings$ = this.resolveSecurity(...security$);
        const context = {
            operationID: "guestPaymentsAction",
            oAuth2Scopes: [],
            securitySource: security$,
        };

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
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

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.GuestPaymentsActionResponse>()
            .json(200, operations.GuestPaymentsActionResponse$, { key: "payment-response" })
            .json("4XX", errors.GuestPaymentsActionResponseBody$, { err: true })
            .fail("5XX")
            .void("default", operations.GuestPaymentsActionResponse$)
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
