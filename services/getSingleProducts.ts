import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

const getSingleProducts = (id:any) => {
  const {data = [], isLoading} = useQuery({
    queryKey:['single_products'],
    queryFn:() => instance().get(`/products/${id}`).then(res => res.data)
  })

  return {data, isLoading}
}

export default getSingleProducts
