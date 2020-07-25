
class DateUtility {


    /**
     * Responsible to return current date (DD/MM/YYYY) and time in string format
     */
    getCurrentDateAndTime(){
        const currentDate = new Date();

        const datetime = currentDate.getDate() + "-"+(currentDate.getMonth()+1)
            + "-" + currentDate.getFullYear() + "  "
            + currentDate.getHours() + ":"
            + currentDate.getMinutes() + " " + (currentDate.getHours() >= 12 ? 'PM': 'AM');

        return datetime;
    }
}
