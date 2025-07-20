import { execSync } from "child_process";
import path from "path";

const cwd = path.join(__dirname, "..");

try {
  // Check if DATABASE_URL_NON_POOLING is available
  if (!process.env.DATABASE_URL_NON_POOLING) {
    console.log(
      "DATABASE_URL_NON_POOLING not found, using DATABASE_URL for directUrl..."
    );

    // Check if DATABASE_URL is available
    if (!process.env.DATABASE_URL) {
      console.error(
        "DATABASE_URL is not available. Please set both DATABASE_URL and DATABASE_URL_NON_POOLING environment variables."
      );
      process.exit(1);
    }

    // Set DATABASE_URL_NON_POOLING to DATABASE_URL and run migration
    execSync("prisma migrate deploy", {
      stdio: "inherit",
      cwd,
      env: {
        ...process.env,
        DATABASE_URL_NON_POOLING: process.env.DATABASE_URL,
      },
    });
  } else {
    // If DATABASE_URL_NON_POOLING is available, run normally
    console.log(
      "DATABASE_URL_NON_POOLING found, running migration normally..."
    );
    execSync("prisma migrate deploy", {
      stdio: "inherit",
      cwd,
    });
  }
} catch (error) {
  console.error(
    "Migration failed:",
    error instanceof Error ? error.message : String(error)
  );
  process.exit(1);
}
