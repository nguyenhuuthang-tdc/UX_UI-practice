$('.nav-menu a').on('click',function(e) {
	if(this.hash !== '')
	{
		e.preventDefault();
		const hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 1000);
	}
});
/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
	origin : 'top',
	distance : '80px',
	duration : '500',
	reset : 'true',
})

/* SCROLL HOME */

sr.reveal('.home_title', {})
sr.reveal('.home_img', {delay:200})
sr.reveal('.link_info', {delay:300})
sr.reveal('.btn',{delay:200})
/* SCROLL ABOUT */

sr.reveal('.about_title', {})
sr.reveal('.about_img', {delay:100})
sr.reveal('.about_text', {delay:200})

/* SCROLL SKILL */

sr.reveal('.skill_title', {})
sr.reveal('.skill_sub_title', {delay:100})
sr.reveal('.txt', {delay:200})
sr.reveal('.skill_data', {interval:50})
sr.reveal('.skill_img', {delay:200})

/* SCROLL WORK */

sr.reveal('.work_title', {})
sr.reveal('.work_img', {interval:50})

/* SCROLL CONTACT */

sr.reveal('.contact_title', {})
sr.reveal('.contact_input', {interval:80})

