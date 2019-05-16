import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class TasksItem extends React.PureComponent {
  constructor(props) {
    super(props)

    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  handleUpdate() {
    const { id, isDone, onUpdate } = this.props

    return onUpdate(id, {
      isDone: !isDone,
    })
  }

  handleRemove(event) {
    const { id, onRemove } = this.props

    event.stopPropagation()

    return onRemove(id)
  }

  render() {
    const { name, isDone } = this.props

    return (
      <div
        className={cx({
          viemed__Tasks__Item: true,
          'viemed__Tasks__Item--selected': isDone,
        })}
        onClick={this.handleUpdate}
        data-testid="viemed__Tasks__Item"
      >
        <div className="viemed__Tasks__Item__Icon" />
        <div className="viemed__Tasks__Item__Name">{name}</div>

        <img
          src="/public/trash.png"
          className="viemed__Tasks__Item__RemoveIcon"
          onClick={this.handleRemove}
          alt="Remove item"
        />
      </div>
    )
  }
}

TasksItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isDone: PropTypes.bool,
  onUpdate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}

TasksItem.defaultProps = {
  isDone: false,
}

export default TasksItem
