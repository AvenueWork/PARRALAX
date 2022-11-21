window.addEventListener("scroll", e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})
gsap.resisterPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content"
})
