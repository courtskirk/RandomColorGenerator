var numberChoice;
class View{
    /*View properties*/

    #canvas;
    #context;

    /* view.constructor- instantiates an instance of view*/
    constructor(){
        this.#canvas = document.getElementById("viewport");
        this.#context = this.#canvas.getContext("2d");
    }

    //view.color changes the color of the box
    static color(min, max){
        numberChoice = getRandomIntInclusive(min, max);
        //document.getElementById("viewport").style.setProperty('black', numberChoice);
        console.log("numberChoice", numberChoice);
        document.getElementById("viewport").className = numberChoice? `${numberChoice}` :"black";
    }

    static printRGB(){
        let value;
        //all rgb values so far
        switch(numberChoice){
            //skin
            case 1:
                value = "rgb(84,55,52)";
            break;

            case 2:
                value = "rgb(136,88,59)";
            break;

            case 3:
                value = "rgb(214,157,112)";
            break;

            case 4:
                value = "rgb(253,234,221)";
            break;

            case 5:
                value = "rgb(245,214,175)";
            break;

            //vibrant
            case 6:
                value = "rgb(255,0,255)";
            break;

            case 7:
                value = "rgb(51,255,255)";
            break;

            case 8:
                value = "rgb(51,255,51)";
            break;

            case 9:
                value = "rgb(225,255,51)";
            break;

            case 10:
                value = "rgb(225,0,0)";
            break;

            case 11:
                value = "rgb(153,51,255)";
            break;

            //pastels
            case 12:
                value = "rgb(251,182,209)";
            break;

            case 13:
                value = "rgb(229,204,255)";
            break;

            case 14:
                value = "rgb(253,202,162)";
            break;

            case 15:
                value = "rgb(225,255,176)";
            break;

            case 16:
                value = "rgb(204,255,204)";
            break;

            case 17:
                value = "rgb(204,236,239)";
            break;

            //roygbiv
            case 18:
                value = "rgb(254,121,209)";
            break;

            case 19:
                value = "rgb(125,60,181)";
            break;

            case 20:
                value = "orange";
            break;

            case 21:
                value = "rgb(255,249,53)";
            break;

            case 22:
                value = "rgb(0,158,53)";
            break;

            case 23:
                value = "rgb(0,121,231)";
            break;

            case 24:
                value = "rgb(0,0,0)";
            break;

            case 25:
                value = "rgb(128,128,128)";
            break;

            case 26:
                value = "rgb(255,255,255)";
            break;

            case 27:
                value = "rgb(225,0,0)";
            break;
        }
        document.getElementById("rgb").innerHTML = `${value}`;
    }
}

const view = new View();   /*<------ This is a global-scoped variable*/

//show on screen
View.color();