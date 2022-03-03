import React from "react";
import '../App.css';

function Notes(){

    const date = new Date();
    const day = date.getDay()
    const month = date.getMonth()
    const year = date.getFullYear()
    return (
        <div class="card">
        <div class="card-header">
        Title
        </div>
        <div class="card-body">
        <blockquote class="blockquote mb-0">
            <p>A well-known quote, contained in a blockquote element.</p>
            <footer class="blockquote-footer">{day}/{month}/{year}</footer>
        </blockquote>
        </div>
        </div>
    );
}

export default Notes;