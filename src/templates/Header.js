
import { PropTypes } from "prop-types"
import { useLocation } from 'react-router-dom'
import Button from '../components/Button'

const Header = ({ title, onAddToggle, showAddTask }) => {

    const location = useLocation()

    const buttonClicked = () => {
        console.log("Button clicked");
    }

    return (
        <header className="header">
            <h2>{title}</h2>

            {location.pathname === '/' && <Button color={showAddTask ? "green" : "blue"}
                text={showAddTask ? 'Add Task' : 'Task toggle'}
                onClick={onAddToggle} />}
        </header>
    )
}

//setting default props
Header.defaultProps = {
    title: 'Task Tracker',
}

//props validations - use typescript, has strong typing
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JSX
const headingStyle = {
    color: 'red',
    backgroundColor: 'black',
}

export default Header;