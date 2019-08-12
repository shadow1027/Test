import React from 'react'

export default (WrappedComponent, namespace) => {
  return ({ ...props }) => {
    function onPageChange(page, pageSize) {
      props.dispatch({
        type: `${namespace}/getTableData`,
        payload: {
          pageIndex: page, 
          pageSize
        }
      })
    }
    return <WrappedComponent onPageChange={onPageChange} {...props} />
  }
}