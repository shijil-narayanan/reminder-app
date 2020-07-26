(function () {

    const backGroundImageUpdater = new BackGroundImageUpdater();
    const uiControl = new UIControls();
    const dateUtility = new DateUtility();
    const reminderDOMHelper = new ReminderDOMHelper(dateUtility);
    const reminderCRUDHandler = new ReminderCRUDHandler(reminderDOMHelper);
    const reminderValidator = new ReminderValidator();


    backGroundImageUpdater.updateBGImageByCurrentHour();

    /**
     * Responsible to show add reminder section; if id is passed; that means the form is in edit mode
     * @param id
     */
    function renderAddReminder(id){
        uiControl.showAddReminderSection();
        reminderCRUDHandler.updateReminderForm(id);
    }

    /**
     * Responsible to show reminder list section
     */
    function renderReminderList() {

        uiControl.showReminderListSection();

        const list = reminderCRUDHandler.getReminderList();
        reminderDOMHelper.renderReminderList(list);
    }


    /**
     * Responsible to store the value of reminder priority selected
     * @param evt
     */
    function handleReminderPrioritySelection(evt){
        const { priority}  = evt.target.dataset;
        if (priority) reminderDOMHelper.updateReminderPriorityInDOM(priority);
    }

    /**
     * Responsible to delete the reminder by id passed and re-render the dom
     * @param id
     */
    function handleReminderDelete(id){
        reminderCRUDHandler.removeReminder(id);
        renderReminderList();
    }

    /**
     * Responsible to delegate reminder actions based on action type
     * @param evt
     */
    function handleReminderActions(evt){
        const {action, id} = evt.target.dataset;

        switch (action) {
            case 'edit': {
                renderAddReminder(id);
                return;
            }
            case 'delete':  {
                handleReminderDelete(id);
                return;
            }
        }
    }

    /**
     * Responsible to validate and save the entered values in reminder form and
     */

    function saveReminder() {
        const isFormValid = reminderValidator.validateReminderForm();

        if (isFormValid) {
            reminderCRUDHandler.addReminder();
            renderReminderList();
        } else {
            alert('Please fill all the values');
        }
    }

    /**
     * Responsible to assign click handlers
     */

    window.addEventListener('DOMContentLoaded', () => {

        if(reminderCRUDHandler.getReminderList().length)  renderReminderList();

        document.querySelector('#collapsed-icon').onclick = uiControl.toggleSideBar;

        document.querySelector('#save-reminder').onclick = saveReminder;

        document.querySelector('.priority-section').onclick = (evt) => handleReminderPrioritySelection(evt);

        document.querySelectorAll('.add-reminder').forEach(item => {
            item.addEventListener('click', () => {
                renderAddReminder();
            });
        });

        document.querySelector('.reminder-lists').onclick = (evt) => handleReminderActions(evt);
    });

}());







