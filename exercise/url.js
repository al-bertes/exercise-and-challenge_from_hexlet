// Реализуйте абстракцию для работы с урлами. Она должна извлекать и менять части адреса. Интерфейс:

// make(url) - Конструктор. Создает урл.
// setProtocol(data, protocol) - Сеттер. Меняет схему.
// getProtocol(data) - Селектор (геттер). Извлекает схему.
// setHost(data, host) - Сеттер. Меняет хост.
// getHost(data) - Геттер. Извлекает хост.
// setPath(data, path) - Сеттер. Меняет строку запроса.
// getPath(data) - Геттер. Извлекает строку запроса.
// setQueryParam(data, key, value) - Сеттер. Устанавливает значение для параметра запроса.
// getQueryParam(data, paramName, default = null) - Геттер. Извлекает значение для параметра запроса. 
//     Третьим параметром функция принимает значение по умолчанию, которое возвращается тогда, 
//     когда в запросе не было такого параметра
// toString(data) - Геттер. Преобразует урл в строковой вид.

const make = (url) => {
    if (url.length === 0) {
        return '';
    }
    const protocol = url.split('//')[0];
    const host = url.split('//')[1].split('/')[0];
    let path = url.split('//')[1].split('/')[1].split('?')[0];
    path = '/' + path;
    let param = url.split('//')[1].split('/')[1].split('?')[1].split('&')
        .reduce((acc, item) => {
            const arr = item.split('=');
            const key = arr[0];
            const val = arr[1];
            acc[key] = val;
            return acc;
        }, {})
    if (param.length === 0) {
        param = ''
    }
    return {
        protocol,
        host,
        path,
        param
    }
}
const setProtocol = (url, newProtocol) => {
    url.protocol = newProtocol;
}

const getProtocol = (data) => data.protocol;

const setHost = (data, newHost) => {
    data.host = newHost;
}

const getHost = (data) => data.host;

const setPath = (data, newPath) => data.path = newPath;

const getPath = (data) => data.path;

const setQueryParam = (data, key, val) => data.param[key] = val;
const getQueryParam = (data, paramName, def = null) => {
    return data.param[paramName] ?? def;
}
const toString = (data) => {
    const getParam = Object.entries(data.param)
        .reduce((acc, item) => {
            const i = item[0] + '=' + item[1];
            acc.push(i);
            return acc;
        }, []).join('&')
    return `${data.protocol}//${data.host}${data.path}?${getParam}`;
}

export { make, setProtocol, getProtocol, setHost, getHost, setQueryParam, getQueryParam, getPath, setPath, toString };