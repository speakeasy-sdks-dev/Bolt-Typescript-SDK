# PaymentResponse

## Example Usage

```typescript
import { PaymentResponse, PaymentResponseFinalizedTag, Status } from "@boltpay/bolt-typescript-sdk/models/components";

let value: PaymentResponse = {
  dotTag: PaymentResponseFinalizedTag.Finalized,
  id: "iKv7t5bgt1gg",
  status: Status.Success,
  transaction: {
    reference: "OBYG-X1PX-FN55",
    authorizations: [
      {
        processorReference: "123456789XYZ",
      },
    ],
  },
};
```

## Supported Types

### `components.PaymentResponseFinalized`

```typescript
const value: components.PaymentResponseFinalized = /* values here */
```

### `components.PaymentResponsePending`

```typescript
const value: components.PaymentResponsePending = /* values here */
```

