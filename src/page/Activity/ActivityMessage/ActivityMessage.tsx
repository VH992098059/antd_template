import {Button} from "antd";

const ActivityMessage:React.FC = () => {
    return (
        <div id="activity_message">
            <h2>标题测试</h2>
            <p>活动介绍:</p>
            <p>asdasdsadasdsajkhdaskhdajklshdaklshdjkalshdjkashdjkaskjldh</p>
            <p>报名时间：<span>23</span></p>
            <p>截止时间：<span>23</span></p>
            <Button type={"primary"}>报名参加</Button>
        </div>
    )
}
export default ActivityMessage
