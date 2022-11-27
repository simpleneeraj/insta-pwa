import m from "moment"
import { createSlice } from "@reduxjs/toolkit";


const url = `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2luZG93cyUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60`;


const initialState = {
    textStyle: {
        'font-size': 14,
        'font-weight': 400,
        'text-color': `#fff`,
        'line-height': 1.6,
        'text-align': `left`,
        'letter-spacing': 0.8,
        'text-transform': `initial`,
        'font-family': `HelveticaRoman`,
    },
    cardStyle: {
        alpha: 1,
        'blur': 10,
        'round': 15,
        'background-color': 'rgba(0,0,0,.5)',
    },
    frameStyle: {
        'background': url,
        'aspect-ratio': '1:1'
    },
    tweet: {
        'watermark': 'Twitter For Mac',
        'timestamp': `${m().format("HH:mm")} · ${m().format("D/M/YYYY")}`,
        'userImage': '',
        'contentImage': '',
        'userName': 'Simple Neeraj',
        'userHandle': '@simplneeraj',
    },
    lockScreen: {
        'hours': m().format('H'),
        'minutes': m().format('mm'),
        'seconds': m().format('ss'),
        'days': m().format('d'),
        'months': m().format('MMMM'),
        'years': m().format('YYYY'),
        'dayNumber': m().format('DD'),
    },
    notification: {
        'timestamp': 'now',
        'appName': 'Messages',
        'appIcon': 'https://raw.githubusercontent.com/neerajcodes/dataImages/main/ios/apple-messages.svg',
    },
    textContent: {
        'title': `Walt Disney`,
        'message': `All our dreams can come true if we have the courage to pursue them.`,
    },
    reminder: {
        'heading': '',
    }
}

const customizationSlice = createSlice({
    name: 'Customization',
    initialState,
    reducers: {
        customizationText: (state, action) => {
            // @ts-expect-error
            state.textStyle[action.payload.key] = action.payload.value
        },
        customizationCard: (state, action) => {
            // @ts-expect-error
            state.cardStyle[action.payload.key] = action.payload.value
        },
        customizationFrame: (state, action) => {
            // @ts-expect-error
            state.frameStyle[action.payload.key] = action.payload.value
        },
        customizationTweet: (state, action) => {
            // @ts-expect-error
            state.tweet[action.payload.key] = action.payload.value
        },
        customizationLockScreen: (state, action) => {
            // @ts-expect-error
            state.lockScreen[action.payload.key] = action.payload.value
        },
        customizationTextContent: (state, action) => {
            // @ts-expect-error
            state.textContent[action.payload.key] = action.payload.value
        },
    }
})

export default customizationSlice