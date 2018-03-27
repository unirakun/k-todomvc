const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const todos = require('./todos')

app.use(bodyParser());

app.use(async ctx => {
  const { url, method, body } = ctx.request
  ctx.body = todos[method](body)
})

app.listen(3001);
