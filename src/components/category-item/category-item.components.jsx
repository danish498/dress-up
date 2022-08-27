import './category-item.style.scss';

const CategoryItem = ({ categories }) => {
  console.log(categories);
  const { title, imageUrl } = categories;

  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
