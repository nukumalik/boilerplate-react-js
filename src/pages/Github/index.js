import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from 'store/github/actions'

import css from './github.module.scss'

const Github = () => {
  // Global variables
  const dispatch = useDispatch()
  const { code, data, isLoading, message } = useSelector(state => state.Github)

  // Hooks
  useEffect(() => {
    dispatch(fetchData())
  }, [])

  if (isLoading) return <div>Loading...</div>

  if (Number(code) >= 400 && message)
    return (
      <h1>
        {code}: {message}
      </h1>
    )

  return (
    <div className={css.wrapper}>
      {data.length ? (
        data.map(item => (
          <div key={item.login} className={css.card}>
            <img alt={item.login} src={item.avatar_url} />
            <h3>{item.login}</h3>
          </div>
        ))
      ) : (
        <h1>Data is empty</h1>
      )}
    </div>
  )
}

export default Github
