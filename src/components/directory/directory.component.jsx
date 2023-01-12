import {DirectoryContainer} from './directory.styles.jsx'
import DirectoryItem from '../directory-item/directory-item.component'


// props.categories
const Directory = ({categories}) => {
    return (
        <DirectoryContainer>
        {categories.map((category) => (
         
          <DirectoryItem key={category.id} category={category} />
        ))}
      </DirectoryContainer>
    )
}

export default Directory