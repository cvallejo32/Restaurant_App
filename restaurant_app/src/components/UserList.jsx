import React from 'react';

const UserList = (props) => {
  return (
    <div>
      Estas en {props.titulo} y el subtitulo {props.subtitulo}
    </div>
  );
};

export default UserList;