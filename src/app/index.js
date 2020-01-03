import React, { Component } from 'react';
import styles from './styles.css';
import Social from './social'
export default () => {
  return (
    <div id='container'>
    {/* header */}
      <div id='header'>
        <span id="title">Talha Ashraf</span>
        <div id="nav">
        <span className="nav">About</span>
        <span className="nav">Projects</span>
        </div>
      </div>
    <div id="overview">
    "A Cross Platform Mobile App Developer fallen in love with 'React Native' with extensive experience ,have developed and contributed numerous mobile apps available on App Store & Play Store"
    </div>

      {/* footer */}
        <div id="footer">
        <Social/>
        </div>
    </div>
  );
};
