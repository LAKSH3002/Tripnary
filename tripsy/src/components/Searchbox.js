import React from 'react'
import "./searchbox.css";

export default function Searchbox() {
  return (
    <div class="search-box">
        <input type="text" class="search-input" placeholder="Search Your Desired Destination.."/>
        <button class="search-button">Search Now!!</button>
    </div>
  )
}
