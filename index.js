function shout(string){
    return string.toUpperCase();
};

function whisper(string){
    return string.toLowerCase();
};
function logShout(string){
    console.log(string.toUpperCase())
    return;
};  
function logWhisper(string){
    console.log(string.toLowerCase());
    return;
};
function sayHiToHeadphonedRoommate(string){
    const cantHear = string.toLowerCase();
    const shout = string.toUpperCase();
    if (string === cantHear){
        return "I can't hear you!";
    }
    else if (string === shout){
        return "YES INDEED!";
    }
    else if (string === "Let's have dinner together!"){
        return "I would love to!";
    }
};
