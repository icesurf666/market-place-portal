import isPlainObject from 'lodash/isPlainObject'
import { useCallback, useState } from 'react'
import handleError from 'api/error'

export interface IUseFetch<T> {
  data: T | null,
  loading: boolean,
  loaded: boolean,
  error: Error | null,
  fetch: (...args: any[]) => any,
  clear: () => void,
  set: (data: T | null) => void,
  progress: number | null,
}

export interface IUseFetchOptions<T> {
  onSuccess?: (data: T) => any,
  onFailure?: (error: any) => any,
}

export type ApiFunction<T> = (...args: any[]) => Promise<T>

function useFetch<T>(api: ApiFunction<T>, params: IUseFetchOptions<T> = {}): IUseFetch<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [progress, setProgress] = useState<number | null>(null)

  const onProgress = useCallback((progressEvent: ProgressEvent) => {
    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
    setProgress(percentCompleted)
  }, [api, setProgress])

  const fetch = useCallback(async (...args: any[]) => {
    const argumens = [...args]
    const options = argumens.pop()
    const changedOption = isPlainObject(options) ? {...options, onProgress } : options
    setLoading(true)
    setError(null)
    setProgress(0.01)
    try {
      const payload = await api(...[...argumens, changedOption])
      setData(payload)
      setLoaded(true)
      if (params.onSuccess) { params.onSuccess(payload) }
    } catch (e) {
      setError(e)
      handleError(e)
      if (params.onFailure) { params.onFailure(e) }
    } finally {
      setProgress(null)
      setLoading(false)
    }
  }, [api])

  const clear = useCallback(() => {
    setData(null)
  }, [api])

  return { data, loading, loaded, error, fetch, clear, set: setData, progress }
}

export default useFetch
