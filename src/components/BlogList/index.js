import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {list} = props
  return (
    <div className="list">
      <ul>
        {list.map(eachItem => (
          <BlogItem key={eachItem.id} obj={eachItem} />
        ))}
      </ul>
    </div>
  )
}
export default BlogList
