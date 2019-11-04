const middleware = async (ctx, next) => {
  ctx.requestTime = Date.now();

  // eslint-disable-next-line no-console
  ctx.log = (mensagem) => console.log(mensagem);

  ctx.erro = (err, statusCode = 500, tipo = 'Não Mapeado') => {
    ctx.body = {
      erro: {
        mensagem: err,
        tipo,
        duration: `${Date.now() - ctx.requestTime}ms`,
      },
    };
    ctx.status = statusCode;
  };

  ctx.finish = (body, statusCode) => {
    ctx.body = body;
    ctx.status = statusCode;
    ctx.success = {
      mensagem: 'Usuário cadastrado com sucesso!',
    };
  };

  try {
    await next();
  } catch (err) {
    ctx.erro(err);
  }
};

module.exports = middleware;
