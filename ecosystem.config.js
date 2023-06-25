module.exports = {
  apps: [
    {
      namespace: "turbo",
      name: "turbo",
      script: "npm start",
      autorestart: true,
      max_restarts: 5,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
