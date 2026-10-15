# Cloudflare hosting

Configured October 13, 2026 for Cloudflare Workers Static Assets.

- Worker name: latino-fashion-week-arizona
- Account: d4f0f720c75bedb23e5f6d89d27136d0
- Configuration: wrangler.jsonc
- Upload directory: dist (website output only; no repository docs or original resources)
- Public address: https://latino-fashion-week-arizona.mr-ellis1009.workers.dev — no custom domain configured.
- Status: deployed successfully October 13, 2026. Version 832f173c-a531-4829-a7df-1b6f53c1a4c5. Build and content checks passed. All three live routes and CSS/logo returned HTTP 200; a missing route returned 404.

## Commands

- `npm run deploy:check`: build, content checks, deployment dry run.
- `npm run deploy`: build, content checks, deploy current local files.
- `npx wrangler whoami`: verify local Cloudflare login.

Wrangler is a locked development dependency. On another computer, run `npm ci` before deployment. Credentials are managed by Wrangler, never stored in this repository. Local site development still uses `npm run dev`.

Git pushes and automatic GitHub deployments are not configured. Hosting deploys from this local folder. Tickets remain disabled until the approved ticket destination is supplied. Foundation is deferred.

