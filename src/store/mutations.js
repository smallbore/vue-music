import * as types from './mutations-type'

const matutaions = {
    [types.SET_SINGER](state, singer) {
        state.singer = singer
    },
    [types.SET_PLAYLIST](state, list) {
        state.playlist = list
    },
}

export default matutaions