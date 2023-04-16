import './index.css'

const BlogItem = props => {
  const {obj} = props
  const {title, description, publishedDate} = obj
  return (
    <li className="item">
      <div className="row">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
    </li>
  )
}
export default BlogItem
