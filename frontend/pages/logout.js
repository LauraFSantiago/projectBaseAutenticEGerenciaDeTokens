import { useRouter } from "next/router";
import { tokenService } from "../src/services/auth/tokenService";
import React from "react";
import { HttpClient } from "../src/infra/HttpClient/HttpClient";

export default function LogoutPage() {
  const router = useRouter();
  //definir para aplicar so para o client (servidor nao) com effect
  React.useEffect(async () => {
    try {
      await HttpClient('/api/refresh', {
        method: 'DELETE'
      });
      tokenService.delete();
      router.push('/');
    } catch(err) {
      alert(err.message);
    }
  }, []);

  return (
    <div>
      Voçê será redirecionado em instantes...
    </div>
  )
}
