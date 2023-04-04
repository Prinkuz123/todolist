import React from 'react'

const ListTask = ({task,index,removetask}) => {
  return (<>
  
    <div className='list-task'>{task.title}
      <button className='dlt-btn' onClick={()=>{removetask(index)}}>
      delete</button>
    </div>
    </>
  )
}

export default ListTask
