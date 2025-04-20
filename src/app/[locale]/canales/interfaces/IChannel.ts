import { ICategory } from "./ICategory"
import { ILanguage } from "./ILanguage"

export interface IChannel {
  id: number
  name: string,
  description: string,
  url: string,
  channel_category: { category: ICategory }[],
  channel_language: { language: ILanguage }[]
}