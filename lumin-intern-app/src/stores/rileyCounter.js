import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
    id: 'rileyCounter',
    state: () => ({
        count: 0
    }),
    actions: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        }
    },
    getters: {
        primeOrNot: (state) => {
            const num = state.count;
            if (num <= 1) return 'Not Prime';
            if (num === 2) return 'Prime';
            const sqrt = Math.sqrt(num);
            for (let i = 2; i <= sqrt; i++) {
                if (num % i === 0) return 'Not Prime';
            }
            return 'Prime';
        }
    }
});
