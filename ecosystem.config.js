module.exports = {
  apps: [
    {
      name: 'PGCM-dashboard',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
