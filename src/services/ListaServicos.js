import http from './http';

//--> Lista de Serviços
const ListaServicos = {
  getAll: () =>
    new Promise((resolve, reject) => {
      http
        .get('Servico/Servico_Retornar')
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    })
};

export { ListaServicos };