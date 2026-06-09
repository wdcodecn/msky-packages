# msky-packages

Public shared libraries for msky frontends.

| Package | Description |
|---------|-------------|
| `@msky/shared` | API client, i18n copy, api-config |
| `@msky/ui` | Shared shell, HomePage, TodosWorkspace, msky.css |

## Install in apps (pnpm)

```json
{
  "@msky/shared": "github:wdcodecn/msky-packages#main&path:packages/shared",
  "@msky/ui": "github:wdcodecn/msky-packages#main&path:packages/ui"
}
```

Test environment: replace `#main` with `#test`.

Dockerfile install stage must include `apk add --no-cache git`.

Docker builds need `git` in the install stage for GitHub dependencies.
