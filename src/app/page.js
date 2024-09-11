// import Image from "next/image";
// import styles from "./page.module.css";
"use client";
import homeStyles from '@/app/page.module.css';

export default function Home() {

  const headerStyle = {
    backgroundColor: 'lightblue',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  function openModal() {
    console.log("open");
  }

  //variable
  const myName = "Naila-la-la";

  //array
  const farmAnimals = [
    "seal, ",
    "polar bear, ",
    "red panda, ",
    "iguana, ",
    "turtle"
  ];

  //object
  const person = {
    name: "Naila haha",
    hairColor: "black",
    eyeColor: "brown"
  }

  const someNumber = 0;

  const isItChuesday = false;

  return (
    // <main className={styles.main}>
    //   <div className={styles.description}>
    //     <p>
    //       Get started by editing&nbsp;
    //       <code className={styles.code}>src/app/page.js</code>
    //     </p>
    //     <div>
    //       <a
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{" "}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className={styles.vercelLogo}
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className={styles.center}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className={styles.grid}>
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Docs <span>-&gt;</span>
    //       </h2>
    //       <p>Find in-depth information about Next.js features and API.</p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Learn <span>-&gt;</span>
    //       </h2>
    //       <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Templates <span>-&gt;</span>
    //       </h2>
    //       <p>Explore starter templates for Next.js.</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Deploy <span>-&gt;</span>
    //       </h2>
    //       <p>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
    <main>
      <nav className={homeStyles.homeNav}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a a href="/about">About</a></li>
          <li><a a href="/">Contact</a></li>
        </ul>
      </nav>
      <h1 style={headerStyle}>Next.js App</h1>
      <p className={homeStyles.callout}>
        This is a very sunny day here in Rainyville. Signing off, {myName}.
      </p>
      <p> Array of farm animals: {farmAnimals}</p>
      <p> Person: {JSON.stringify(person)}</p>
      <p> Times ive said nothing: {someNumber}</p>
      <p> Is it Chuesday, innit? {isItChuesday}</p>
      <button onClick={openModal}>view sun</button>

       {/* product section */}
       <div className={homeStyles.productContainer}>
        {/* first product */}
        <div>
          <img src='https://upload.wikimedia.org/wikipedia/commons/e/e7/%22AM%22_%28Arctic_Monkeys%29.jpg'
          height='200px' width='200px'
          alt='AM'
          />
          <p>Arctic Monkeys - AM</p>
          <p>$15.00</p>
          <button>View</button>
        </div>
        {/* second product */}
        <div>
          <img src='https://upload.wikimedia.org/wikipedia/commons/f/f9/Suckitandsee.jpg'
          height='200px' width='200px'
          alt='Suck it and See'/>
          <p>Arctic Monkeys - Suck it and See</p>
          <p>$10.00</p>
          <button>View</button>
        </div>
        {/* third product */}
        <div>
          <img src='https://upload.wikimedia.org/wikipedia/en/2/20/Arcticmonkeys-humbug.jpg'
          height='200px' width='200px'
          alt='Humbug'/>
          <p>Arctic Monkeys - Humbug</p>
          <p>$12.00</p>
          <button>View</button>
        </div>
      </div>
    </main>
  );
}
