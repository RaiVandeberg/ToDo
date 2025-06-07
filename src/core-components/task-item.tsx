import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";

export default function TaskItem() {
    return <Card size="md" className="flex items-center gap-3 p-4">
        <InputCheckbox />
        <Text>Compras da semana</Text>
    </Card>
}