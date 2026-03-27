# @entrolytics/utilities

Common utilities and helper functions for Entrolytics projects.

## Installation

```bash
npm install @entrolytics/utilities

# or

pnpm add @entrolytics/utilities

# or

yarn add @entrolytics/utilities
```

## Features

- 🧵 String utilities (truncate, capitalize, slugify, case conversion)
- 📅 Date utilities (formatting, ranges, comparisons)
- 🔗 URL utilities (parsing, validation, building)
- 🔐 Hash utilities (simple hashing, ID generation)
- 🔄 Retry with exponential backoff
- ⏱️ Debounce and throttle functions
- 💾 Safe localStorage/sessionStorage wrappers
- 🌲 Tree-shakeable exports
- 📦 Zero dependencies

## Usage

### String Utilities

```typescript
import { truncate, slugify, toKebabCase } from "@entrolytics/utilities";

truncate("Long text here", 10); // 'Long te...'
slugify("Hello World!"); // 'hello-world'
toKebabCase("camelCaseString"); // 'camel-case-string'
```

### Date Utilities

```typescript
import { getLastNDays, toDateString, addDays } from "@entrolytics/utilities";

const { startDate, endDate } = getLastNDays(7);
toDateString(new Date()); // '2025-12-26'
addDays(new Date(), 5); // Date 5 days from now
```

### URL Utilities

```typescript
import { parseQueryParams, getDomain, combineUrl } from "@entrolytics/utilities";

parseQueryParams("https://example.com?foo=bar"); // { foo: 'bar' }
getDomain("https://example.com/path"); // 'example.com'
combineUrl("https://api.com", "v1", "users"); // 'https://api.com/v1/users'
```

### Retry with Backoff

```typescript
import { retry } from "@entrolytics/utilities";

await retry(
  async () => {
    const response = await fetch("https://api.example.com/data");
    return response.json();
  },
  {
    maxAttempts: 3,
    delayMs: 1000,
    backoffMultiplier: 2,
    onRetry: (error, attempt) => {
      console.log(`Retry attempt ${attempt}:`, error.message);
    },
  },
);
```

### Debounce & Throttle

```typescript
import { debounce, throttle } from "@entrolytics/utilities";

const debouncedSearch = debounce((query: string) => {
  console.log("Searching for:", query);
}, 300);

const throttledScroll = throttle(() => {
  console.log("Scrolling...");
}, 100);
```

### Storage Utilities

```typescript
import { storage, sessionStorage } from "@entrolytics/utilities";

// localStorage
storage.set("user", { name: "John", id: 123 });
const user = storage.get("user"); // { name: 'John', id: 123 }
storage.remove("user");

// sessionStorage
sessionStorage.set("tempData", { value: 42 });
const data = sessionStorage.get("tempData");
```

## API Reference

See [source code](./src) for full API documentation with TypeScript types.

## License

MIT © Entrolytics
