import React from 'react';

const columns = [
    {
      label: 'Marvel-IMG',
      field: 'thumbnail'
    },
    {
      label: 'title',
      field: 'title',
      width: 150
    },
    {
      label: 'description',
      field: 'description',
      width: 150
    },
    {
      label: 'format',
      field: 'format',
      sort: 'asc',
      width: 0
    },
    {
      label: 'titleHidden',
      field: 'titleHidden',
      sort: 'asc',
      width: 0 
    }
  ]
export default columns;