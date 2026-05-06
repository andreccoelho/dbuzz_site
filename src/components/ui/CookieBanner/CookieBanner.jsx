import React, { useEffect, useState } from "react";
import * as S from "./Style";

const STORAGE_KEY = "dbuzz_cookies_aceitos_v1";

const CookieBanner = () => {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    try {
      const aceito = localStorage.getItem(STORAGE_KEY);
      if (!aceito) setVisivel(true);
    } catch (_e) {
      // localStorage indisponível (ex.: navegação privada com restrições) — exibe sem persistir
      setVisivel(true);
    }
  }, []);

  const aceitar = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch (_e) {
      /* sem persistência neste navegador */
    }
    setVisivel(false);
  };

  if (!visivel) return null;

  return (
    <S.Bar role="dialog" aria-label="Aviso de cookies">
      <S.Texto>
        Este site usa cookies para análise de desempenho. Ao continuar, você
        concorda com nossa{" "}
        <S.Link href="#/privacidade">Política de Privacidade</S.Link>.
      </S.Texto>
      <S.Btn onClick={aceitar} type="button">
        Aceitar
      </S.Btn>
    </S.Bar>
  );
};

export default CookieBanner;
