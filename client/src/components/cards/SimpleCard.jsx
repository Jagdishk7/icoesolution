import React from 'react'
import { Card } from 'react-bootstrap'
import './Cards2.css'

const SimpleCard = ({title,desc}) => {
  return (
    <div>
        <Card
          // bg={'secondary'}
          // text='light'
          key={'Secondary'}
          className="mb-2 simplecard"
        >
          <Card.Header className='simplecard-title'>{title}</Card.Header>
          <Card.Body className='simplecard-desc'>
            {/* <Card.Title>{head} </Card.Title> */}
            <Card.Text>
              {desc}
            </Card.Text>
          </Card.Body>
        </Card>
      
    </div>
  )
}

export default SimpleCard
