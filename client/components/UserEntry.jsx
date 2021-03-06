import React from 'react';
import UserCircle from '../styles/entries/UserCircle'

const styles = {
  image: {
    borderRadius: '50%',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#fff',
    backgroundImage: 'linear-gradient(to right top, #051937, #0f465b, #447476, #84a192, #c9cfba)'
  },
  listItem: {
    display: 'inline'
  },
  li: {
    whiteSpace: 'nowrap',
    overflowX: 'auto',
    overflowY: 'hidden',
    display: 'inline',
    listStyleType: 'none',
    margin: '-7.75px',
    padding: '2px',
  }
}

const UserEntry = props => {
  // {console.log(props.user)}
  return (
    <UserCircle style={styles.li}>
      <img 
      height={38} 
      width={38} 
      style={styles.image}
      onLoad={(e) => props.load(e)}
      src={props.user.pic}
      alt="userName"/>
    </UserCircle>
  )
}

export default UserEntry;