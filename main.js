window.addEventListener('scroll', () => {
   document.querySelector(".gold-rush").style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);
