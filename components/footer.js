import Container from './container'
import { NAME, JOB_TITLE } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="border-t bg-accent-1 border-accent-2">
      <Container>
        <div className="flex flex-col items-center py-20 lg:flex-row">
          <h3 className="mb-2 text-xl font-bold leading-tight tracking-tighter text-center lg:text-xl lg:text-left lg:mb-0 lg:pr-1">
            {NAME}
          </h3>
          <div className="text-xl italic font-medium leading-tight tracking-tighter text-center lg:text-xl lg:text-left lg:mb-0 lg:w-1/2">
            {JOB_TITLE}
          </div>
          <div className="flex flex-col items-center justify-center mt-10 lg:mt-0 lg:flex-row lg:pl-4 lg:w-1/2">
            <p
              className="px-12 py-3 mx-3 mb-6 font-bold text-white transition-colors duration-200 bg-black border border-black lg:px-8 lg:mb-0"
            >
              Follows me
            </p>
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-row items-center justify-center py-5">
          Deploy with Netlify
        </div>
      </Container>
    </footer>
  )
}
