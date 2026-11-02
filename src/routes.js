function taskView(id) {
    return `/tasks/${id}`;
}

function taskIndex() {
    return `/tasks`;
}

export { taskView, taskIndex }