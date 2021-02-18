import Nav from "../components/nav"

export default function Intro() {
  return (
    <section className="flex flex-col items-center mt-16 mb-16 md:flex-row md:justify-between md:mb-12">
      <ul className="flex flex-wrap items-center justify-between py-8">
        <li className="flex space-x-2 flex-between">
          <img src="/assets/peaky-blinders-svg.svg" alt="viendev" />
          <div className="flex items-start my-4">
            <div className="text-3xl font-bold no-underline uppercase md:text-6xl dark:text-blue-300">
              JAM's static story
              <hr className="my-1"></hr>
              <p className="text-sm font-semibold text-transparent md:text-lg bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500">
                An experimental JAMstack blog by vien
              </p>
            </div>
          </div>
        </li>
      </ul>
      {/* <h4 className="mt-5 text-lg text-center md:text-left md:pl-8">
        <Nav></Nav>
      </h4> */}
    </section>
  )
}
