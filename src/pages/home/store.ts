// Template for Effector state manager
import { createEffect, createEvent, createStore } from "effector"

export const addMovie = createEvent<Movie>()
export const nextMovie = createEvent<string>()
export const clearMovies = createEvent()

const getMoviesFx = createEffect(async (movieId: number) => {
  const url = `movies/${movieId}`
  const base = 'https://jsonplaceholder.typicode.com'
  const req = await fetch(`${base}/${url}`)
  return req.json()
})

type Movie = {
  title: string
  categories: string[]
  minAge?: number
  cast: string[]
  director: string
}

export const $home = createStore<Movie[]>([])
  .on(addMovie, (state, movie) => ([...state, movie]))
  .on(getMoviesFx.doneData, (_, movies) => movies)
  .reset(clearMovies)
