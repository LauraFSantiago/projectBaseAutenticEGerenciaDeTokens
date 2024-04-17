import React from 'react';
import { useRouter } from  'next/router';
import { authService } from '../src/services/auth/authService';

export default function HomeScreen() {
  const router = useRouter(); //para buscar a proxima pag ao clicar no botão
  const [values, setValues] = React.useState({
    usuario: 'laurasantiago',
    senha: 'safepassword',
  });

  function handleChange(event) {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    setValues((currentValues) => {
      return {
        ...currentValues,
        [fieldName]: fieldValue,
      };
    });
  }

  return (
    <div>
      <h1>Login</h1>
      {/* onSubmit ->Controller (pega dados do user e passa para um serviço)
          authService -> serviço
      */}
      <form onSubmit={(event) => {
        event.preventDefault();
        authService
        .login({
          username: values.usuario,
          password: values.senha
        })
        .then(() => { //o .then é uma promise, ou seja, se der tudo certo e faz o router
          // console.log(values);
          // router.push('/auth-page-static')
          router.push('/auth-page-ssr') //enviando nosso user autenticado para pag do evento do botão
        })
        .catch((err) => {
          alert('o usuario ou a senha estão inválidos!');
          console.log(err);
        });
      }}>
        <input
          placeholder="Usuário" name="usuario"
          value={values.usuario} onChange={handleChange}
        />
        <input
          placeholder="Senha" name="senha" type="password"
          value={values.senha} onChange={handleChange}
        />
        {/* <pre>
           {JSON.stringify(values, null, 2)} // fazendo um debug
        </pre> */}
        <div>
          <button>
            Entrar
          </button>
        </div>
        <p>
          <a href="/auth-page-ssr">auth page ssr</a>
          <a href="/auth-page-static">auth page static</a>
        </p>
      </form>
    </div>
  );
}
