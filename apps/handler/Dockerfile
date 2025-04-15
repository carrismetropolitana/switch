# # # # # # # # #

FROM node:slim AS base

RUN npm install -g turbo@^2

# # # # # # # # #


# # #
# PRUNER STAGE

FROM base AS pruner

WORKDIR /app

COPY package.json ./
COPY . .

RUN turbo prune --scope=@carrismetropolitana/switch-handler --docker


# # # # # # # # #


# PHASE 2
# Rebuild the source code only when needed.

FROM base AS builder

WORKDIR /app

COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/package-lock.json ./package-lock.json
RUN npm install

# Build the project
COPY --from=pruner /app/out/full/ .
RUN turbo run build --filter=@carrismetropolitana/switch-handler


# # # # # # # # #


# PHASE 3
# Setup the final Docker image with only the required files.

FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder --chown=nextjs:nodejs /app/apps/handler/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/handler/.next/static ./apps/handler/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/handler/public ./apps/handler/public

CMD ["node", "/app/apps/handler/server.js"]
