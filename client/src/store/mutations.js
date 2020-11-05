export const CLEAR_GAME = (state) => {
    state.isGameStarted = false;
    state.playerName = null;
    state.point = 0;
}

export const START_GAME = (state, playerName) => {
    state.isGameStarted = true;
    state.playerName = playerName;
}

export const UPDATE_PLAYER_POINT = (state, addition) => {
    state.point += addition;
    state.rightGuessCount += 1;
}