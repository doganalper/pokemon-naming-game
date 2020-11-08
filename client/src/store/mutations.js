export const CLEAR_GAME = (state) => {
    state.isGameStarted = false;
    state.playerName = null;
    state.point = 0;
    state.failsCount = 0;
}

export const START_GAME = (state, playerName) => {
    state.isGameStarted = true;
    state.playerName = playerName;
}

export const UPDATE_PLAYER_POINT = (state, addition) => {
    state.point += addition;
    state.rightGuessCount += 1;
}

export const SET_OPEN_DETAIL = (state, payload) => {
    switch (payload) {
        case 'Open':
            state.openDetail = true;
            break;

        case 'Close':
            state.openDetail = false;
            break;
    }
}

export const INCREASE_FAILS = (state) => { state.failsCount++ }

export const SET_FAILED = (state) => { state.isFailed = true }