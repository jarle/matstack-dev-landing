/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.any('*', async ({ response }) => {
  response.redirect('https://matstack.dev/remix-adonisjs')
})
  .domain('remix-adonisjs.matstack.dev')

router.any('*', async ({ remixHandler }) => {
  return remixHandler()
})
