import { withSession } from "../src/services/auth/session"

export default function AuthPageServerSideRendering(props) {
  return (
    <div>
      <h1>
        Auth Page Server Side Rendering
      </h1>
      <p>
        <a href="/logout">Logout</a>
      </p>
      <pre>
        {JSON.stringify(props, null, 2)}
      </pre>
    </div>
  )
}

// Decorator Pattern - gssp mais genérico
export const getServerSideProps = withSession((ctx) => {
  return {
    props: {
      session: ctx.req.session,
    }
  }
})

// export async function getServerSideProps(ctx) { //ctx é referente a contexto
//   try {
//     const session = await authService.getSession(ctx);
//     // console.log('session', session);
//     return {
//       props: {
//         session,
//       },
//     }
//   } catch (error) {
//     console.log('error', error);
//     return {
//       redirect: {
//         permanent: false,
//         destination: '/?error=unauthorized',
//       }
//     }
//   }
// }

