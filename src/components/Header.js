import Button from './Button'

const Header = ( {title} ) => {
  return (
    <header>
      <h1>{title}</h1>
      <Button color='blue' text='Settings'/>
    </header>
  )
}

export default Header