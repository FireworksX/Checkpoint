module.exports = {
  apps: [
    {
      name: 'checkpoint-client',
      script: 'nodemon',
      args: '--ignore server/data -O \'{"module": "commonjs"}\' server/index.ts',
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
