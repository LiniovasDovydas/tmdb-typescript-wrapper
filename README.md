# [tmdb-typescript-wrapper](https://github.com/LiniovasDovydas/tmdb-typescript-wrapper) (W.I.P)

An unofficial typescript wrapper for TMDb API.

[<img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" width="33%">](https://www.themoviedb.org/)

## Requirements

- Node.js >= 12.0.0
- cross-fetch >= 3.1.5
- zod >= 3.20.6

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

// to get methods for authorized session
const authTMDb = tmdb.authorizedSession({ username: "", password: "" });

// to get methods for guest session
const guestTMDb = tmdb.guestSession();
```
