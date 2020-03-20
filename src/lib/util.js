
import { ws, RAVE_PUBLIC_KEY } from './constant';

export const calculateStateFromProps = ({ dateTo, numberOfFigures = 0, mostSignificantFigure = 0 }) => {
    const currentDate = new Date();
    const targetDate = new Date(dateTo);
    const diff = targetDate-currentDate;
    var significance = ['year','month','day','hour','min','sec'];

    let year= Math.floor(diff/31104000000);// time diff in years
    let month= Math.floor((diff/2592000000)%12); // time diff in months (modulated to 12)
    let day= Math.floor((diff/86400000)%30); // time diff in days (modulated to 30)
    let hour= Math.floor((diff/3600000)%24); // time diff's hours (modulated to 24)
    let min= Math.floor((diff/60000)%60); // time diff's minutes (modulated to 60)
    let sec= Math.floor((diff/1000)%60); // time diff's seconds (modulated to 60)
       
    if(mostSignificantFigure === 'none'){
        if(year === 0){
            significance=significance.slice(1);
            if(month === 0){
                significance=significance.slice(1);
                if(day === 0){
                    significance=significance.slice(1);
                    if(hour === 0){
                        significance=significance.slice(1);
                        if(min === 0){
                            significance=significance.slice(1);
                        }
                    }
                }
            }
        }
    }
    else{
        significance = significance.slice(significance.indexOf(mostSignificantFigure));
    }
    significance = significance.slice(0,numberOfFigures);


    if(significance.indexOf('year')===-1){
        month += year*12;
        year = 0;
    }
    if(significance.indexOf('month')===-1){
        day += month*30;
        month = 0;
    }
    if(significance.indexOf('day')===-1){
        hour += day*24;
        day = 0;
    }
    if(significance.indexOf('hour')===-1){
        min += hour*60;
        hour = 0;
    }
    if(significance.indexOf('min')===-1){
        sec += min*60;
        min = 0;
    }
   
    return {
        speed:250,
        diff: diff,
        significance: significance,
        year: year,
        month: month,
        day: day,
        hour: hour,
        min: min,
        sec: sec
    };
}

export const storeTrackInfo =  (user) => {
    const strUser =  JSON.stringify(user);
    ws.setItem('user', strUser);
}

export const download = (amt) => {
    const user = ws.getItem('user');
    const extUser = JSON.parse(user);
    const { name, email, phone } = extUser;
    if(user === undefined || user === null) {
      window.$('#modalBox').modal('show');
      return window.payWithRave(phone, amt, email, RAVE_PUBLIC_KEY);
    } 
    window.payWithRave(phone, amt, email, RAVE_PUBLIC_KEY);
    
  };