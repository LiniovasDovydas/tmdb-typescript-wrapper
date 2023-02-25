# [tmdb-typescript-wrapper](https://github.com/LiniovasDovydas/tmdb-typescript-wrapper) (W.I.P)

An unofficial typescript wrapper for TMDb API.

[<img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" width="33%">](https://www.themoviedb.org/)

## Requirements

- NodeJS >= 14.0.0
- [cross-fetch](https://github.com/lquixada/cross-fetch) >= 3.1.5
- [zod](https://github.com/colinhacks/zod) >= 3.20.6

> **Warning**: If you're in an environment that doesn't support Promises such as Internet Explorer, you must install an ES6 Promise compatible polyfill. [es6-promise](https://github.com/jakearchibald/es6-promise) is suggested.

## Installation

Install following packages using npm or yarn

```bash
npm install tmdb-typescript-wrapper cross-fetch zod
```

## Usage

```typescript
import { createTMDbInstance } from "tmdb-typescript-wrapper";

// tmdb will expose all the methods from the TMDb API
const tmdb = createTMDbInstance({ apiKey: "YOUR_TMDB_KEY" });

// to get authorized session methods and session id for independent requests
const authTMDb = tmdb.authorizedSession({ username: "", password: "" });

// to get guest session methods and session id for independent requests
const guestTMDb = tmdb.guestSession();
```
