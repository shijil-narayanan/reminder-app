

class ReminderDOMHelper{

    constructor(dateUtility){
        this.dateUtility = dateUtility;
    }

    /**
     * Responsible to return the form values entered in Add reminder form
     * @returns {{title: *, description: *, date: *, priority: string | null}}
     */
    getReminderObjValuesFromDOM(){

        const title = document.querySelector('.reminder-title').value;
        const description = document.querySelector('.reminder-description').value;
        const date =  document.querySelector('.date-picker').value;
        const priority = document.querySelector('.priority-btn-group').getAttribute('priority');

        return  {title, description, date, priority };
    }

    /**
     * Responsible to pre fill the reminder form values on click of edit
     * @param reminder
     */
    updateReminderValuesInDOM(reminder){

        document.querySelector('.reminder-title').value = reminder.title || '';
        document.querySelector('.reminder-description').value = reminder.description || '';
        document.querySelector('.date-picker').value = reminder.date || this.dateUtility.getCurrentDateAndTime();
        document.querySelector('.priority-btn-group').setAttribute('priority', reminder.priority);

        this.updateReminderPriorityInDOM(reminder.priority);
    }

    /**
     * Responsible to store the reminder priority value in dom and set active state of priority group buttons
     * @param priority
     */

    updateReminderPriorityInDOM(priority){

        document.querySelector('.priority-btn-group').setAttribute('priority', priority);

        document.querySelectorAll('.priority-btn-group button').forEach(ele => {
            ele.classList.remove('active');
            if(ele.getAttribute('data-priority') === priority){
                ele.classList.add('active');
            }
        });

    }

    /**
     * Reponsible to paint the dom with the reminder list
     * @param list
     */

    renderReminderList(list = []) {

        let reminderItem = '';
        const priorityIconColors = { high: 'red', medium: 'green', low: 'yellow'};

        list.forEach((item, index) => {
            reminderItem += `
              <div class="reminder-item-box">
                   <div class="reminder-item">
                      <img class="reminder-icon" src="./assets/images/${priorityIconColors[item.priority]}.png"/>
                      <div class="title">${item.title}</div>
                      <div class="description">${item.description}</div>
                       <div class="date">${item.date}</div>
                       <div class="reminder-actions">
                          <img class="edit-reminder cursor-pointer" data-action="edit" data-id="${index}" src="./assets/images/edit.png"/>
                          <img class="remove-reminder cursor-pointer" data-action="delete" data-id="${index}" src="./assets/images/cancel.png"/>
                      </div>
                  </div>
              </div>
           `
        });

        document.querySelector('.reminder-lists').innerHTML = reminderItem;

    }
}