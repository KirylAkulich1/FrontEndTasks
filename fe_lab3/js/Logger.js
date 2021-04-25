

class Logger{
    Log(obj,message){throw new Error('Not Implemented');}
}

export class ConsoleLogger extends Logger{
    
    Log(object,message){
        console.log(object.toString().concat(':',message));
    }

}