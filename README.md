> 👋 You can use [TMDB OpenApi](https://developer.themoviedb.org/openapi) and [Orval.dev](https://orval.dev/overview) to generate the API client. 🤣

I've started this as previously the OpenApi spec was broken and the generators I've tried didn't full work. Now it's fixed and you can use the generators. I'll keep this repo for now.

# [tmdb-typescript-wrapper](https://github.com/LiniovasDovydas/tmdb-typescript-wrapper) (W.I.P)

An unofficial typescript wrapper for TMDb API.

[<img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" width="33%">](https://www.themoviedb.org/)

## Requirements

- NodeJS >= 14.0.0
- [cross-fetch](https://github.com/lquixada/cross-fetch) >= 3.1.5
- [zod](https://github.com/colinhacks/zod) >= 3.20.6

## Installation

Install following packages

```bash
npm install tmdb-typescript-wrapper cross-fetch zod
```

```bash
yarn add tmdb-typescript-wrapper cross-fetch zod
```

```bash
pnpm add tmdb-typescript-wrapper cross-fetch zod
```

## Usage

```typescript
import { createTMDbInstance } from "tmdb-typescript-wrapper";

// tmdb will expose all the methods from the TMDb API
const tmdb = createTMDbInstance({ apiKey: "YOUR_TMDB_KEY" });

// to get authorized session id
const authSessionId = tmdb.getAuthorizedSessionId({
  username: "",
  password: "",
});

// to get guest session id
const guestSessionId = tmdb.getGuestSessionId();
```
