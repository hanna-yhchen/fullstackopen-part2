type useState<T> = [T, React.Dispatch<React.SetStateAction<T>>]

declare type Country = {
  name: string,
  officialName: string,
  region: string,
  capital: CapitalInfo,
  area: number,
  flagImage: ImageInfo,
  languages: string[]
}

declare type CapitalInfo = {
  name: string,
  lat?: number,
  lon?: number
}

declare type ImageInfo = {
  url: string,
  alt?: string
}

declare type WeatherInfo = {
  description: string,
  temperature: number,
  windSpeed: number,
  iconUrl: string
}
