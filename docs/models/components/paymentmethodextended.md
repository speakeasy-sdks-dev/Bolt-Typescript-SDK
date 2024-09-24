# PaymentMethodExtended

## Example Usage

```typescript
import { PaymentMethodAfterpayTag, PaymentMethodExtended } from "@boltpay/bolt-typescript-sdk/models/components";

let value: PaymentMethodExtended = {
  dotTag: PaymentMethodAfterpayTag.Afterpay,
  returnUrl: "www.example.com/handle_afterpay_success",
};
```

## Supported Types

### `components.PaymentMethodReference`

```typescript
const value: components.PaymentMethodReference = /* values here */
```

### `components.PaymentMethodCreditCardInput`

```typescript
const value: components.PaymentMethodCreditCardInput = /* values here */
```

### `components.PaymentMethodPaypal`

```typescript
const value: components.PaymentMethodPaypal = /* values here */
```

### `components.PaymentMethodAffirm`

```typescript
const value: components.PaymentMethodAffirm = /* values here */
```

### `components.PaymentMethodAfterpay`

```typescript
const value: components.PaymentMethodAfterpay = /* values here */
```

### `components.PaymentMethodKlarna`

```typescript
const value: components.PaymentMethodKlarna = /* values here */
```

### `components.PaymentMethodKlarnaAccount`

```typescript
const value: components.PaymentMethodKlarnaAccount = /* values here */
```

### `components.PaymentMethodKlarnaPaynow`

```typescript
const value: components.PaymentMethodKlarnaPaynow = /* values here */
```

