import React from 'react';

interface ArrowProps {
  type: "right" | "left" | "up" | "down";
  tail?: Boolean 
}

const Arrow = (props: ArrowProps) => {
  const { type,tail } = props;
  const DEGREES = {
    'left': 0,
    'up': 90,
    'right': 180,
    'down': 270
  }
  const Arrow = (
    <svg transform={`rotate(${DEGREES[type]})`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 9V5.89728C12 5.09284 11.0984 4.61766 10.4348 5.07232L2.20996 10.7073C1.62863 11.1055 1.63056 11.9641 2.21367 12.3597L10.4385 17.9405C11.1025 18.391 12 17.9154 12 17.113V14H20.0001C20.5524 14 21.0001 13.5523 21.0001 13V10C21.0001 9.44772 20.5524 9 20.0001 9H12Z" fill="#EA0029" />
    </svg>
    );
    
    const ArrowWithoutTail = (
      <svg transform={`rotate(${DEGREES[type]+90}),translate(0,1)`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.01329 9L15.9867 9C16.9059 9 17.3484 10.1859 16.6747 10.8438L12.7102 14.7158C12.3238 15.0932 11.7267 15.0949 11.3384 14.7198L7.32944 10.8478C6.65027 10.1919 7.09137 9 8.01329 9Z" fill="#EA0029"/>
      </svg>
      
      );
      
      return (
        tail ? Arrow : ArrowWithoutTail
        );
        
      }
      
      export default Arrow;
