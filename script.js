function notify() {
    Notification.requestPermission().then(permission => {
        permission = new Notification("Notification works...")
    })
}