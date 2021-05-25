const wakeUpOldMan = () => "it's time to wake up";
const breakfast = () => 'breakfast';
const sleep = () => 'sleeping';

const doingThings = (action) => action();

console.log(doingThings(wakeUpOldMan));