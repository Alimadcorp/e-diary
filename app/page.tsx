import { HomePostPreview } from "./components";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-4xl flex-col items-center justify-center gap-12 px-6 py-20 text-center sm:items-start sm:text-left">
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
            E-Diaries
          </h1>
          <p className="max-w-xl text-lg text-left leading-relaxed text-zinc-600 dark:text-zinc-400">
            Electronic diary? Diary for section E? Either way, this is a place where you can <span className="text-white">write about your day or week</span> and <span className="text-white">share experiences</span> with others, see the same experience but from other's shoes, and <span className="text-white">critique or comment</span> on those experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 w-full gap-4 font-medium sm:grid-cols-2">
          <HomePostPreview title="The Very First Day" desc="Ok so, on the first day of..." date={new Date()} author="MeowMad" read={true} path="/abc"/>
          <HomePostPreview title="The Very First Day" desc="Ok so, on the first day of..." date={new Date()} author="MeowMad" read={false} path="/def"/>
        </div>

        <div className="flex flex-col w-full sm:w-auto gap-4 font-medium sm:flex-row">
          <a
            className="flex h-12 items-center justify-center rounded-full border border-zinc-200 px-8 text-black transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-white dark:hover:bg-zinc-900"
            href="/browse"
            target="_blank"
            rel="noopener noreferrer"
          >
            Browse
          </a>
          <a
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-black dark:bg-white px-6 text-white dark:text-black transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
            href="/create"
            target="_blank"
            rel="noopener noreferrer"
          >
            GET WRITING YOU FOOL
          </a>
        </div>
      </main>
    </div>
  );
}
