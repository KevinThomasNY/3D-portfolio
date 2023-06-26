import { DiFirebase, DiReact, DiTerminal } from "react-icons/di";

export default function Technologies() {
  return (
    <div id="tech" className="mx-auto max-w-6xl p-4 pb-24 pt-24">
      <h1 className="text-4xl md:pb-12 md:text-6xl">Technologies</h1>
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <DiReact className="text-5xl text-blue-400" />
            <h3 className="ml-2 text-2xl font-bold ">Front-End</h3>
          </div>
          <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
            React <br />
            Next.js
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <DiFirebase className="text-5xl text-blue-400" />
            <h3 className="ml-2 text-2xl font-bold">Back-End</h3>
          </div>
          <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
            Node.js <br />
            Express.js <br />
            MongoDB <br />
            Laravel <br />
            MySQL <br />
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <DiTerminal className="text-5xl text-blue-400" />
            <h3 className="ml-2 text-2xl font-bold">Programming Languages</h3>
          </div>
          <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
            JavaScript <br />
            PHP <br />
            Java <br />
            Kotlin <br />
            C# <br />
          </p>
        </div>
      </div>
    </div>
  );
}
