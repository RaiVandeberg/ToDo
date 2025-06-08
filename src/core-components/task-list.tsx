import Button from "../components/button";
import Plus from "../assets/icons/plus.svg?react";
import TaskItem from "./task-item";
import useTasks from "../hooks/use-tasks";
import useTask from "../hooks/use-task";
import { TaskState } from "../models/task";

export default function TaskList() {

    const { tasks } = useTasks();
    const { prepareTask } = useTask();

    function handleNewTask() {
        prepareTask();
    }

    return <>
        <section>
            <Button disabled={tasks.some((task) => task.state === TaskState.Creating)} icon={Plus} className="w-full mb-4" onClick={handleNewTask}>Nova Tarefa</Button>
        </section>
        <section className="space-y-2 md:space-y-4">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </section>
    </>
}