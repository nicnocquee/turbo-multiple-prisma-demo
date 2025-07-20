#!/bin/bash

# Check if required environment variables are set
if [ -z "$DATABASE_URL" ]; then
    echo "❌ DATABASE_URL environment variable is required"
    exit 1
fi

if [ -z "$DATABASE_URL_NON_POOLING" ]; then
    echo "❌ DATABASE_URL_NON_POOLING environment variable is required"
    exit 1
fi

echo "pwd: $(pwd)"
cd packages/database
# Create .env file
cat > .env << EOF
DATABASE_URL="$DATABASE_URL"
DATABASE_URL_NON_POOLING="$DATABASE_URL_NON_POOLING"
EOF

echo "✅ Created .env file in packages/database" 
cat .env

cd ../../apps/web
cat > .env << EOF
DATABASE_URL="$DATABASE_URL"
DATABASE_URL_NON_POOLING="$DATABASE_URL_NON_POOLING"
EOF
echo "✅ Created .env file in apps/web" 
cat .env

