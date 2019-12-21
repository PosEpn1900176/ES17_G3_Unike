import http from './http';

const ListaCategorias = {
  getAll: () =>
    new Promise((resolve, reject) => {
      http
        .get('Categoria/ListarCategoriaComServico')
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    })
};

export { ListaCategorias };