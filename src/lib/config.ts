/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../models/components/index.js";
import { HTTPClient } from "./http.js";
import { RetryConfig } from "./retries.js";
import { Params, pathToFunc } from "./url.js";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://{environment}.bolt.com/v3"] as const;

export enum ServerEnvironment {
    Api = "api",
    ApiSandbox = "api-sandbox",
}

export type SDKOptions = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: components.Security | (() => Promise<components.Security>);

    httpClient?: HTTPClient;
    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;
    /**
     * Allows setting the environment variable for url substitution
     */
    environment?: ServerEnvironment;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: RetryConfig;
};

export function serverURLFromOptions(options: SDKOptions): URL | null {
    let serverURL = options.serverURL;

    const serverParams: Params[] = [
        {
            environment: options.environment ?? "api-sandbox",
        },
    ];
    let params: Params = {};

    if (!serverURL) {
        const serverIdx = options.serverIdx ?? 0;
        if (serverIdx < 0 || serverIdx >= ServerList.length) {
            throw new Error(`Invalid server index ${serverIdx}`);
        }
        serverURL = ServerList[serverIdx] || "";
        params = serverParams[serverIdx] || {};
    }

    const u = pathToFunc(serverURL)(params);
    return new URL(u);
}

export const SDK_METADATA = {
    language: "typescript",
    openapiDocVersion: "3.0.3",
    sdkVersion: "0.15.0",
    genVersion: "2.347.4",
    userAgent: "speakeasy-sdk/typescript 0.15.0 2.347.4 3.0.3 @boltpay/bolt-typescript-sdk",
} as const;
