"use client";
import homeStyles from '@/app/page.module.css';

export default function About() {
  return (
    <main>
      <nav className={homeStyles.homeNav}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a a href="/about">About</a></li>
          <li><a a href="/">Contact</a></li>
        </ul>
      </nav>
      <h1>About</h1>
      <p>Interests: </p>
      <ul>
         <li>IDK</li>
      </ul>
    </main>
  );
}