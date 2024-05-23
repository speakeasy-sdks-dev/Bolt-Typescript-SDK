/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import { SecurityInput } from "../lib/security";
import * as components from "../models/components";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class Orders extends ClientSDK {
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
     * Create an order that was placed outside the Bolt ecosystem.
     *
     * @remarks
     * Create an order that was placed outside the Bolt ecosystem.
     *
     */
    async ordersCreate(
        security: operations.OrdersCreateSecurity,
        xPublishableKey: string,
        order: components.Order,
        options?: RequestOptions
    ): Promise<operations.OrdersCreateResponse> {
        const input$: operations.OrdersCreateRequest = {
            xPublishableKey: xPublishableKey,
            order: order,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.OrdersCreateRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.order, { explode: true });

        const path$ = this.templateURLComponent("/orders")();

        const query$ = "";

        headers$.set(
            "X-Publishable-Key",
            enc$.encodeSimple("X-Publishable-Key", payload$["X-Publishable-Key"], {
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
            operationID: "ordersCreate",
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

        const [result$] = await this.matcher<operations.OrdersCreateResponse>()
            .json(200, operations.OrdersCreateResponse$, { key: "order-response" })
            .json("4XX", errors.OrdersCreateResponseBody$, { err: true })
            .fail("5XX")
            .void("default", operations.OrdersCreateResponse$)
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
