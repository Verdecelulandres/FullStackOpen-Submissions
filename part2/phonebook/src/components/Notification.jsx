const Notification = ({message}) => {
    if(message === null) {
        return null;
    }
    const notificationStyles = {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 5,
        padding: 5,
        color: 'green',
        backgroundColor: 'lightgrey',
        marginBottom: 10
    }
    return (
    <div style={notificationStyles}>
        {message}
    </div>
    )
}

export default Notification;