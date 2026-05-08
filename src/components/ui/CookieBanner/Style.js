import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Bar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.96);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 5vw;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.68);

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: stretch;
    text-align: left;
    gap: 0.75rem;
    padding: 1rem 16px 1.25rem;
  }
`;

export const Texto = styled.span`
  flex: 1;
  line-height: 1.55;
`;

export const Link = styled.a`
  color: ${theme.cores.amarelo};
  text-decoration: underline;

  &:hover { opacity: 0.85; }
`;

export const Btn = styled.button`
  background: ${theme.cores.amarelo};
  color: #000;
  padding: 0.55rem 1.2rem;
  border-radius: ${theme.raio.sm};
  border: none;
  cursor: pointer;
  font-family: ${theme.fontes.titulo};
  font-weight: 700;
  font-size: 0.84rem;
  white-space: nowrap;
  min-height: 44px;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #000;
    color: ${theme.cores.amarelo};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
  }
`;
