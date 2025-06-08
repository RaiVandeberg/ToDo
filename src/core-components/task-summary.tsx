import Badge from "../components/badge";
import Text from "../components/text";
import useTasks from "../hooks/use-tasks";


export default function TaskSummary() {

    const { CreatedTasksCount, concludedTasksCount } = useTasks();

    return (<>

        <div className="flex items-center gap-2">
            <Text variant="body-md-bold" className="!text-gray-300">Tarefas Criadas</Text>
            <Badge variant="secondary">{CreatedTasksCount}</Badge>
        </div>

        <div className="flex items-center gap-2">
            <Text variant="body-md-bold" className="!text-gray-300"> Concluídas</Text>
            <Badge variant="primary"> {concludedTasksCount} de {CreatedTasksCount}</Badge>
        </div>

    </>)
}