try {
    setTimeout(() => {
        const section = document.querySelector('section')
        let targets = document.querySelectorAll("article a.r-1cvl2hr")
        targets.forEach(target => target.classList.remove('r-1cvl2hr'))

        const observer = new MutationObserver( () => {
            targets = document.querySelectorAll("article a.r-1cvl2hr")
            targets.forEach(target => target.classList.remove('r-1cvl2hr'))
        })
        
        observer.observe(section, {
            childList: true,
            subtree: true
        })
    }, 500)
} catch (error) {
    console.log("予期せぬエラーが発生しました")
}