const router = require('koa-router')()
const { query } = require('../config/dbPool')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  const { id } = ctx.request.query
  const data = await query('select * from user where id=', [id])
  ctx.body = {
    title: 'koa2 json',
    data,
    id: ctx.request
  }
})

module.exports = router
