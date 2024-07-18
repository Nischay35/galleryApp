import './index.css'
const ThumbnailItem = props => {
  const {imageDetails, clickImageItem, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const onClickImage = () => {
    clickImageItem(id)
  }
  const buttonClassName = isActive ? 'styling' : ''
  return (
      <li className="list-items">
        <button className="btn-image" onClick={onClickImage}>
          <img
            src={thumbnailUrl}
            alt={thumbnailAltText}
            className={`images ${buttonClassName}`}
          />
        </button>
      </li>
  )
}
export default ThumbnailItem
