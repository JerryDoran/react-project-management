import { FilterContainer } from './Dashboard.styled';

const filterList = [
  'all',
  'mine',
  'development',
  'design',
  'sales',
  'marketing',
];

export default function ProjectFilter({ currentFilter, changeFilter }) {
  const handleClick = (newFilter) => {
    changeFilter(newFilter);
  };

  return (
    <FilterContainer>
      <nav>
        <p>Filter by:</p>
        {filterList.map((filter) => (
          <button
            key={filter}
            onClick={() => handleClick(filter)}
            className={currentFilter === filter ? 'active' : ''}
          >
            {filter}
          </button>
        ))}
      </nav>
    </FilterContainer>
  );
}
