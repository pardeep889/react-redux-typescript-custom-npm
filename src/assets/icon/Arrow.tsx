import React from 'react';

interface ArrowProps {
  type: "right" | "left";
}

const Arrow = (props: ArrowProps) => {
  const { type } = props;

  switch(type){
    case "left" :
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill-rule="evenodd" 
            clip-rule="evenodd" 
            d="M12 9V5.89728C12 5.09284 11.0984 4.61766 10.4348 5.07232L2.20996 10.7073C1.62863 11.1055 1.63056 11.9641 2.21367 12.3597L10.4385 17.9405C11.1025 18.391 12 17.9154 12 17.113V14H20.0001C20.5524 14 21.0001 13.5523 21.0001 13V10C21.0001 9.44772 20.5524 9 20.0001 9H12Z" 
            fill="#EA0029"
          />
        </svg>
      );
    case "right" :
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill-rule="evenodd" 
            clip-rule="evenodd" 
            d="M10.7751 9V5.89728C10.7751 5.09284 11.6767 4.61766 12.3403 5.07232L20.5652 10.7073C21.1465 11.1055 21.1446 11.9641 20.5615 12.3597L12.3366 17.9405C11.6726 18.391 10.7751 17.9154 10.7751 17.113V14H2.77501C2.22273 14 1.77501 13.5523 1.77501 13V10C1.77501 9.44772 2.22273 9 2.77501 9H10.7751Z" 
            fill="#EA0029"/>
        </svg>
      )
  }
}

export default Arrow;
