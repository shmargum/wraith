var callback = arguments[arguments.length-1];
document.body.innerHTML = "&nbsp;";
document.body.style['background-color'] = 'red';
document.body.style['height'] = '16px';
document.body.style['width'] = '320px';
callback();
