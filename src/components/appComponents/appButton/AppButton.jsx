

const AppButton = ({caption, type="1", fx}) => {
  return (
    <div className={`btn-${type}`} onClick={fx}>
      {caption}
    </div>
  )
}

export default AppButton;