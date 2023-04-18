let AC_GAME_OBJECTS = [];

class AcGameObject {
    constructor(){
        AC_GAME_OBJECTS.push(this);

        this.timedelta = 0;
        this.has_called_start = false;
    }

    start(){

    }

    update(){

    }

    destroy(){
        for(let i in AC_GAME_OBJECTS){
            if(AC_GAME_OBJECTS[i] === this){
                AC_GAME_OBJECTS.splice(i, 1);
                break;
            }
        }
    }

}

let last_timestamp;

let AC_GAME_OBJECT_FRAME = (timestamp) => {
    for (let obj of AC_GAME_OBJECTS){
        if ( !obj.has_called_start ){
            obj.start();
            obj.has_called_start = true;
        }else{
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }

    last_timestamp = timestamp;
    requestAnimationFrame(AC_GAME_OBJECT_FRAME);
}

requestAnimationFrame(AC_GAME_OBJECT_FRAME);

export {
    AcGameObject
}