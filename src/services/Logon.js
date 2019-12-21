import http from './http';

const Logon = {
  signIn: ({ email, password }) =>
    new Promise((resolve, reject) => {
      http
        .get('/Profissional/Login', { params: { email, senha: password } })
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    }),
  signOut: () => {}
};

export { Logon };