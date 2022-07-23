import PropTypes from 'prop-types';
import css from './FeedBackOptions.module.css'


const FeedBackOptions = ({options, onLeaveFeedback}) => {
    return <div>
        {options.map(option => {
            return (
                <button
                    className={css.btn_feedback}
                    key={option}
                    type='button'
                    onClick={onLeaveFeedback}
                    name={option}
                >
                    {option}
                </button>
          )
      })}
  </div> 
}


export default FeedBackOptions

FeedBackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options:PropTypes.arrayOf(PropTypes.string.isRequired)
}