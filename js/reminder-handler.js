

class ReminderCRUDHandler{

    constructor(reminderDOMHelper){
        const reminders = localStorage.getItem('reminders');
        this.reminderList = reminders ? JSON.parse(reminders) : [];
        this.currentReminderIndex = null;
        this.reminderDOMHelper = reminderDOMHelper;
    }


    /**
     * Responsible to return a reminder list
     * @returns {Array|*}
     */
    getReminderList(){
        return this.reminderList;
    }

    /**
     * Responsible to add/update reminder in/within the reminder list as well as local storage
     */
    addReminder(){
        const reminderObj = this.reminderDOMHelper.getReminderObjValuesFromDOM();
        this.currentReminderIndex ? ( this.reminderList[this.currentReminderIndex] = reminderObj ) : this.reminderList.push(reminderObj);
        localStorage.setItem('reminders', JSON.stringify(this.reminderList));
    }

    /**
     * Responsible to call the dom handler methods to pre fill the reminder form in case of edit
     * @param id
     */

    updateReminderForm(id){
        const reminder = this.reminderList[id] || {};
        reminder.priority = reminder.priority || 'high';
        this.reminderDOMHelper.updateReminderValuesInDOM(reminder);
        this.currentReminderIndex = id;
    }

    /**
     * Responsible to remove reminder w.r.t its index
     * @param index
     */

    removeReminder(index) {
        this.reminderList.splice(Number(index), 1);
        localStorage.setItem('reminders', JSON.stringify(this.reminderList));
    }

}