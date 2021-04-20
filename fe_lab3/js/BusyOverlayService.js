class BusyOverlayService{
    async showWhileExecutingAsync(func){
        let busyOverlay=  document.getElementById("overlay");
        busyOverlay.style.display = "block";
        await func()
        busyOverlay.style.display = "none";
    }
}

busyOverlayService = new BusyOverlayService();

export default busyOverlay