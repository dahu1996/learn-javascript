const Koa = require('koa');
const router = require('koa-router')();
const static = require('koa-static');


const app = new Koa();

app.use(static(`${__dirname}/static`));

// app.use(async ctx => {
//     ctx.body = "Hello World";
// })

router.get('/api/info', async (ctx, next) => {
    const { response } = ctx;
    response.set('Content-Type', 'application/json');
    response.body = JSON.stringify([
        {
            name: "dahu",
            age: 25
        }
    ]);
    next();
});

router.get('/api/jsonp', async (ctx, next) => {
    const { query: { callback = null, }, response } = ctx;
    const data = JSON.stringify({
        name: "dahu",
        age: 20,
    });
    response.body = `${callback}(${data})`;
    await next();
});

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(8080, async () => {
    console.log(`the server is running at: http://localhost:8080`);
});