module.exports = {
  apps: [
    {
      name: 'checkpoint-client',
      script: './node_modules/.bin/ts-node-esm',
      args: 'server/index.ts',
      execute_mode: 'cluster',
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
