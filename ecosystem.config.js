module.exports = {
  apps: [
    {
      namespace: "strapi",
      name: "strapi",
      script: "npm run build && npm start",
      cwd: "./apps/strapi",
      env: {
        NODE_ENV: "production",
      },
    },
    {
      namespace: "nextjs",
      name: "nextjs",
      script: "npm run build && npm start",
      cwd: "./apps/nextjs",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
  deploy: {
    production: {
      user: "root",
      host: "128.199.86.48",
      ref: "origin/main",
      repo: "git@github.com:BlazeIsClone/strapi-nextjs-monorepo.git",
      path: "/var/www/strapi-nextjs",
      "post-deploy":
        "npm ci && pm2 reload ecosystem.config.js --env production",
    },
  },
};
