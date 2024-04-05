function progress_bar(num) {
    if (num < 0 || num > 100) {
        throw new Error("0 <= num <= 100")
    }
    bar = '[' + '%'.repeat(num / 10) + '.'.repeat(10 - Math.floor(num / 10)) + ']'
    if (num == 100) {
        percent = `${num}% Complete!`
        console.log(percent + '\n' + bar)
        return
    }
    percent = num + "%";
    console.log(percent + ' ' + bar + '\n' + "Still loading...")
}

progress_bar(30)
progress_bar(50)
progress_bar(55)
progress_bar(51)
progress_bar(59)
progress_bar(0)
progress_bar(1)
progress_bar(100)