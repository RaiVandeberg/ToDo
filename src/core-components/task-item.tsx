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
import Skeleton from "../components/skeleton";


interface TaskItemProps {
    task: Task
    loading?: boolean;
}

export default function TaskItem({ task, loading }: TaskItemProps) {

    const [isEditing, setIsEditing] = useState(task?.state === TaskState.Creating);
    const [taskTitle, setTaskTitle] = useState(task?.title || "");
    const { updatetask, updateTaskStatus, deleteTask, isUpdatingTask, isDeleteTask } = useTask();

    function handleEditTask() {
        setIsEditing(true);
    }

    function handleCancelEditTask() {
        if (task?.state === TaskState.Creating) {
            deleteTask(task.id);
        }
        setIsEditing(false);
    }
    function handleChangeTaskTitle(event: React.ChangeEvent<HTMLInputElement>) {
        setTaskTitle(event.target.value || "");
    }

    async function handleSaveTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        await updatetask(task.id, { title: taskTitle });
        setIsEditing(false);

    }
    async function handleChangeTaskStatus(event: React.ChangeEvent<HTMLInputElement>) {
        const checked = event.target.checked;
        await updateTaskStatus(task.id, checked);
    }

    function handleDeleteTask() {
        deleteTask(task.id);
    }


    return (



        <Card size="md" >
            {!isEditing ? (
                <div className="flex items-center gap-4 ">
                    <InputCheckbox onChange={handleChangeTaskStatus} checked={task?.concluded} loading={loading} />
                    {!loading ? <Text className={cx("flex-1", { "line-through": task?.concluded })} >{task?.title}</Text> :
                        <Skeleton className="h-6 flex-1" />
                    }
                    <div className="flex gap-1">
                        <ButtonIcon icon={Trash} variant="tertiary" onClick={handleDeleteTask} loading={loading} handling={isDeleteTask} />
                        <ButtonIcon icon={Pencil} variant="tertiary" onClick={handleEditTask} loading={loading} />
                    </div>

                </div>

            ) : (
                <form onSubmit={handleSaveTask} className="flex items-center gap-4 ">
                    <InputText value={taskTitle} className="flex-1" onChange={handleChangeTaskTitle} required autoFocus />
                    <div className="flex gap-1">
                        <ButtonIcon type="button" icon={X} variant="secondary" onClick={handleCancelEditTask} />
                        <ButtonIcon type="submit" icon={CheckIcon} variant="primary" handling={isUpdatingTask} />
                    </div>


                </form>
            )}

        </Card>

    )
}