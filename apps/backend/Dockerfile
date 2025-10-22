FROM node:20-alpine AS builder

RUN npm install -g pnpm@9.14.2

WORKDIR /app

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./

COPY apps/backend ./apps/backend
COPY packages ./packages

RUN pnpm install --frozen-lockfile

WORKDIR /app/apps/backend
RUN pnpm run build

FROM node:20-alpine AS production

RUN npm install -g pnpm@9.14.2

WORKDIR /app

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./

COPY apps/backend/package.json ./apps/backend/
COPY packages ./packages

RUN pnpm install --prod --frozen-lockfile

COPY --from=builder /app/apps/backend/dist ./apps/backend/dist

WORKDIR /app/apps/backend

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "dist/main.js"]
