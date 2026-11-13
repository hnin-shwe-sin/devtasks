function taskView(id) {
    return `/tasks/${id}`;
}

function taskIndex() {
    return `/tasks`;
}

function taskEdit(id) {
    return `/tasks/edit/${id}`;
}

export { taskView, taskIndex, taskEdit }