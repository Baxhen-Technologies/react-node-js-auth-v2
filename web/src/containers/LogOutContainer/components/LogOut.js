import React, { useEffect, memo } from 'react';

function LogOut({ logOut }) {
  useEffect(() => {
    logOut();
  }, [logOut]);
  return <div />;
}

export default memo(LogOut);
