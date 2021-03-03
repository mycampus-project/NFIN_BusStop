import PropTypes from 'prop-types'
import Button from './Button'

const Header = ( { color , title } ) => {
  return (
    <header style = {{ backgroundColor:color}}>
      <h1>{title}</h1>
      <Button color='white' text='Settings'/>
    </header>
  )
}

Button.defaultProps = {
  color: 'blue'
}

Button.prototype = {
  title: PropTypes.string,
  color: PropTypes.string,
}

export default Header