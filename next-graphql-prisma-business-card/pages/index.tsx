import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center justify-center w-full min-h-screen bg-gray-100">
        <div className="flex items-center justify-center w-1/2 bg-white rounded-full h-96">
          <div className="">
            <Link href="/add">
              <a className="px-6 py-3 text-2xl font-semibold text-white bg-gray-900 rounded-md hover:bg-gray-800">
                Add Your Business Card
              </a>
            </Link>
            <Link href="/search">
              <a className="px-6 py-3 ml-4 text-2xl font-semibold text-white bg-gray-900 rounded-md hover:bg-gray-800">
                Find People
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
