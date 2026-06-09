# msky-packages

Public shared libraries for msky frontends.

| Package | Description |
|---------|-------------|
| `@msky/shared` | API client, i18n copy, api-config |
| `@msky/ui` | Shared shell, HomePage, TodosWorkspace, msky.css |

## Install in apps (pnpm)

```json
{
  "@msky/shared": "github:wdcodecn/msky-packages#main:packages/shared",
  "@msky/ui": "github:wdcodecn/msky-packages#main:packages/ui"
}
```

Test environment: use branch `test` instead of `main`.

Docker builds need `git` in the install stage for GitHub dependencies.
