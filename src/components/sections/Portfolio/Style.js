import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";

export const Wrapper = styled.section`
  background: ${theme.cores.bg};
  padding: 5rem 5vw;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3.5rem 5vw;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Label = styled.span`
  display: inline-block;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: ${theme.cores.azul2};
  margin-bottom: 0.6rem;
`;

export const Title = styled.h2`
  font-family: ${theme.fontes.titulo};
  font-size: clamp(1.7rem, 2.8vw, 2.4rem);
  font-weight: 800;
  color: ${theme.cores.azul};
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin-bottom: 0.85rem;
`;

export const Sub = styled.p`
  font-size: 1rem;
  color: ${theme.cores.sub};
  line-height: 1.72;
  max-width: 590px;
  margin-bottom: 2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
  margin-top: 0.5rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: ${theme.raio.lg};
  border: 1px solid ${theme.cores.borda};
  overflow: hidden;
  transition: transform 0.25s, box-shadow 0.25s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(14, 37, 84, 0.1);
  }
`;

const variantesImg = {
  pi1: "linear-gradient(135deg, #E8F5F2, #B8EAE0)",
  pi2: "linear-gradient(135deg, #EEF2FF, #C5D4FF)",
  pi3: "linear-gradient(135deg, #FFF8E1, #FFE082)",
  pi4: "linear-gradient(135deg, #F0F8FF, #C0D8F8)",
  pi5: "linear-gradient(135deg, #FFF0E8, #FFD0B0)",
  pi6: "linear-gradient(135deg, #F5F0FF, #D8C0FF)",
};

export const ImgBox = styled.div`
  height: 158px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.8rem;
  position: relative;
  background: ${({ $variante }) => variantesImg[$variante] || variantesImg.pi1};
`;

export const Badge = styled.span`
  position: absolute;
  top: 0.65rem;
  left: 0.65rem;
  font-size: 0.67rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.17rem 0.58rem;
  border-radius: 100px;

  ${({ $tipo }) =>
    $tipo === "priv"
      ? css`
          background: rgba(0, 150, 106, 0.88);
          color: #fff;
        `
      : $tipo === "pub"
      ? css`
          background: rgba(14, 37, 84, 0.88);
          color: ${theme.cores.amarelo};
        `
      : css`
          background: rgba(184, 86, 0, 0.88);
          color: #fff;
        `}
`;

export const Body = styled.div`
  padding: 1.2rem 1.3rem 1.4rem;
`;

export const CardTitle = styled.h4`
  font-family: ${theme.fontes.titulo};
  font-size: 0.94rem;
  font-weight: 700;
  color: ${theme.cores.azul};
  margin-bottom: 0.32rem;
  line-height: 1.3;
`;

export const CardDesc = styled.p`
  font-size: 0.85rem;
  color: ${theme.cores.sub};
  line-height: 1.55;
  margin-bottom: 0.8rem;
`;

export const Tags = styled.div`
  display: flex;
  gap: 0.35rem;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  font-size: 0.71rem;
  font-weight: 600;
  padding: 0.17rem 0.58rem;
  border-radius: 100px;
  background: ${theme.cores.bg};
  color: ${theme.cores.sub};
`;
