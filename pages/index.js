import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tiago Sistemas</title>
        <meta name="description" content="Sistemas informatizados desenvolvidos por Tiago" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Tiago Sistemas</h1>
          <h2>Organizações</h2>
        <a href="./ufca"><button>UFCA</button></a>
      </main>
    </div>
  )
}
