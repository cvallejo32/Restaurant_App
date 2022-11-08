import React from 'react';

const Title = (props) => {
  return (
    <div>
      Estas en {props.titulo} y el subtitulo {props.subtitulo}
    </div>
  );
};

export default Title;