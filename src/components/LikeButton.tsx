import React, { useState, useEffect } from 'react';

function LikeButton() {
  const [like, setLike] = useState(0);
  useEffect(() => {
    console.log('click');
    document.title = `点击了${like}次`;
  }, [like]);

  return (
    <div>
      <button
        onClick={() => {
          setLike(like + 1);
        }}>
        按钮{like}
      </button>
    </div>
  );
}

export default LikeButton;
