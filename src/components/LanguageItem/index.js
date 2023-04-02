import './index.css'

const LanguageItem = props => {
  const {languageDetails} = props
  const {imageUrl, imageAltText} = languageDetails
  return (
    <>
      <img className="item-image" src={imageUrl} alt={`${imageAltText}`} />
    </>
  )
}

export default LanguageItem
