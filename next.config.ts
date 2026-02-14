import type { NextConfig } from "next";

// This is validation for the environment variables early in the build process.
import "./src/lib/env";

const isProd = process.env.NODE_ENV === "production";
const isDocker = process.env.IS_DOCKER === "true";

const config: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "c.saavncdn.com",
      },
      {
        protocol: "https",
        hostname: "c.sop.saavncdn.com",
      },
    ],
    unoptimized: !isDocker,
  },
  experimental: {
    // ppr: true,             <-- REMOVED: Causing Build Failed (Error 1)
    // reactCompiler: ...     <-- REMOVED: Unrecognized key (Warning)
    
    // If you specifically need the new PPR behavior mentioned in the error:
    // cacheComponents: true, 
  },
  output: isDocker ? "standalone" : undefined,
  /* ... */
};

export default config;
