/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * An error has occurred, and further details are contained in the response
 */
export type TestingCreditCardGetResponseBodyData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * An error has occurred, and further details are contained in the response
 */
export class TestingCreditCardGetResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: TestingCreditCardGetResponseBodyData;

    constructor(err: TestingCreditCardGetResponseBodyData) {
        super("");
        this.data$ = err;

        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "TestingCreditCardGetResponseBody";
    }
}

/** @internal */
export namespace TestingCreditCardGetResponseBody$ {
    export type Inbound = {
        RawResponse?: Response | undefined;
    };

    export const inboundSchema: z.ZodType<TestingCreditCardGetResponseBody, z.ZodTypeDef, Inbound> =
        z
            .object({
                RawResponse: z.instanceof(Response).optional(),
            })
            .transform((v) => {
                return new TestingCreditCardGetResponseBody({
                    ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
                });
            });
    export type Outbound = {
        RawResponse?: never | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TestingCreditCardGetResponseBody
    > = z
        .instanceof(TestingCreditCardGetResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    rawResponse: z
                        .instanceof(Response)
                        .transform(() => {
                            throw new Error("Response cannot be serialized");
                        })
                        .optional(),
                })
                .transform((v) => {
                    return {
                        ...(v.rawResponse === undefined ? null : { RawResponse: v.rawResponse }),
                    };
                })
        );
}
