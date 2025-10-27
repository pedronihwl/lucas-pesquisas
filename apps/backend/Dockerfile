FROM node:20-alpine AS builder

RUN npm install -g pnpm@9.14.2

WORKDIR /app

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml turbo.json ./
COPY apps/backend/package.json ./apps/backend/package.json
COPY packages ./packages

RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store pnpm install --frozen-lockfile

COPY apps/backend ./apps/backend

# Build shared packages first

WORKDIR /app/apps/backend
RUN pnpm turbo build

FROM node:20-alpine AS production

RUN npm install -g pnpm@9.14.2

WORKDIR /app

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY apps/backend/package.json ./apps/backend/package.json
COPY packages ./packages

RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store pnpm install --frozen-lockfile --filter backend --prod

# Copy built packages
COPY --from=builder /app/packages/shared/dist ./packages/shared/dist

COPY --from=builder /app/apps/backend/dist ./apps/backend/dist

WORKDIR /app/apps/backend

ENV NODE_ENV=production

EXPOSE 3001
CMD ["node", "dist/main.js"]

