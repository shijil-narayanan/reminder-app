
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

        document.querySelector('#splash-screen').style.display = 'none';
        document.querySelector('#reminder-list').style.display = 'none';

    }

    /**
     * Responsible to show reminder list section and hide rest
     */
    showReminderListSection(){
        document.querySelector('#home').style.display = 'block';
        document.querySelector('#reminder-list').style.display = 'block';

        document.querySelector('#add-reminder').style.display = 'none';
        document.querySelector('#splash-screen').style.display = 'none';
    }

}