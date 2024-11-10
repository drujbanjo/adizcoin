import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type useCounterStoreType = {
	count: number
	increment: () => void
}

export const useCounterStore = create<useCounterStoreType>()(
	devtools(
		persist(
			set => ({
				count: 0,
				increment: () => set(state => ({ count: state.count + 1 })),
			}),
			{
				name: 'counter',
			}
		)
	)
)
