'use client'

import Link from 'next/link'
// import { useAuth } from '@/hooks/auth'

const LoginLinks = () => {
  // const { user } = useAuth({ middleware: 'guest' })

  return (
    <>
      {/* <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
        {user ? (
          <Link
            href="/dashboard"
            className="ml-4 text-sm text-gray-700 underline">
            Dashboard
          </Link>
        ) : (
          <>
            <Link href="/login" className="text-sm text-gray-700 underline">
              Login
            </Link>

            <Link
              href="/register"
              className="ml-4 text-sm text-gray-700 underline">
              Register
            </Link>
          </>
        )}
      </div> */}

      <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            conduit
          </a>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <Link className="nav-link active" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="editor">
                {' '}
                <i className="ion-compose" />
                &nbsp;New Article{' '}
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/settings">
                {' '}
                <i className="ion-gear-a" />
                &nbsp;Settings{' '}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile/eric-simons">
                <img src="" className="user-pic" />
                Eric Simons
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            conduit
          </a>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Sign in
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/register">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
    </>
  )
}

export default LoginLinks
