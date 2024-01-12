import { Watch } from '@/widgets/watch'

type WatchParams = {
  movieId: string

}

export const WatchPage = async ({params}: {params: WatchParams}) => {
  return <Watch params={params} />
}
