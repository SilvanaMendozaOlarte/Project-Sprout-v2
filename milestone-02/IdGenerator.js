class IdGenerator {
    IdGenerator = null
    constructor() {
        if (this.IdGenerator === null) {
            this.IdGenerator = this
            this.project_id = -1
            this.task_id = -1
            this.pomodoro_id = -1
        }
        return ChangePage.ChangePage
    }
    generateProjectId() {
        return this.project_id++
    }
    generateTaskId() {
        return this.task_id++
    }
    generatePomodoroId() {
        return this.pomodoro_id++
    }
}

export default ChangePage