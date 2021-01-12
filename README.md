## Introduction


This repository contains a reproduction script for https://github.com/prisma/prisma/issues/4855

## Steps
1. Clone this repository and download deps using npm or yarn
2. Change credentials in prisma/.env
3. Init the db using `npx prisma db push --preview-feature`
4. Run `yarn start` to reproduce

## Version used

```
Environment variables loaded from prisma\.env
@prisma/cli          : 2.15.0-dev.25
@prisma/client       : 2.15.0-dev.25
Current platform     : windows
Query Engine         : query-engine 9eb65ec455b1028ed87c561de443afc304436f61 (at node_modules\@prisma\engines\query-engine-windows.exe)
Migration Engine     : migration-engine-cli 9eb65ec455b1028ed87c561de443afc304436f61 (at node_modules\@prisma\engines\migration-engine-windows.exe)
Introspection Engine : introspection-core 9eb65ec455b1028ed87c561de443afc304436f61 (at node_modules\@prisma\engines\introspection-engine-windows.exe)
Format Binary        : prisma-fmt 9eb65ec455b1028ed87c561de443afc304436f61 (at node_modules\@prisma\engines\prisma-fmt-windows.exe)
Studio               : 0.333.0
```
