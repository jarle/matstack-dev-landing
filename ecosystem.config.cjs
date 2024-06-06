// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  apps: [
    {
      name: 'matstack-dev-landing',
      script: 'build/bin/server.js',
      kill_timeout: 810000,
      cron_restart: '10 */6 * * *',
    },
  ],
  deploy: {
    production: {
      "user": "root",
      "host": ["165.227.208.86"],
      "ref": "origin/master",
      "repo": "git@github.com:jarle/matstack-dev-landing.git",
      "path": "/home/root/deployments/matstack-dev-landing",
      "post-deploy": "npm install"
    }
  }
}
