module.exports = {
  apps: [
    {
      namespace: "strapi",
      name: "strapi",
      script: "npm start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
