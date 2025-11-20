module.exports = {
  apps: [
    {
      name: 'landing-app',
      script: '.output/server/index.mjs',
      args: '',
      cwd: __dirname,
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: process.env.NODE_ENV || 'production',
        PORT: process.env.PORT || 1105
      }
    }
  ]
};


