exports.date = (time, format = 'YYYY-MM-DD HH:mm:ss') => {
    let dateFormat = require('date-fns/format');
    return dateFormat(new Date(parseInt(time)), format)
};
