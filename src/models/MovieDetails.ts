import { BelongsToCollection } from './BelongsToCollection'
import { Genre } from './Genre'
import { ProductionCompanies } from './ProductionCompanies'
import { ProductionCountries } from './ProductionCountries'
import { SpokenLanguages } from './SpokenLanguages'

export interface MovieComplete {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: BelongsToCollection
  budget: number
  genres?: Genre[] | null
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies?: ProductionCompanies[] | null
  production_countries?: ProductionCountries[] | null
  release_date: string
  revenue: number
  runtime: number
  spoken_languages?: SpokenLanguages[] | null
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
