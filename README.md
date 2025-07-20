# Turbo Prisma Monorepo

This is a monorepo using Turborepo with Prisma for database management.

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run database migrations
pnpm db:migrate:dev

# Seed the database
pnpm db:seed
```

## Production Deployment

For production deployments on cloud platforms (Vercel, Netlify, etc.), use the `build:prod` script which automatically runs database migrations before building:

```bash
pnpm build:prod
```

### Cloud Platform Configuration

#### Vercel

Set the build command to:

```bash
pnpm build:prod
```

#### Netlify

Set the build command to:

```bash
pnpm build:prod
```

#### Railway

Set the build command to:

```bash
pnpm build:prod
```

The `build:prod` script ensures that:

1. Database migrations are deployed (`db:migrate:deploy`)
2. Prisma client is generated (`generate`)
3. All packages are built (`^build`)
4. The web application is built (`build`)

This ensures your database schema is up-to-date before the application starts.
