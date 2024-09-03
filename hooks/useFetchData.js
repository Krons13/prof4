import { useState, useEffect } from "react"

const useFetchData = () => {
  const [data, setData] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData() // Подразумевается, что getData уже определен где-то
        setData(res)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return data
}

export default useFetchData
