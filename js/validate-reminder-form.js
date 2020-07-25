
class ReminderValidator{

    /**
     * Responsible to validate reminder form before submit
     * @returns {boolean}
     */

    validateReminderForm() {
        const title = document.querySelector('.reminder-title').value;
        const description = document.querySelector('.reminder-description').value;
        const date = document.querySelector('.date-picker').value;
        const priority = document.querySelector('.priority-btn-group').getAttribute('priority');

        return !!(title && description && date && priority);

     }

}