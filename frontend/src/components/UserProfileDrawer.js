import React from 'react';

export default function UserProfileDrawer({ setActiveLink }) {
  return (
    <div>
      <a onClick={() => { setActiveLink('skills'); }}>skills</a>
      <a onClick={() => { setActiveLink('songs'); }}>songs</a>
    </div>
  );
}