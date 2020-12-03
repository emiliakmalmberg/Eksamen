function remove(){
    localStorage.removeItem("newUser");}

    //når man submitter gemmer den newUser og useren, samt en ekstra der hedder newUser_e.
    //Så har vi stadig deres data selvom de sletter account, hvis de fortryder. LS bruges til hvis
    //brugeren fortsat vil være logget ind. fejl da den så ville skulle slette fra serveren og ikke LS.
    //Men ikke helt fejl da de slettes "alle steder fra", så skal bruge app.delete, hvis man vil slette en user fra serveren. 