import Laptop from "./canvas/Laptop";

export default function Hero({ theme }) {
  return (
    <>
      <div className="mx-auto max-w-6xl p-4  pt-8  md:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="pt-28 ">
            <h1 className="text-4xl font-bold text-accent-green  md:text-6xl">
              Welcome
            </h1>
            <br />
            <p className="pb-16 text-base md:pb-64 md:text-lg">
              I am a <span className="text-accent-purple">Software Engineer</span> at{" "}
              <a
                href="https://valorpaytech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Valor PayTech
              </a>{" "}
              passionate about building user-friendly web apps based in New
              York.
            </p>
          </div>

          <div className="hidden md:block">
            <Laptop theme={theme} />
          </div>
        </div>
      </div>
    </>
  );
}
