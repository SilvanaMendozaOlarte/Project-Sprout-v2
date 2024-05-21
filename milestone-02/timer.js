const timer = () => {
    const rounds = document.getElementById('timer_rounds')
    const workMinutes = document.getElementById('work_minutes')
    const workSeconds = document.getElementById('work_seconds')
    const restMinutes = document.getElementById('rest_minutes')
    const restSeconds = document.getElementById('rest_seconds')
    rounds.disabled = true
    workMinutes.disabled = true
    workSeconds.disabled = true
    restMinutes.disabled = true
    restSeconds.disabled = true
    let curRounds = Number(rounds.value)
    const startWorkMinutes = workMinutes.value
    const startWorkSeconds = workSeconds.value
    const startRestMinutes = restMinutes.value
    const startRestSeconds = restSeconds.value
    let working = true
    let intervalID = setInterval(() => {
        if (working) {
            if (workSeconds.value === '0') {
                if (workMinutes.value === '0') {
                    if (curRounds === 1) {
                        rounds.disabled = false
                        workMinutes.disabled = false
                        workSeconds.disabled = false
                        restMinutes.disabled = false
                        restSeconds.disabled = false
                        rounds.value = null
                        workMinutes.value = null
                        workSeconds.value = null
                        restMinutes.value = null
                        restSeconds.value = null
                        clearInterval(intervalID)
                        return
                    }
                    working = false
                    restMinutes.value = startRestMinutes
                    restSeconds.value = startRestSeconds
                    return
                }
                workMinutes.value--
                workSeconds.value = '59'
                return
            }
            workSeconds.value--
        }
        if (!working) {
            if (restSeconds.value === '0') {
                if (restMinutes.value === '0') {
                    working = true
                    workMinutes.value = startWorkMinutes
                    workSeconds.value = startWorkSeconds
                    if (curRounds !== 2) {
                        restMinutes.value = startRestMinutes
                        restSeconds.value = startRestSeconds
                    }
                    curRounds--
                    rounds.value = curRounds 
                    return
                }
                restMinutes.value--
                restSeconds.value = '59'
                return
            }
            restSeconds.value--
        }
    }, 10)
}

export default timer