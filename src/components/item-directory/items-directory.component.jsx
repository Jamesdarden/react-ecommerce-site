import './items-directory.styles.scss'
import CategoryItem from '../category-item/category-item.component';


// props.categories
const Directory = ({categories}) => {
    return (
        <div className="directory-container">
        {categories.map((category) => (
         
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    )
}

export default Directory