import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import Trash from "../assets/icons/trash.svg?react";
import Pencil from "../assets/icons/pencil.svg?react";
import X from "../assets/icons/x.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import { useState } from "react";
import InputText from "../components/input-text";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/use-task";


interface TaskItemProps {
    task: Task
}

export default function TaskItem({ task }: TaskItemProps) {

    const [isEditing, setIsEditing] = useState(task?.state === TaskState.Creating);
    const [taskTitle, setTaskTitle] = useState(task?.title || "");
    const { updatetask, updateTaskStatus, deleteTask } = useTask();

    function handleEditTask() {
        setIsEditing(true);
    }

    function handleCancelEditTask() {
        if (task?.state === TaskState.Creating) {
            deleteTask(task.id);
        }
    }
    function handleChangeTaskTitle(event: React.ChangeEvent<HTMLInputElement>) {
        setTaskTitle(event.target.value || "");
    }

    function handleSaveTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        updatetask(task.id, { title: taskTitle });
        setIsEditing(false);

    }
    function handleChangeTaskStatus(event: React.ChangeEvent<HTMLInputElement>) {
        const checked = event.target.checked;
        updateTaskStatus(task.id, checked);
    }

    function handleDeleteTask() {
        deleteTask(task.id);
    }


    return (



        <Card size="md" >
            {!isEditing ? (
                <div className="flex items-center gap-4 ">
                    <InputCheckbox onChange={handleChangeTaskStatus} checked={task?.concluded} />
                    <Text className={cx("flex-1", { "line-through": task?.concluded })} >{task?.title}</Text>
                    <div className="flex gap-1">
                        <ButtonIcon icon={Trash} variant="tertiary" onClick={handleDeleteTask} />
                        <ButtonIcon icon={Pencil} variant="tertiary" onClick={handleEditTask} />
                    </div>

                </div>

            ) : (
                <form onSubmit={handleSaveTask} className="flex items-center gap-4 ">
                    <InputText value={taskTitle} className="flex-1" onChange={handleChangeTaskTitle} required autoFocus />
                    <div className="flex gap-1">
                        <ButtonIcon type="button" icon={X} variant="secondary" onClick={handleCancelEditTask} />
                        <ButtonIcon type="submit" icon={CheckIcon} variant="primary" />
                    </div>


                </form>
            )}

        </Card>

    )
}