import styles from './Word.module.scss'
import { useParams } from 'react-router-dom'
import { useGetUserWordQuery } from 'src/redux/index.endpoints'
import React, { useState, useRef } from 'react'
import { Spin } from 'antd'
import { FaVolumeUp, FaStop } from 'react-icons/fa'
import { Antonim } from './antonim/Antonim'
import { Sinonim } from './sinonim/Sinonim'

const Word: React.FC = () => {
	const [isPlaying, setIsPlaying] = useState(false)
	const { id } = useParams()
	const { data, isFetching } = useGetUserWordQuery(id!)
	const lang = localStorage.getItem('lang')
	const audioRef = useRef<HTMLAudioElement>(null)

	const playAudio = () => {
		if (audioRef.current) {
			audioRef.current.play()
			setIsPlaying(true)
		}
	}

	const stopAudio = () => {
		if (audioRef.current) {
			audioRef.current.pause()
			audioRef.current.currentTime = 0
			setIsPlaying(false)
		}
	}

	return (
		<Spin spinning={isFetching}>
			<div className={styles.root}>
				<div className={styles.word}>
					<h2>
						{lang === 'QQ' ? data?.data.title.latin : data?.data.title.kiril}
					</h2>
				</div>
				<div className={styles.type}>
					{lang === 'QQ'
						? data?.data.category.latin
						: data?.data.category.kiril}
				</div>
				<div className={styles.desc}>
					{lang === 'QQ'
						? data?.data.description.latin
						: data?.data.description.kiril}
				</div>
				{data?.data?.audio?.length && (
					<div className={styles.audio}>
						{!isPlaying ? (
							<>
								<FaVolumeUp
									onClick={() => {
										setIsPlaying(true)
										playAudio()
									}}
								/>
							</>
						) : (
							<FaStop
								onClick={() => {
									setIsPlaying(false)
									stopAudio()
								}}
							/>
						)}
						<audio
							ref={audioRef}
							src={data?.data?.audio}
							style={{ display: 'none' }}
						/>
					</div>
				)}
				<div className={styles.common}>
					<Antonim />
					<Sinonim />
				</div>
			</div>
		</Spin>
	)
}
export { Word }
