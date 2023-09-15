import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { QQ, KK } from './locales'

const lang = localStorage.getItem('lang')

i18n.use(initReactI18next).init({
	resources: {
		QQ,
		KK,
	},
	lng: lang || 'QQ',
	fallbackLng: lang || 'QQ',
	react: { useSuspense: true },
	interpolation: { escapeValue: false },
})

export default i18n
