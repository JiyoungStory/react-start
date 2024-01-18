import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id : 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({  // state의 update는 반드시 setState() 사용
                    notifications: notifications,
                });
            } else {
                // notifications를 비워줌으로써 컴포넌트의 생명주기를 마무리
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.notifications?.map((notification) => { 
                    return (
                        <Notification
                            key={notification.id}  // react element를 구분하기 위한 고유의 값
                            id={notification.id}
                            message={notification.message} 
                        />
                    )
                })}
            </div>
        );
    }
}

export default NotificationList;