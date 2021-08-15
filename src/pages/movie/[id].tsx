import MovieDetails, { Props } from 'components/MovieDetails'
import { apiKey, apiUrl } from 'config/config'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

export default function Index(props: Props) {
  const router = useRouter()

  if (router.isFallback) return <span>Loading movie...</span>

  return <MovieDetails {...props} />
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id
  const res = await fetch(
    `${apiUrl}/movie/${id}?api_key=${apiKey}&language=en-US`
  )

  if (!res.ok) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  const movie = await res.json()

  return { props: { movie } }
}
