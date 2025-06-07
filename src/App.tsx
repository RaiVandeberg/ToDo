import Text from "./components/text";
import TrasnIcon from "./assets/icons/trash.svg?react"
import Icon from "./components/icon";
import CheckIcon from "./assets/icons/check.svg?react"
import Pencil from "./assets/icons/pencil.svg?react"
import Plus from "./assets/icons/plus.svg?react"
import Spinner from "./assets/icons/spinner.svg?react"
import X from "./assets/icons/x.svg?react"
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import InputText from "./components/input-text";


export default function App() {

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <Text variant="body-md-bold">Olá</Text>
      <div>
        <Icon svg={TrasnIcon} className="fill-pink-base" />
        <Icon svg={CheckIcon} className="fill-green-base" />
        <Icon svg={Pencil} className="fill-blue-base" />
        <Icon svg={Plus} className="fill-yellow-base" />
        <Icon svg={Spinner} animate />
        <Icon svg={X} className="fill-red-base" />
      </div>
      <div>
        <Badge variant="primary" size="sm">Primary</Badge>
        <Badge variant="secondary" size="sm">Secondary</Badge>
      </div>
      <div>
        <Button className="mt-2" icon={Plus}>
          Primary
        </Button>

        <ButtonIcon icon={TrasnIcon} />
        <ButtonIcon icon={TrasnIcon} variant="secondary" />
        <ButtonIcon icon={TrasnIcon} variant="tertiary" />
      </div>
      <InputText />
    </div>
  )
}


