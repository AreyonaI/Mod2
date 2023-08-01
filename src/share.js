import React from 'react'

const Share = () => {
    const shareContent = async () => {
        try {
          // Check if the Web Share API is available
          if (navigator.share) {
            await navigator.share({
              text: 'Check out this Bible verse:',
              title: 'Bible Verse Generator',
              url: `${window.navigator}`, // Replace with the sharable link
            });
          } else {
          }
        } catch (error) {
          console.error('Error sharing:', error);
        }
    };

    return (
        <button onClick={shareContent}>Share this webpage!</button>
      );
    
}

export default Share

  
