function ErrorNotification(props) {

        return (
            <div className="alert alert-warning">
                {props.children}
            </div>
        );
    }



export default ErrorNotification;
