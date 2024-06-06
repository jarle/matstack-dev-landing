// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  apps: [
    {
      name: 'matstack-dev-landing',
      script: 'build/bin/server.js',
      kill_timeout: 810000,
      cron_restart: '10 */6 * * *',
      env: {
        PORT: 42402,
        NODE_ENV: 'production',
      }
    },
  ],
  deploy: {
    production: {
      "user": "root",
      "host": ["165.227.208.86"],
      "ref": "origin/main",
      "repo": "git@github.com:jarle/matstack-dev-landing.git",
      "path": "/root/deployments/matstack-dev-landing",
      'post-deploy':
        'source ~/.bashrc && npm install && npm run build && pm2 reload ecosystem.config.cjs --env production',
    }
  }
}
