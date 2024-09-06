import { type MetaFunction } from '@remix-run/node'
import { Container } from '~/components/Container.js'

export const meta: MetaFunction = () => {
  return [{ title: 'matstack' }, { name: 'description', content: '' }]
}

export default function Index() {
  return (
    <Container>
      <div className='flex flex-col gap-12 text-center'>
        <div>
          <h1 className='text-4xl font-extrabold'>matstack.dev</h1>
          <h2 className='mt-1 text-lg'>build and deploy really good applications</h2>
        </div>
        <ul>
          <li>
            <a className='underline' href="https://matstack.dev/remix-adonisjs">@matstack/remix-adonisjs</a>
          </li>
          <li>
            <div>@matstack/dreamstart (coming soon)</div>
          </li>
        </ul>
      </div>

      <footer className='mt-32 text-center'>
        <div className='text-gray-700'>
          created by <a href="https://mathiesen.dev" className='font-bold'>Jarle Mathiesen</a>
        </div>
      </footer>
    </Container>
  )
}
