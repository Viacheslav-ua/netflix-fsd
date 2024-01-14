import { Watch } from '@/widgets/watch'

type WatchParams = {
  movieId: string

}

const WatchPage = async ({params}: {params: WatchParams}) => {
  return <Watch params={params} />
}

export default WatchPage