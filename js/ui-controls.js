
class UIControls {

    /**
     * Responsible to handle expansion and collapse of sidebar
     */

    toggleSideBar(){
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('sidebar_close');
    }

    /**
     * Responsible to show add reminder section and hide rest
     */
    showAddReminderSection(){
        document.querySelector('#home').style.display = 'block';
        document.querySelector('#add-reminder').style.display = 'block';

        document.getElementById('reminder-list').style.display = 'none';
        this.removeSplashScreen();

    }

    /**
     * Responsible to show reminder list section and hide rest
     */
    showReminderListSection(){
        document.querySelector('#home').style.display = 'block';
        document.querySelector('#reminder-list').style.display = 'block';

        document.querySelector('#add-reminder').style.display = 'none';
        this.removeSplashScreen();
    }

    /**
     * Responsible to remove splash screen from DOM
     */
    removeSplashScreen(){
        const splashScreen = document.querySelector('#splash-screen');
        if(splashScreen){
            splashScreen.remove();
        }
    }

}