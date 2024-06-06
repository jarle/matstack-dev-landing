import { LinksFunction, type MetaFunction } from '@remix-run/node'
import styles from './styles.css?url'

export const meta: MetaFunction = () => {
  return [{ title: 'matstack' }, { name: 'description', content: '' }]
}
export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export default function Index() {
  return (
    <main>
      <h1>matstack</h1>
      <p>build and deploy really good applications</p>
      <ul>
        <li>
          <a href="https://remix-adonisjs.matstack.dev/">@matstack/remix-adonisjs</a>
        </li>
        {/* <li>
          <a href="https://launchpad.matstack.dev/">launchpad</a>
        </li> */}
      </ul>
      <footer>
        <p>
          created by <a href="">Jarle Mathiesen</a>
        </p>
      </footer>
    </main>
  )
}
