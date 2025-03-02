import { tacticFont } from "./fonts";
import { UpdateBlock } from "./components/update-block";
import { Suspense } from 'react'
import { MatchesList } from './components/matches-list'
import { ErrorBoundary } from "./components/error-boundary";

export default function Home() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <main className="bg-dark flex flex-col gap-8 px-md py-53">
          <div className='flex justify-between'>
            <h1 className={`${tacticFont.className} text-3xl`}>Match Tracker</h1>
            <UpdateBlock />
          </div>
          <MatchesList />
        </main>
      </Suspense>
    </ErrorBoundary>
  )
}