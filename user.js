class User{
    constructor(){
        this.input = null;
        this.index = null;
    }
    updateCpunt(count) {
        database.ref('/').update({
          userCount: count
        });
    }
    update(){
        varplayerIndex = "player" + this.index;
        database.ref(playerIndex).set({
            input: this.input,
            answer: []
        });
    }
}