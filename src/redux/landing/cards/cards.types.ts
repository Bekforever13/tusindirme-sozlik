export type TWordCard = {
	id: number
	title_latin: string
	title_kiril: string
}

export type TCardPropType = {
	title: string
	words: TWordCard[]
}

export interface IWordCardsRes {
	in_correct: TWordCard[]
	max: TWordCard[]
	random: TWordCard[]
}
