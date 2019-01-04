$(document).ready(function (){
    $(document).keydown(function (e) {
        // left arrow key down
        if (e.keyCode == 37) {
            prev = $("a.prev")
            if ( prev.length > 0) {
                prev[0].click()
                return false
            }
        }
        // right arrow key down
        if (e.keyCode == 39) {
            next = $("a.next")
            if ( next.length > 0) {
                next[0].click()
                return false
            }
        }
    })
})