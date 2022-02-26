import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'black' : 'green'} text={showAdd ? 'Close' : 'Add Task'} onClick={onAdd}/>
    </header>
  )
}



Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,

}

// const headingStyle = {
//     color: 'red',
//     backgroundColor = 'black',
// }
// can use classes but not really used anymore

export default Header