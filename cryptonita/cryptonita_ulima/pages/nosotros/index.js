import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      
      <main className={styles.main}>
      <header className={styles.header}>
        
        <Image src="/meta.png" alt="Vercel Logo" width={150} height={70} />
            
          </header>
      <header className={styles.back}>
        
        <Image src="/back.png" alt="Vercel Logo" width={40} height={40} />
            
          </header>
        <h1 className={styles.title}>Nosotros
        
        </h1>

        <div className={styles.columns2}>
       
        <div className={styles.column2}> 
        <a href="https://nextjs.org/docs" className={styles.card}>
        <Image src="/persona.jpg" alt="Vercel Logo" width={200} height={300} />

            <p>Rodrigo Salazar Vega

            </p>
          </a>
        </div>
        <div className={styles.column2}> 
        <Image src="/persona.jpg" alt="Vercel Logo" width={200} height={300} />

        <a href="https://nextjs.org/docs" className={styles.card}>
            <p>Juan de Diego rojas Saldarriaga

            </p>
          </a>
        </div>
        <div className={styles.column2}> 
        <Image src="/persona.jpg" alt="Vercel Logo" width={200} height={300} />

        <a href="https://nextjs.org/docs" className={styles.card}>
            <p>Luis Manuel Mondoñedo Cabanillas

            </p>
          </a>
        </div>

        <div className={styles.column2}> 
        <Image src="/persona.jpg" alt="Vercel Logo" width={200} height={300} />

        <a href="https://nextjs.org/docs" className={styles.card}>
            <p>Leonardo Guillermo Falcon Choque

            </p>
          </a>
        </div>
          
          
          
        </div>
      </main>

      <footer className={styles.footer}>
      <div class="row">
    <div class="col">
    <span className={styles.logo}>
            <Image src="/logo.jpg" alt="Vercel Logo" width={1000} height={500} />
          </span>
    </div>
    <div class="col-6">
    <div class="row">
  <div class="col-4">
      <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <p>Nosotros

            </p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <p>T Y C</p>
          </a>

          
        </div></div>
  <div class="col-8">
  <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <p>2022 Nombre todos los derechos reservados
            </p>
          </a>

         

          
        </div></div>
</div>

    </div>
    <div class="col">
      <p>Rodrigo Salazar Vega</p>
      <p>Luis Manuel Mondoñedo Cabanillas - 20173617</p>
      <p>Leonardo Guillermo Falcón Choque - 20190702</p>
      <p>Juan Diego Rojas</p>

    </div>
  </div>
          
      </footer>
    </div>
  );
}