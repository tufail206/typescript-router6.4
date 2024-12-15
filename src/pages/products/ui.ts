import styled from "styled-components";

export let ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 30px 0;

  & .card {
    width: 26%;
       background-color: #f2f2f2;
      border-radius: 10px;
    box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: 786px) {
      width: 42%; // Adjust width for medium screens
    }

    @media (max-width: 486px) {
      width: 86%; // Adjust width for small screens
    }
  }
`;
