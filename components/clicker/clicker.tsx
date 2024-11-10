'use client'

import { useCounterStore } from '@/hooks'
import styles from './clicker.module.scss'
import Image from 'next/image'

export const Clicker = () => {
	const { count, increment } = useCounterStore()
	return (
		<div className={styles.wrap}>
			<div className={styles.counter}>
				<h1>{count}</h1>
			</div>
			<div className={styles.clicker}>
				<button onClick={increment}>
					<Image
						src='/clicker.png'
						alt='clicker'
						width={99999999999999}
						height={99999999999999}
					/>
				</button>
			</div>
		</div>
	)
}
