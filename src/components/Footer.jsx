export default function Footer() {
  return (
    <>
      <footer className="mt-12 border-t-2  border-accent-green bg-white shadow dark:bg-dark-bg ">
        <div className="mx-auto w-full max-w-screen-xl p-8 md:flex md:items-center md:justify-between">
          <span className="text-base  sm:text-center">© Kevin Thomas {new Date().getFullYear()}</span>
          <ul className="mt-3 flex flex-wrap items-center text-sm font-medium sm:mt-0">
            <li>
              <a
                href="https://github.com/KevinThomasNY"
                target="_blank"
                className="mr-4 hover:underline md:mr-6 "
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kevin-thomas-ny/"
                target="_blank"
                className="mr-4 hover:underline md:mr-6"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Back to Top
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
