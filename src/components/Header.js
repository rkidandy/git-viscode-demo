import PropTypes from 'prop-types';

const Header = ({title}) => {
    return (
        <header>
            <h1 style={{color: 'red'}}>Task Tracker {title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
