const API_KEY = 'AIzaSyBOCVO4r5rOh2qX_rk9o32xTPJLJFCgCQ8'

const searchVideo = async (q) => {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${q}&type=video&key=${API_KEY}`,
  )
  const data = await response.json()
  return data.items
}
export default searchVideo
