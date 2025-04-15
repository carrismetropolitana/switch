# # # # # # # # #

FROM node:slim AS base

ENV PROJECT=handler

RUN npm install -g turbo@^2

# # # # # # # # #


# # #
# PRUNER STAGE

FROM base AS pruner

WORKDIR /app

COPY package.json ./
COPY . .

RUN turbo prune --scope=@carrismetropolitana/switch-${PROJECT} --docker


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
RUN turbo run build --filter=@carrismetropolitana/switch-${PROJECT}


# # # # # # # # #


# PHASE 3
# Setup the final Docker image with only the required files.

FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder --chown=nextjs:nodejs /app/apps/${PROJECT}/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/${PROJECT}/.next/static ./apps/${PROJECT}/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/${PROJECT}/public ./apps/${PROJECT}/public

CMD ["node", "/app/apps/${PROJECT}/server.js"]
