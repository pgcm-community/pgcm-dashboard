module.exports = {
  apps: [
    {
      name: 'pc-dashboard',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
