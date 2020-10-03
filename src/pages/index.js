import React from 'react'

const fallback = <div />
const Suspensed = Element =>
  function suspense(props) {
    return (
      <React.Suspense fallback={fallback}>
        <Element {...props} />
      </React.Suspense>
    )
  }

export default [
  { component: Suspensed(React.lazy(() => import('./Home'))), path: '/' },
  { component: Suspensed(React.lazy(() => import('./About'))), path: '/about' },
  { component: Suspensed(React.lazy(() => import('./Github'))), path: '/github' },
  { component: Suspensed(React.lazy(() => import('./404'))), path: '*' },
]
