# Math Saathi AI setup

The website keeps its small, exact local solver for supported typed questions. Other typed questions and uploaded photos go to the OpenAI Responses API through this Cloudflare Worker. The OpenAI key is a Worker secret and is never included in the public website files.

## One-time setup

1. Create an OpenAI API project and an API key. API usage is billed separately from ChatGPT; set a budget/usage limit in the API account before sharing the public site.
2. Install Node.js and sign in to a Cloudflare account. From this `api` folder, run `npx wrangler login`.
3. Edit `wrangler.toml`: replace `https://YOUR-SITE.github.io` with the exact website origin (no trailing slash), and select a model enabled for your API project.
4. In this folder, run `npx wrangler secret put OPENAI_API_KEY` and paste the key into the terminal prompt. Never paste it into `api-config.js`, GitHub, or a chat.
5. Run `npx wrangler deploy`. Copy the Worker URL printed by Wrangler.
6. Put that URL in `api-config.js`, for example `window.MATH_SAATHI_API_URL = 'https://math-saathi-api.YOUR-ACCOUNT.workers.dev';`.
7. Publish the updated website files and the Worker. The site works without the API for the existing local solver; AI/photo solving becomes available once both are deployed and configured.

## Abuse and cost controls

The Worker rejects unexpected site origins, caps request size and output length, and applies a best-effort per-IP request limit in each Worker instance. This in-memory limit is not a substitute for Cloudflare's managed rate-limiting rules; set those up before public promotion, and keep an API budget/alert. Image questions use more model input and can cost more. Never commit the API key.

The AI can make mistakes. Check important calculations. It does not guarantee a solution to every question.
