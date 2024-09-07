/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { BoltTypescriptSDKCore } from "../core.js";
import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import {
    ConnectionError,
    InvalidRequestError,
    RequestAbortedError,
    RequestTimeoutError,
    UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * Finalize a pending payment
 *
 * @remarks
 * Finalize a pending payment being made by a Bolt logged-in shopper. Upon receipt of a finalized payment result, payment success should be communicated to the shopper.
 */
export async function paymentsLoggedInPerformAction(
    client$: BoltTypescriptSDKCore,
    id: string,
    xPublishableKey: string,
    xMerchantClientId: string,
    paymentActionRequest: components.PaymentActionRequest,
    options?: RequestOptions
): Promise<
    Result<
        operations.PaymentsActionResponse,
        | errors.PaymentsActionResponseBody
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$: operations.PaymentsActionRequest = {
        id: id,
        xPublishableKey: xPublishableKey,
        xMerchantClientId: xMerchantClientId,
        paymentActionRequest: paymentActionRequest,
    };

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => operations.PaymentsActionRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = encodeJSON$("body", payload$["payment-action-request"], { explode: true });

    const pathParams$ = {
        id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
    };

    const path$ = pathToFunc("/payments/{id}")(pathParams$);

    const headers$ = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Merchant-Client-Id": encodeSimple$(
            "X-Merchant-Client-Id",
            payload$["X-Merchant-Client-Id"],
            { explode: false, charEncoding: "none" }
        ),
        "X-Publishable-Key": encodeSimple$("X-Publishable-Key", payload$["X-Publishable-Key"], {
            explode: false,
            charEncoding: "none",
        }),
    });

    const security$ = await extractSecurity(client$.options$.security);
    const context = {
        operationID: "paymentsAction",
        oAuth2Scopes: [],
        securitySource: client$.options$.security,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "POST",
            path: path$,
            headers: headers$,
            body: body$,
            timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
        },
        options
    );
    if (!requestRes.ok) {
        return requestRes;
    }
    const request$ = requestRes.value;

    const doResult = await client$.do$(request$, {
        context,
        errorCodes: ["4XX", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const responseFields$ = {
        ContentType: response.headers.get("content-type") ?? "application/octet-stream",
        StatusCode: response.status,
        RawResponse: response,
        Headers: {},
    };

    const [result$] = await m$.match<
        operations.PaymentsActionResponse,
        | errors.PaymentsActionResponseBody
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, operations.PaymentsActionResponse$inboundSchema, { key: "payment-response" }),
        m$.jsonErr("4XX", errors.PaymentsActionResponseBody$inboundSchema),
        m$.fail("5XX"),
        m$.nil("default", operations.PaymentsActionResponse$inboundSchema)
    )(response, { extraFields: responseFields$ });
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
