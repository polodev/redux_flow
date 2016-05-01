export function objectSize(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}

export function setCookie (name, value, days) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toGMTString();
  }
  document.cookie = name + '=' + value + ';' + expires;
}

export function getCookie (name) {
  const value = '; ' + document.cookie;
  const parts = value.split('; ' + name + '=');
  return (parts.length === 2) ? parts.pop().split(';').shift() : '';
}

export function getCurrentScreenSize(argument) {
  var size=document.documentElement.clientWidth;
  return (size < xs) ?  'xs' : (size <= sm) ? 'sm' : (size <= md) ? 'md' : 'lg';
}

export function getCardsPerRow(argument) {
  var colWidth = getCurrentScreenSize();
  return (colWidth === 'xs') ? 1 : (colWidth === 'sm') ? 2 : 3;
}

export function deleteCookie (name) {
  setCookie(name, '', -1);
}

export default {
  deleteCookie,
  getCookie,
  objectSize,
  setCookie
};
