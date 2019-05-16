import React from 'react'
import PropTypes from 'prop-types'

import Input from 'components/Input'
import TasksItem from './Item'

import './styles.sass'

function Tasks({ items, onCreateItem, onRemoveItem, onUpdateItem }) {
  return (
    <div className="viemed__Tasks">
      {items.length === 0 ? (
        <div
          className="viemed__Tasks__EmptyMessage"
          data-testid="viemed__Tasks__EmptyMessage"
        >
          Hey, you don’t have any task created. Do you wanna start by creating one?
        </div>
      ) : items.map(({ id, name, isDone }) => (
        <TasksItem
          key={id}
          id={id}
          name={name}
          isDone={isDone}
          onRemove={onRemoveItem}
          onUpdate={onUpdateItem}
        />
      ))}

      <div className="viemed__Tasks__AddItem">
        <div className="viemed__Tasks__AddItem__Icon" />

        <Input
          placeholder="Add a new item..."
          onSubmit={onCreateItem}
          size="small"
          className="viemed__Tasks__AddItem__Control"
        />
      </div>
    </div>
  )
}

Tasks.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isDone: PropTypes.bool,
  })),
  onCreateItem: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onUpdateItem: PropTypes.func.isRequired,
}

Tasks.defaultProps = {
  items: [],
}

export default React.memo(Tasks)
