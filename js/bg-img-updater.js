
 class BackGroundImageUpdater {
     /**
      * Responsible to change background image of the main view w.r.t the time of the day
      */
    updateBGImageByCurrentHour(){
        const currentHour = new Date().getHours();
        const backgroundImageType = (currentHour >= 22  || currentHour <= 6) ? 'night' : (currentHour > 6 && currentHour <=14) ? 'morning' : 'evening';
        const backgroundImageUrl = `url(./assets/images/${backgroundImageType}.png)`;
        document.querySelector('.calendar-home').style.backgroundImage =  backgroundImageUrl;
    }

}
