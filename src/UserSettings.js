import React, { useState } from 'react';

function UserSettings() {

  const [menuOpened, setMenuOpened] = useState(false);

  const slideMenu = () => {
    return menuOpened ? {} : { marginBottom: -230 }
  }
  
  const menuIconClicked = () => {
    setMenuOpened(!menuOpened)
  }

  return (
    <div>
      <div className="settings">
        <h4>Favourites</h4>
        <h4>Favourites</h4>
        <h4>Favourites</h4>
        <h4>Favourites</h4>
      </div>
    </div>
  );
}

export default UserSettings;