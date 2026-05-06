import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Bar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 200;
  background: rgba(6, 16, 42, 0.97);
  backdrop-filter: blur(8px);
  border-top: 1px solid rgba(255, 255, 255, 0.09);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.85rem 5vw;
  font-size: 0.83rem;
  color: rgba(255, 255, 255, 0.72);

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
    gap: 0.7rem;
  }
`;

export const Texto = styled.span`
  flex: 1;
  line-height: 1.55;
`;

export const Link = styled.a`
  color: ${theme.cores.amarelo};
  text-decoration: underline;

  &:hover {
    opacity: 0.85;
  }
`;

export const Btn = styled.button`
  background: ${theme.cores.amarelo};
  color: ${theme.cores.azul};
  padding: 0.42rem 1.05rem;
  border-radius: ${theme.raio.sm};
  border: none;
  cursor: pointer;
  font-family: ${theme.fontes.titulo};
  font-weight: 700;
  font-size: 0.82rem;
  white-space: nowrap;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.88;
  }
`;
