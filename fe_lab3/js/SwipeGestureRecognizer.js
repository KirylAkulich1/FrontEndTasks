

export class SwipeGestureRecognizer{
    trackArea;
    manager;
    OnSwipeUp = ()=>console.log('Up');
    OnSwipeDown =()=>console.log('Down');
    OnSwipeLeft =()=>console.log('Left');
    OnSwipeRight =()=>console.log('Right');

    constructor(trackAreaId){
        this.trackArea = document.getElementById(trackAreaId);
        this.manager= new Hammer.Manager(this.trackArea);

        let Swipe= new Hammer.Swipe();
        this.manager.add(Swipe);

        this.manager.on('swipe',e=>{
            switch(e.direction){
                case Hammer.DIRECTION_UP:
                    this.OnSwipeUp();
                    break;
                case Hammer.DIRECTION_RIGHT:
                    this.OnSwipeRight();
                    break;
                case Hammer.DIRECTION_DOWN:
                    this.OnSwipeDown();
                    break;
                case Hammer.DIRECTION_LEFT:
                    this.OnSwipeLeft();
                    break;
            }
        })
    }

}