// O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios,
// e retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos' ,
// faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator'
// se encontram nessa lista.

const getRepos = require('../script4');

describe('repositorios se encontram na lista', () => {
  it('"sd-01-week4-5-project-todo-list" se encontra na lista', async () => {
    expect.assertions(1);
    const array = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(array).toContain('sd-01-week4-5-project-todo-list');
  });

  it('"sd-01-week4-5-project-meme-generator" se encontra na lista', (done) => {
    // expect.assertions(1);
    getRepos('https://api.github.com/orgs/tryber/repos').then(
      (array) => {
        expect(array).toContain('sd-01-week4-5-project-meme-generator');
        done();
      }
    );
  });
});
