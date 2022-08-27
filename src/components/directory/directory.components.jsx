import CategoryItem from '../category-item/category-item.components';

import './directory.styles.scss';
const Directory = ({ category }) => {
  return (
    <div
      className='directory-container'
      // style={{
      //   display: 'flex',
      //   justifyContent: 'space-between',
      //   flexWrap: 'wrap',
      //   width: '100%',
      // }}
    >
      {category.map((categoty) => (
        <CategoryItem key={categoty.id} categories={categoty} />
      ))}
    </div>
  );
};

export default Directory;
