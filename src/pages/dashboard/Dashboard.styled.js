import styled from 'styled-components';

export const DashboardContainer = styled.div``;

// styles for ProjectFilter component
export const FilterContainer = styled.div`
  margin: 30px 0;

  nav {
    display: flex;
    padding: 10px;
    align-items: center;
    background-color: #fff;
    border-radius: 4px;
  }

  p {
    font-size: 0.7em;
    margin-right: 10px;
    letter-spacing: 1px;
  }

  button {
    background: transparent;
    border: 0;
    font-family: inherit;
    font-weight: bold;
    letter-spacing: 1px;
    color: var(--text-color);
    cursor: pointer;
    border-right: 1px solid #e4e4e4;
    font-size: 0.75em;
  }

  button:last-child {
    border: 0;
  }

  button.active {
    color: var(--primary-color);
  }
`;

// export const DashboardContainer = styled.div``

// export const DashboardContainer = styled.div``

// export const DashboardContainer = styled.div``
